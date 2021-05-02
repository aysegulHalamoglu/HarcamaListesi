// Packages
import { combineReducers } from 'redux';
import { loadingReducer, LOADING_NAMESPACE } from '../Modules/Loading';
import { userReducer, USER_NAMESPACE } from '../Modules/Auth/Redux/UserRedux';

// Reducers
import { ThemeReducer } from '../Modules/Theming';
import { LocalizationReducer } from '../Modules/Localization';

export default combineReducers({
  theme: ThemeReducer,
  localization: LocalizationReducer,
  [LOADING_NAMESPACE]: loadingReducer,
  [USER_NAMESPACE]: userReducer,
});


