"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import BrandedLoader from "./BrandedLoader";

export default function RouteLoaderMount() {
  const pathname = usePathname();

  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let progressTimer: ReturnType<typeof setInterval> | undefined;
    let finishTimer: ReturnType<typeof setTimeout> | undefined;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;

    setIsLoading(true);
    setProgress(0);

    const start = Date.now();

    progressTimer = setInterval(() => {
      setProgress((current) => {
        if (current >= 90) {
          return current;
        }

        const elapsed = Date.now() - start;

        if (elapsed < 300) {
          return Math.min(current + 8, 35);
        }

        if (elapsed < 800) {
          return Math.min(current + 5, 65);
        }

        return Math.min(current + 2, 90);
      });
    }, 100);

    finishTimer = setTimeout(() => {
      setProgress(100);

      hideTimer = setTimeout(() => {
        setIsLoading(false);
      }, 350);
    }, 900);

    return () => {
      if (progressTimer) clearInterval(progressTimer);
      if (finishTimer) clearTimeout(finishTimer);
      if (hideTimer) clearTimeout(hideTimer);
    };
  }, [pathname]);

  if (!isLoading) {
    return null;
  }

  return <BrandedLoader progress={progress} />;
}