import { useEffect, useRef } from "react";

/**
 * Attaches an HLS stream to a <video>.
 *
 * Order matters: Chrome reports canPlayType("application/vnd.apple.mpegurl")
 * as "maybe" — truthy — while being unable to play HLS natively at all. Probing
 * native support first therefore silently kills the video everywhere except
 * Safari. So MSE/hls.js wins whenever it is available, and the native element
 * path is reserved for iOS Safari, which has real HLS support and no
 * MediaSource.
 */
export function useHlsVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canPlayNatively =
      video.canPlayType("application/vnd.apple.mpegurl") !== "";
    const hasMediaSource = typeof window.MediaSource !== "undefined";

    if (canPlayNatively && !hasMediaSource) {
      video.src = src;
      return;
    }

    let cancelled = false;
    let instance: { destroy: () => void } | null = null;

    // Kept out of the initial bundle — it is only needed for the ambient video.
    import("hls.js")
      .then(({ default: Hls }) => {
        if (cancelled) return;

        if (Hls.isSupported()) {
          const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
          hls.loadSource(src);
          hls.attachMedia(video);
          hls.on(Hls.Events.MANIFEST_PARSED, () => {
            void video.play().catch(() => {
              /* autoplay blocked — the poster gradient stands in */
            });
          });
          instance = hls;
        } else if (canPlayNatively) {
          video.src = src;
        }
      })
      .catch(() => {
        if (!cancelled && canPlayNatively) video.src = src;
      });

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, [src]);

  return videoRef;
}
