function reducer(prevState, action) {
  switch (action.type) {
    case "FETCH": {
      return {
        ...prevState,
        isLoading: true,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...prevState,
        isLoading: false,
        products: action.payload.products,
        errorMsg: "",
        searchInputValue: "",
      };
    }
    case "FETCH_EMPTY": {
      return {
        ...prevState,
        isLoading: false,
        products: [],
        errorMsg: "",
        searchInputValue: "",
      };
    }
    case "FETCH_ERROR": {
      return {
        ...prevState,
        isLoading: false,
        products: [],
        errorMsg: action.payload.errorMsg,
        searchInputValue: "",
      };
    }
    case "CHANGE_INPUT": {
      return {
        ...prevState,
        searchInputValue: action.payload.searchInputValue,
      };
    }
    default: {
      return prevState;
    }
  }
}

export { reducer };
