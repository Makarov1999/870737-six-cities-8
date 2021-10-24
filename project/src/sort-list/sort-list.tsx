import { useState } from 'react';
import { SortTypes, SortTypesText} from './sort-list.constants';

type TSortListProps = {
  onSortByPriceIncrease: () => void;
  onSortByPriceDecrease: () => void;
  onSortByRateDecrease: () => void;
  onSortByPopularDecrease: () => void;
};
function SortList({onSortByPriceIncrease, onSortByPriceDecrease, onSortByRateDecrease, onSortByPopularDecrease}: TSortListProps): JSX.Element {
  const [isSortListActive, setSortListActive] = useState<boolean>(false);
  const [sortType, setSortType] = useState<SortTypes>(SortTypes.Popular);
  const [sortTypeText, setSortTypeText] = useState<SortTypesText>(SortTypesText.Popular);
  const setNewSortType = (sort: SortTypes, text: SortTypesText): void => {
    setSortType(sort);
    setSortTypeText(text);
    setSortListActive(false);
  };
  const handleOpenSortListClick = () => {
    setSortListActive((prevState) => !prevState);
  };
  const handlePopularClick = () => {
    setNewSortType(SortTypes.Popular, SortTypesText.Popular);
    onSortByPopularDecrease();

  };
  const handlePriceIncreaseClick = () => {
    setNewSortType(SortTypes.PriceIncrease, SortTypesText.PriceIncrease);
    onSortByPriceIncrease();

  };
  const handlePriceDecreaseClick = () => {
    setNewSortType(SortTypes.PriceDecrease, SortTypesText.PriceDecrease);
    onSortByPriceDecrease();
  };
  const handleRateDecreaseClick =() => {
    setNewSortType(SortTypes.RateDecrease, SortTypesText.RateDecrease);
    onSortByRateDecrease();
  };
  type TSortListItem = {
    id: number,
    text: SortTypesText,
    sortType: SortTypes,
    onClickHandler: () => void
  }
  const SORT_LIST_ITEMS: TSortListItem[] = [
    {
      id: 1,
      text: SortTypesText.Popular,
      sortType: SortTypes.Popular,
      onClickHandler: handlePopularClick,
    },
    {
      id: 2,
      text: SortTypesText.PriceIncrease,
      sortType: SortTypes.PriceIncrease,
      onClickHandler: handlePriceIncreaseClick,
    },
    {
      id: 3,
      text: SortTypesText.PriceDecrease,
      sortType: SortTypes.PriceDecrease,
      onClickHandler: handlePriceDecreaseClick,
    },
    {
      id: 4,
      text: SortTypesText.RateDecrease,
      sortType: SortTypes.RateDecrease,
      onClickHandler: handleRateDecreaseClick,
    },

  ];
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
          <li className={`places__option ${sortType === item.sortType ? 'places__option--active': ''}`} tabIndex={0} key={item.id} onClick={item.onClickHandler}>{item.text}</li>
        ))}
      </ul>
    </form>
  );
}

export default SortList;
