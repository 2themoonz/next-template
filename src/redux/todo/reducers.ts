import {
  API_RESPONSE_ERROR,
  API_RESPONSE_SUCCESS,
  GET_ALL_TODO,
} from "./constants";

const INIT_STATE = {
  todos: [],
  loading: false,
};

const Todo = (state = INIT_STATE, action: any) => {
  switch (action.type) {
    case API_RESPONSE_SUCCESS:
      switch (action.payload.actionType) {
        case GET_ALL_TODO: {
          return {
            ...state,
            todos: action.payload.data,
            loading: false,
          };
        }

        default:
          return { ...state };
      }

    case API_RESPONSE_ERROR:
      switch (action.payload.actionType) {
        case GET_ALL_TODO: {
          return {
            ...state,
            error: action.payload.error,
            loading: false,
          };
        }
        default:
          return { ...state };
      }

    case GET_ALL_TODO:
      return { ...state, loading: true };

    default:
      return { ...state };
  }
};

export default Todo;
