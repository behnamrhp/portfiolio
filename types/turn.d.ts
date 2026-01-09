/// <reference types="jquery" />

declare namespace TurnJs {
  type DisplayMode = 'single' | 'double';
  type Direction = 'ltr' | 'rtl';
  type Corner = 'tl' | 'tr' | 'bl' | 'br' | 'l' | 'r' | '';
  type CornerGroup = 'forward' | 'backward' | 'all';

  interface Point2D {
    x: number;
    y: number;
  }

  interface Size {
    width: number;
    height: number;
  }

  interface View {
    0: number;
    1?: number;
  }

  interface PageObject {
    next: number;
    page: number;
    view: number[];
  }

  interface TurnEventHandlers {
    /** Called when a page turn starts */
    start?: (event: JQuery.TriggeredEvent, pageObject: PageObject, corner: string) => void;
    /** Called while a page is turning */
    turning?: (event: JQuery.TriggeredEvent, page: number, view: View) => void;
    /** Called when a page turn completes */
    turned?: (event: JQuery.TriggeredEvent, page: number, view: View) => void;
    /** Called when the first page is shown */
    first?: (event: JQuery.TriggeredEvent) => void;
    /** Called when the last page is shown */
    last?: (event: JQuery.TriggeredEvent) => void;
    /** Called when a page is pressed */
    pressed?: (event: JQuery.TriggeredEvent) => void;
    /** Called when a page is released */
    released?: (event: JQuery.TriggeredEvent, point: Point2D) => void;
    /** Called when a page flip occurs */
    flip?: (event: JQuery.TriggeredEvent) => void;
    /** Called when a flip ends */
    end?: (event: JQuery.TriggeredEvent, opts: any, turned: boolean) => void;
    /** Called when zooming starts */
    zooming?: (event: JQuery.TriggeredEvent, newZoom: number, oldZoom: number) => void;
    /** Called when a page is zoomed */
    zoomed?: (
      event: JQuery.TriggeredEvent,
      page: number,
      view: View,
      oldZoom: number,
      newZoom: number
    ) => void;
    /** Called when pages are missing */
    missing?: (event: JQuery.TriggeredEvent, pages: number[]) => void;
    /** Called when destroying starts */
    destroying?: (event: JQuery.TriggeredEvent) => void;
    [key: string]: any;
  }

  interface TurnOptions {
    /** Enables hardware acceleration */
    acceleration?: boolean;
    /** Display mode: 'single' or 'double' */
    display?: DisplayMode;
    /** Duration of transition in milliseconds */
    duration?: number;
    /** First page number (1-based) */
    page?: number;
    /** Total number of pages */
    pages?: number;
    /** Enables gradients */
    gradients?: boolean;
    /** Corners used when turning the page (e.g., 'bl,br') */
    turnCorners?: string;
    /** Direction: 'ltr' or 'rtl' */
    direction?: Direction;
    /** Width of the flipbook */
    width?: number;
    /** Height of the flipbook */
    height?: number;
    /** Auto-center the flipbook */
    autoCenter?: boolean;
    /** Elevation for 3D effect */
    elevation?: number;
    /** Event handlers */
    when?: TurnEventHandlers;
    [key: string]: any;
  }

  interface FlipOptions {
    /** Size of the active zone of each corner */
    cornerSize?: number;
    /** Page number */
    page?: number;
    /** Next page number */
    next?: number;
    /** Turn instance */
    turn?: JQuery;
    /** Corners allowed */
    corners?: CornerGroup | Corner[];
    /** Front gradient */
    frontGradient?: boolean;
    /** Back gradient */
    backGradient?: boolean;
    /** Z-index */
    'z-index'?: number;
  }

  interface AnimatefOptions {
    /** Starting values */
    from: number | number[];
    /** Target values */
    to: number | number[];
    /** Duration in milliseconds */
    duration: number;
    /** Frames per second */
    fps?: number;
    /** Frame callback */
    frame: (value: number | number[]) => void;
    /** Completion callback */
    complete?: () => void;
    /** Custom easing function */
    easing?: (x: number, t: number, b: number, c: number, d: number) => number;
  }

