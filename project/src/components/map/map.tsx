import { useEffect, useRef } from 'react';
import useMap from '../../hooks/use-map/use-map';
import { TCity } from '../../types/city';
import TCityPlaceCard from '../../types/city-place-card';
import { Marker } from 'leaflet';
import { ACTIVE_MARKER_ICON, DEFAULT_MARKER_ICON } from './map.constants';

type TMapProps = {
    city: TCity ,
    offers: TCityPlaceCard[],
    activeOffer: TCityPlaceCard | null
}
function Map({city, offers, activeOffer}: TMapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker.setIcon(activeOffer?.id === offer.id
          ? ACTIVE_MARKER_ICON
          : DEFAULT_MARKER_ICON)
          .addTo(map);
      });
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }

  }, [map, offers, activeOffer, city]);
  return (
    <div style={{height: '100%'}} ref={mapRef}/>
  );
}

export default Map;
