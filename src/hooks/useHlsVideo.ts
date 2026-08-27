import { useEffect, useRef } from "react";

/**
 * Attaches an HLS stream to a <video>. Safari plays HLS natively; everywhere
 * else hls.js is pulled in on demand so it stays out of the initial bundle.
 */
export function useHlsVideo(src: string) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      return;
    }

    let cancelled = false;
    let instance: { destroy: () => void } | null = null;

    import("hls.js").then(({ default: Hls }) => {
      if (cancelled || !Hls.isSupported()) return;
      const hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(src);
      hls.attachMedia(video);
      instance = hls;
    });

    return () => {
      cancelled = true;
      instance?.destroy();
    };
  }, [src]);

  return videoRef;
}
