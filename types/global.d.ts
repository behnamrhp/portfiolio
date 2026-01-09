// Global type declarations

/// <reference types="jquery" />

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

declare module 'turn.js' {
  export interface TurnOptions {
    width?: number;
    height?: number;
    autoCenter?: boolean;
    display?: string;
    acceleration?: boolean;
    elevation?: number;
    gradients?: boolean;
    when?: {
      turned?: (event: Event, page: number, view: string[]) => void;
      turning?: (event: Event, page: number, view: string[]) => void;
      start?: (event: Event, pageObject: any, corner: string) => void;
      end?: (event: Event, pageObject: any, corner: string) => void;
    };
  }

  export interface Turn {
    (method: string, ...args: any[]): any;
    (options: TurnOptions): JQuery;
  }

  interface JQuery {
    turn: Turn;
  }
}

declare module 'all-drag' {
  export interface DragOptions {
    returnToPlace?: boolean;
    onDrag?: (element: HTMLElement) => void;
    onDrop?: (element: HTMLElement) => void;
  }

  export default function initDrag(
    selector: string,
    options?: DragOptions
  ): void;
}

