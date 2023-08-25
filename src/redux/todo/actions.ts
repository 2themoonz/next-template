// constants
import {
  API_RESPONSE_ERROR,
  API_RESPONSE_SUCCESS,
  GET_ALL_TODO,
} from "./constants";

// common success
export const todoApiResponseSuccess = (actionType: string, data: any) => ({
  type: API_RESPONSE_SUCCESS,
  payload: { actionType, data },
});

// common error
export const todoApiResponseError = (actionType: string, error: any) => ({
  type: API_RESPONSE_ERROR,
  payload: { actionType, error },
});

export const getAllTodo = () => ({
  type: GET_ALL_TODO,
  payload: {},
});
