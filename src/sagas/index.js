import { put, takeLatest, all, putResolve , take , takeLeading } from 'redux-saga/effects';
function* fetchNews() {
  const json = yield fetch('https://newsapi.org/v1/articles?source=cnn&apiKey=1feac3db0bff457da2949632cd0ee108')
        .then(response => response.json(), );    
  yield put({ type: "NEWS_RECEIVED", json: json.articles, });
}
function* actionWatcher() {
     yield takeLeading('GET_NEWS', fetchNews)
}
export default function* rootSaga() {
   yield all([
   actionWatcher(),
   ]);
}