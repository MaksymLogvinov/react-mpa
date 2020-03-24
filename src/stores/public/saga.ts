
import { all, call, fork, put, takeEvery } from 'redux-saga/effects';


function* handleFetch() {
  try {
    // To call async functions, use redux-saga's `call()`.
    // const response = yield call(callApi, 'get', API_ENDPOINT, '/heroes')
    const response = { error: '' };

    if (response.error) {
      // yield put()
    } else {
      // yield put(fetchSuccess(response))
    }
  } catch (err) {
    if (err instanceof Error) {
      // yield put()
    } else {
      // yield put()
    }
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchFetchRequest() {
  // yield takeEvery(HeroesActionTypes.FETCH_REQUEST, handleFetch)
}

// Export our root saga.
// We can also use `fork()` here to split our saga into multiple watchers.
export default function* userSaga() {
  yield all([fork(watchFetchRequest)])
}
