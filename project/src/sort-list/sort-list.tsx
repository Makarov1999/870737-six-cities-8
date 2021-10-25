import { useState } from 'react';
import { MapSortKeys } from '../store/map-sort';
import {SORT_LIST_ITEMS} from './sort-list.constants';

type TSortListProps = {
  onSortByType: (sortType: MapSortKeys) => void;
};
function SortList({ onSortByType}: TSortListProps): JSX.Element {
  const [isSortListActive, setSortListActive] = useState<boolean>(false);
  const [sortTypeInList, setSortTypeInList] = useState<string>('Popular');
  const [sortTypeText, setSortTypeText] = useState<string>('Popular');
  const setNewSortType = (sort: string, text: string): void => {
    setSortTypeInList(sort);
    setSortTypeText(text);
    setSortListActive(false);
  };
  const handleOpenSortListClick = () => {
    setSortListActive((prevState) => !prevState);
  };
  const handleSortTypeChange = (sortType: MapSortKeys, sortText: string) => {
    setNewSortType(sortType, sortText);
    onSortByType(sortType);
  };
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOpenSortListClick}>
        {sortTypeText}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortListActive ? 'places__options--opened' : ''}`}>
        {SORT_LIST_ITEMS.map((item) =>(
          <li className={`places__option ${sortTypeInList === item.sortType ? 'places__option--active': ''}`} tabIndex={0} key={item.id} onClick={() => {handleSortTypeChange(item.sortType, item.text);}}>{item.text}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortList;
