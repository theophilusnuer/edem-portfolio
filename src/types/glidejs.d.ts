declare module "@glidejs/glide" {
  export interface GlideOptions {
    type?: "slider" | "carousel";
    startAt?: number;
    perView?: number;
    focusAt?: number | "center";
    gap?: number;
    peek?: number | { before: number; after: number };
    autoplay?: number | false;
    hoverpause?: boolean;
    keyboard?: boolean;
    bound?: boolean;
    swipeThreshold?: number | false;
    dragThreshold?: number | false;
    perTouch?: number | false;
    touchRatio?: number;
    touchAngle?: number;
    animationDuration?: number;
    rewind?: boolean;
    rewindDuration?: number;
    animationTimingFunc?: string;
    direction?: "ltr" | "rtl";
    classes?: Record<string, string>;
    breakpoints?: Record<number, Partial<GlideOptions>>;
    throttle?: number;
  }

  export default class Glide {
    constructor(selector: string | HTMLElement, options?: GlideOptions);
    mount(extraComponents?: Record<string, unknown>): this;
    destroy(): this;
    update(options?: GlideOptions): this;
    go(pattern: string): this;
    play(interval?: number): this;
    pause(): this;
    disable(): this;
    enable(): this;
    on(event: string | string[], handler: (...args: unknown[]) => void): this;
    isType(type: string): boolean;
    index: number;
    settings: GlideOptions;
  }

  export const Controls: unknown;
  export const Breakpoints: unknown;
  export const Swipe: unknown;
  export const Autoplay: unknown;
  export const Keyboard: unknown;
  export const Anchors: unknown;
  export const Html: unknown;
  export const Images: unknown;
  export const Resize: unknown;
  export const Run: unknown;
  export const Sizes: unknown;
  export const Transition: unknown;
  export const Translate: unknown;
}
