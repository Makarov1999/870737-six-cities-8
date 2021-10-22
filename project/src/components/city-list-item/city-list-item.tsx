type TCityListItemProps = {
  cityName: string;
  isActive: boolean;
};
function CityListItem({cityName, isActive}: TCityListItemProps): JSX.Element {
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive ? 'tabs__item--active' : ''}`} href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
}

export default CityListItem;
