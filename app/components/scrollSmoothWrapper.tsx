"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

interface ScrollSmootherWrapperProps {
  children: React.ReactNode;
}

export default function ScrollSmootherWrapper({ children }: ScrollSmootherWrapperProps) {
  const smoother = useRef<ScrollSmoother | null>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!smoother.current) {
      smoother.current = ScrollSmoother.create({
        wrapper: wrapper.current!,
        content: content.current!,
        smooth: 1.5,
        effects: true,
        smoothTouch: false,
      });
    }

    return () => {
      smoother.current?.kill();
      smoother.current = null;
    };
  }, []);

  return (
    <div ref={wrapper} className="smooth-wrapper fixed inset-0 overflow-hidden">
      <div ref={content} className="smooth-content will-change-transform">
        {children}
      </div>
    </div>
  );
}
