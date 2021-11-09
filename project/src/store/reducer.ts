import { combineReducers } from 'redux';
import { offersReducer } from './offers-reducer/offers-reducer';
import { userReducer } from './user-reducer/user-reducer';


const rootReducer = combineReducers({
  offers: offersReducer,
  user: userReducer,
});

export type TRootState = ReturnType<typeof rootReducer>;
export default rootReducer;
