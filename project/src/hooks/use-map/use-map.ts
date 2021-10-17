import { MutableRefObject, useEffect, useState} from 'react';
import { TCity } from '../../types/city';
import {Map, TileLayer} from 'leaflet';
import {MAP_URL_TEMPLATE, MAP_ATTRIBUTION} from './use-map.constants';

function useMap(mapRef: MutableRefObject<HTMLElement | null> , city: TCity): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  useEffect(() => {
    if (mapRef.current !== null && map === null) {
      const instance = new Map(mapRef.current, {
        center: {
          lat: city.location.latitude,
          lng: city.location.longitude,
        },
        zoom: city.location.zoom,
      });
      const layer = new TileLayer(
        MAP_URL_TEMPLATE,
        {
          attribution:
                  MAP_ATTRIBUTION,
        },
      );
      instance.addLayer(layer);
      setMap(instance);
    }
  }, [mapRef, map, city]);
  return map;
}

export default useMap;
