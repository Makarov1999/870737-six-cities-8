import { useCallback, MouseEvent } from 'react';

type TCityListItemProps = {
  cityName: string;
  isActive: boolean;
  onCityChange: (city: string) => void;
};
function CityListItem({cityName, isActive, onCityChange}: TCityListItemProps): JSX.Element {
  const handleItemLinkClick = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onCityChange(e.currentTarget.textContent as string);

  }, []);
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#" onClick={handleItemLinkClick}>
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default CityListItem;
