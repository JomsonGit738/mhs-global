import type { DependencyList, MutableRefObject } from "react";
import type { GSAPTimeline, TimelineVars, TweenVars } from "gsap";

export type GsapDirection = "up" | "down" | "left" | "right" | "none";

export type UseGsapRevealTarget =
  | Element
  | Element[]
  | MutableRefObject<Element | null | undefined>
  | Array<MutableRefObject<Element | null | undefined>>
  | null
  | undefined;

export type UseGsapRevealOptions = {
  direction?: GsapDirection;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  once?: boolean;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  scroll?:
    | boolean
    | {
        trigger?: Element | string;
        start?: string;
        end?: string;
        scrub?: boolean | number;
        once?: boolean;
        markers?: boolean;
        id?: string;
      };
  scope?: Element | Document | null;
  overlap?: number;
  deps?: DependencyList;
  trigger?: Element | string;
  id?: string;
  from?: TweenVars;
  to?: TweenVars;
  timeline?: TimelineVars;
  onStart?: () => void;
  onComplete?: () => void;
};

export declare const gsapInstance: typeof import("gsap").gsap;
export declare const createGsapTimeline: (
  config?: TimelineVars
) => GSAPTimeline;

export declare const useGsapReveal: (
  target: UseGsapRevealTarget,
  options?: UseGsapRevealOptions
) => void;

export declare const useGsapTimeline: (
  handler: (timeline: GSAPTimeline, element: HTMLElement) => void | GSAPTimeline,
  deps?: DependencyList
) => MutableRefObject<HTMLDivElement | null>;
