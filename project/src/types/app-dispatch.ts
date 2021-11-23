import { Dispatch } from 'react';
import { TActions, TThunkActionDispatch } from './action';

export type TAppDispatch = Dispatch<TActions> & TThunkActionDispatch;