  interface TurnMethods {
    /** Initialize turn.js with options */
    (options?: TurnOptions): JQuery;
    /** Get or set the current page */
    (method: 'page', page?: number): number | JQuery;
    /** Get or set the number of pages */
    (method: 'pages', pages?: number): number | JQuery;
    /** Get or set the display mode */
    (method: 'display', display?: DisplayMode): DisplayMode | JQuery;
    /** Get or set the direction */
    (method: 'direction', direction?: Direction): Direction | JQuery;
    /** Get or set the size */
    (method: 'size', width?: number, height?: number): Size | JQuery;
    /** Get the current view */
    (method: 'view', page?: number): View;
    /** Get the range of pages in DOM */
    (method: 'range', page?: number): [number, number];
    /** Go to next page */
    (method: 'next'): JQuery;
    /** Go to previous page */
    (method: 'previous'): JQuery;
    /** Stop animations */
    (method: 'stop', ignore?: number, animate?: boolean): JQuery;
    /** Update the flipbook */
    (method: 'update'): JQuery;
    /** Resize pages */
    (method: 'resize'): JQuery;
    /** Center the flipbook */
    (method: 'center', page?: number): JQuery;
    /** Disable/enable page turning */
    (method: 'disable', disable?: boolean): JQuery;
    /** Check if disabled */
    (method: 'disabled', disable?: boolean): boolean | JQuery;
    /** Check if animating */
    (method: 'animating'): boolean;
    /** Get current corner */
    (method: 'corner'): Corner | false;
    /** Get or set zoom */
    (method: 'zoom', zoom?: number): number | JQuery;
    /** Add a page */
    (method: 'addPage', element: HTMLElement | JQuery, page?: number): JQuery;
    /** Remove a page */
    (method: 'removePage', page: number | '*'): JQuery;
    /** Check if page exists */
    (method: 'hasPage', page: number): boolean;
    /** Get or set options */
    (method: 'options', options?: TurnOptions): TurnOptions | JQuery;
    /** Get version */
    (method: 'version'): string;
    /** Check if element is a flipbook */
    (method: 'is'): boolean;
    /** Calculate z-index */
    (method: 'calculateZ', mv: number[]): {
      pageZ: Record<number, number>;
      partZ: Record<number, number>;
      pageV: Record<number, boolean>;
    };
    /** Show peeling corner */
    (method: 'peel', corner: Corner | false, animate?: boolean): JQuery;
    /** Destroy the flipbook */
    (method: 'destroy'): JQuery;
  }

  interface FlipMethods {
    /** Initialize flip with options */
    (options?: FlipOptions): JQuery;
    /** Get or set options */
    (method: 'options', options?: FlipOptions): FlipOptions | JQuery;
    /** Get or set z-index */
    (method: 'z', z?: number): JQuery;
    /** Resize the flip */
    (method: 'resize', full?: boolean): JQuery;
    /** Turn the page */
    (method: 'turnPage', corner?: Corner): JQuery;
    /** Hide the folded page */
    (method: 'hideFoldedPage', animate?: boolean): JQuery;
    /** Hide the flip */
    (method: 'hide'): JQuery;
    /** Disable/enable flip */
    (method: 'disable', disable?: boolean): JQuery;
    /** Enable/disable hover */
    (method: 'hover', hover?: boolean): JQuery;
    /** Show peeling corner */
    (method: 'peel', corner: Corner | false, animate?: boolean): JQuery;
    /** Check if moving */
    (method: 'moving'): boolean;
    /** Check if turning */
    (method: 'isTurning'): boolean;
    /** Get current corner */
    (method: 'corner'): Corner | null;
    /** Get flip type */
    (method: 'type'): 'hard' | 'sheet';
  }
}

interface JQuery {
  /** Turn.js methods */
  turn: TurnJs.TurnMethods;
  /** Flip methods */
  flip: TurnJs.FlipMethods;
  /** Transform element */
  transform(transform: string, origin?: string): JQuery;
  /** Animate with custom frame function */
  animatef(options?: TurnJs.AnimatefOptions | false): JQuery;
}

interface JQueryStatic {
  /** Check if touch device */
  isTouch: boolean;
  /** Mouse/touch events */
  mouseEvents: {
    down: string;
    move: string;
    up: string;
    over: string;
    out: string;
  };
  /** CSS prefix getter */
  cssPrefix: () => string;
  /** CSS transition end event name */
  cssTransitionEnd: () => string | undefined;
  /** Find position of element */
  findPos: (obj: HTMLElement) => { top: number; left: number };
}
