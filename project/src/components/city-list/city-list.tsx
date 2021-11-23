import CityListItem from '../city-list-item/city-list-item';
import { CITIES } from '../../constants';
import { TCity } from '../../types/city';
type TCityListProps = {
  activeCity: string;
  onCityChange: (city: TCity) => void;
};
function CityList({activeCity, onCityChange}: TCityListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city) => (
        <CityListItem city={city} isActive={activeCity === city.title} key={city.id} onCityChange={onCityChange}/>
      ))}
    </ul>
  );
}

export default CityList;
