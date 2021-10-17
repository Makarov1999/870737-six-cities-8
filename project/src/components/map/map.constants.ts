import { Icon } from 'leaflet';
export const DEFAULT_MARKER_ICON: Icon =  new Icon({
  iconUrl: 'img/pin.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});

export const ACTIVE_MARKER_ICON: Icon = new Icon({
  iconUrl: 'img/pin-active.svg',
  iconSize: [27, 39],
  iconAnchor: [27, 39],
});
