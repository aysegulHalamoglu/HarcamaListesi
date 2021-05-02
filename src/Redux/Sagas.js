import { all } from 'redux-saga/effects';
import { userSagas } from '../Modules/Auth/Redux/UserSaga';


export default function* rootSaga() {
  yield all([
    ...userSagas,
  ]);
}
