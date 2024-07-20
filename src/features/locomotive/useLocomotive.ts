import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useMemo, useState } from "react";
import { useMediaQuery, useWindowSize } from "usehooks-ts";

export function useLocomotive() {
  const [locomotive, setLocomotive] = useState<LocomotiveScroll | null>(null);
  const { width: window_width = 0 } = useWindowSize();
  const isDesktop = useMemo(() => window_width >= 768, [window_width]);
  const prefersReducedMotion = useMediaQuery(
    "(prefers-reduced-motion: reduce)",
  );

  useEffect(() => {
    if (!isDesktop || prefersReducedMotion) {
      locomotive?.destroy?.();
      return;
    }

    if (!!locomotive) return;

    const locomotiveScroll = new LocomotiveScroll({});
    setLocomotive(locomotiveScroll);
  }, [isDesktop, prefersReducedMotion, locomotive]);
}
