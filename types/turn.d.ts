/// <reference types="jquery" />

declare namespace TurnJs {
  interface TurnOptions {
    width?: number;
    height?: number;
    autoCenter?: boolean;
    display?: 'single' | 'double';
    acceleration?: boolean;
    elevation?: number;
    gradients?: boolean;
    when?: {
      turning?: (event: Event, page: number, pageObject: PageObject) => void;
      turned?: (event: Event, page: number, pageObject: PageObject) => void;
      start?: (event: Event, pageObject: PageObject, corner: Corner) => void;
      end?: (event: Event, pageObject: PageObject) => void;
      missing?: (event: Event, pages: number[]) => void;
      [key: string]: any;
    };
    [key: string]: any;
  }

  interface PageObject {
    next: number;
    page: number;
    view: number[];
  }

  type Corner = 'tl' | 'tr' | 'bl' | 'br' | '';

  interface TurnMethods {
    (method: 'page'): number;
    (method: 'page', page: number): JQuery;
    (method: 'next'): JQuery;
    (method: 'previous'): JQuery;
    (method: 'disable', disable: boolean): JQuery;
    (method: 'size'): { width: number; height: number };
    (method: 'display'): 'single' | 'double';
    (method: 'zoom', factor: number): JQuery;
    (method: 'destroy'): JQuery;
    (options: TurnOptions): JQuery;
    (): TurnOptions;
  }
}

interface JQuery {
  turn: TurnJs.TurnMethods;
}


