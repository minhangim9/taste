/**
 * 카카오 지도 Web JavaScript SDK 최소 타입 선언
 */

export {};

declare global {
  interface Window {
    kakao?: {
      maps: {
        load: (callback: () => void) => void;
        LatLng: new (lat: number, lng: number) => KakaoLatLng;
        LatLngBounds: new () => KakaoLatLngBounds;
        Map: new (
          container: HTMLElement,
          options: {
            center: KakaoLatLng;
            level?: number;
          }
        ) => KakaoMap;
        Marker: new (options: {
          map?: KakaoMap | null;
          position: KakaoLatLng;
          title?: string;
          zIndex?: number;
        }) => KakaoMarker;
        CustomOverlay: new (options: {
          map?: KakaoMap | null;
          position: KakaoLatLng;
          content: string | HTMLElement;
          yAnchor?: number;
          xAnchor?: number;
          zIndex?: number;
          clickable?: boolean;
        }) => KakaoCustomOverlay;
        Circle: new (options: {
          map?: KakaoMap | null;
          center: KakaoLatLng;
          radius: number;
          strokeWeight?: number;
          strokeColor?: string;
          strokeOpacity?: number;
          strokeStyle?: string;
          fillColor?: string;
          fillOpacity?: number;
        }) => KakaoCircle;
        event: {
          addListener: (
            target: unknown,
            type: string,
            handler: () => void
          ) => void;
        };
      };
    };
  }
}

export interface KakaoLatLng {
  getLat: () => number;
  getLng: () => number;
}

export interface KakaoLatLngBounds {
  extend: (latlng: KakaoLatLng) => void;
}

export interface KakaoMap {
  setCenter: (latlng: KakaoLatLng) => void;
  panTo: (latlng: KakaoLatLng) => void;
  setLevel: (level: number, options?: { animate?: boolean }) => void;
  getLevel: () => number;
  setBounds: (bounds: KakaoLatLngBounds) => void;
  relayout: () => void;
}

export interface KakaoMarker {
  setMap: (map: KakaoMap | null) => void;
  getPosition: () => KakaoLatLng;
  setZIndex: (zIndex: number) => void;
}

export interface KakaoCustomOverlay {
  setMap: (map: KakaoMap | null) => void;
  setPosition: (position: KakaoLatLng) => void;
}

export interface KakaoCircle {
  setMap: (map: KakaoMap | null) => void;
}
