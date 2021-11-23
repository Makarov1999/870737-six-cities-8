import { AuthStatuses } from '../../constants';
import { ActionType, TActions } from '../../types/action';
import { TUserState } from '../../types/state';

const initialState: TUserState = {
  authorizationStatus: AuthStatuses.Unknown,
  authInfo: null,
};
export const userReducer = (state: TUserState = initialState, action: TActions): TUserState => {
  switch(action.type) {
    case ActionType.RequireAuthorization: {
      return {
        ...state,
        authorizationStatus: action.authorizationStatus,
      };
    }
    case ActionType.RequireLogout: {
      return {
        ...state,
        authorizationStatus: AuthStatuses.NoAuth,
      };
    }
    case ActionType.SetAuthInfo: {
      return {
        ...state,
        authInfo: action.authInfo,
      };
    }
    default:
      return state;
  }
};
