export const initialState = {
  dataFromBackend: {},
  getDataFromBackend: {},
};

export const menuReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_FROM_BACKEND":
      return {
        ...state,
        dataFromBackend: action.dataFromBackend,
      };
    case "GET_DATA":
      return {
        ...state,
        getDataFromBackend: action.getDataFromBackend,
      };
    default:
      return state;
  }
};
