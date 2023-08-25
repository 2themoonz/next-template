import { all, call, fork, put, takeEvery } from "redux-saga/effects";
import { getAllTodo as getAllTodoApi } from "@/services";
import { todoApiResponseSuccess, todoApiResponseError } from "./actions";
import { GET_ALL_TODO } from "./constants";

function* getAllTodo(): any {
  try {
    const response = yield call(getAllTodoApi);
    yield put(todoApiResponseSuccess(GET_ALL_TODO, response.data));
  } catch (error) {
    yield put(todoApiResponseError(GET_ALL_TODO, error));
  }
}

export function* watchGetAllTodo() {
  yield takeEvery(GET_ALL_TODO, getAllTodo);
}

export default function* todoSaga() {
  yield all([fork(watchGetAllTodo)]);
}
