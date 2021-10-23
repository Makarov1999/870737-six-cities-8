import CityListItem from '../city-list-item/city-list-item';
import { CITIES } from './city-list.constants';
type TCityListProps = {
  activeCity: string;
  onCityChange: (city: string) => void;
};
function CityList({activeCity, onCityChange}: TCityListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityListItem cityName={city.name} isActive={activeCity === city.name} key={city.id} onCityChange={onCityChange}/>
      ))}
    </ul>
  );
}

export default CityList;
