import { MouseEvent } from 'react';
import { TCity } from '../../types/city';

type TCityListItemProps = {
  city: TCity;
  isActive: boolean;
  onCityChange: (city: TCity) => void;
};
function CityListItem({city, isActive, onCityChange}: TCityListItemProps): JSX.Element {
  const handleItemLinkClick =(e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onCityChange(city);

  };
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#" onClick={handleItemLinkClick}>
        <span>{city.title}</span>
      </a>
    </li>
  );
}

export default CityListItem;
