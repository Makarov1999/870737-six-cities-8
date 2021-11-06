import { combineReducers } from 'redux';
import { offersReducer } from './offers-reducer/offers-reducer';
import { userReducer } from './user-reducer/user-reducer';

export enum RootReducerNameSpace {
  offers = 'OFFERS',
  user = 'USER',
}
const rootReducer = combineReducers({
  [RootReducerNameSpace.offers]: offersReducer,
  [RootReducerNameSpace.user]: userReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export {rootReducer};
