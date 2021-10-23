import { MouseEvent, useCallback, useState } from 'react';
import { SortTypes} from './sort.constants';

type TSortProps = {
  onSortByPriceIncrease: () => void;
  onSortByPriceDecrease: () => void;
  onSortByRateDecrease: () => void;
  onSortByPopularDecrease: () => void;
};
function Sort({onSortByPriceIncrease, onSortByPriceDecrease, onSortByRateDecrease, onSortByPopularDecrease}: TSortProps): JSX.Element {
  const [isSortListActive, setSortListActive] = useState<boolean>(false);
  const [sortType, setSortType] = useState<string | null>('Popular');
  const handleOpenSortListClick = useCallback(() => {
    setSortListActive((preState) => !preState);
  }, []);
  const handlePopularClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setSortType(e.currentTarget.textContent);
    setSortListActive(false);
    onSortByPopularDecrease();

  }, []);
  const handlePriceIncreaseClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setSortType(e.currentTarget.textContent);
    setSortListActive(false);
    onSortByPriceIncrease();

  }, []);
  const handlePriceDecreaseClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setSortType(e.currentTarget.textContent);
    setSortListActive(false);
    onSortByPriceDecrease();
  }, []);
  const handleRateDecreaseClick = useCallback((e: MouseEvent<HTMLLIElement>) => {
    setSortType(e.currentTarget.textContent);
    setSortListActive(false);
    onSortByRateDecrease();
  }, []);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={handleOpenSortListClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isSortListActive ? 'places__options--opened' : ''}`}>
        <li className={`places__option ${sortType === SortTypes.Popular ? 'places__option--active': ''}`} tabIndex={0} onClick={handlePopularClick}>Popular</li>
        <li className={`places__option ${sortType === SortTypes.PriceIncrease ? 'places__option--active': ''}`} tabIndex={0} onClick={handlePriceIncreaseClick}>Price: low to high</li>
        <li className={`places__option ${sortType === SortTypes.PriceDecrease ? 'places__option--active': ''}`} tabIndex={0} onClick={handlePriceDecreaseClick}>Price: high to low</li>
        <li className={`places__option ${sortType === SortTypes.RateDecrease ? 'places__option--active': ''}`} tabIndex={0} onClick={handleRateDecreaseClick}>Top rated first</li>
      </ul>
    </form>
  );
}

export default Sort;
