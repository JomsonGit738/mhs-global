import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";

type DeferredRenderProps = {
  children: ReactNode;
  className?: string;
  minHeight?: CSSProperties["minHeight"];
  rootMargin?: string;
};

const DeferredRender = ({
  children,
  className,
  minHeight,
  rootMargin = "240px 0px",
}: DeferredRenderProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const element = containerRef.current;

    if (!element) {
      return;
    }

    if (typeof window === "undefined" || typeof window.IntersectionObserver !== "function") {
      setIsVisible(true);
      return;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={isVisible ? undefined : { minHeight }}
    >
      {isVisible ? children : null}
    </div>
  );
};

export default DeferredRender;
