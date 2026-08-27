import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Stack from "./components/Stack";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Contact from "./components/Contact";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = useCallback(() => {
    setIsLoading(false);
    // The sections mount all at once; land on the hero rather than wherever
    // the restored scroll offset happens to point.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Reloads must not drop the visitor mid-page behind the loading overlay.
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  // Hold the page still behind the overlay so the hero entrance starts from top.
  useEffect(() => {
    document.body.style.overflow = isLoading ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={finishLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Navbar />
          <main>
            <Hero />
            <Works />
            <Stack />
            <Explorations />
            <Stats />
            <Contact />
          </main>
        </motion.div>
      )}
    </>
  );
}
