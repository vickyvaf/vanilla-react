function reducer(prevState, action) {
  switch (prevState.tag) {
    case "idle": {
      switch (action.type) {
        case "FETCH": {
          return {
            ...prevState,
            tag: "loading",
          };
        }
        default: {
          return prevState;
        }
      }
    }
    case "loading": {
      switch (action.type) {
        case "FETCH_SUCCESS": {
          return {
            ...prevState,
            tag: "loaded",
            products: action.payload.products,
            errorMsg: "",
            searchInputValue: "",
          };
        }
        case "FETCH_EMPTY": {
          return {
            ...prevState,
            tag: "empty",
            products: [],
            errorMsg: "",
            searchInputValue: "",
          };
        }
        case "FETCH_ERROR": {
          return {
            ...prevState,
            tag: "error",
            products: [],
            errorMsg: action.payload.errorMsg,
            searchInputValue: "",
          };
        }
        default: {
          return prevState;
        }
      }
    }
    case "loaded": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...prevState,
            searchInputValue: action.payload.searchInputValue,
          };
        }
        case "SEARCH": {
          return {
            ...prevState,
            tag: "loading",
          };
        }
      }
    }
    case "empty": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...prevState,
            searchInputValue: action.payload.searchInputValue,
          };
        }
        case "SEARCH": {
          return {
            ...prevState,
            tag: "loading",
          };
        }
      }
    }
    case "error": {
      switch (action.type) {
        case "CHANGE_INPUT": {
          return {
            ...prevState,
            searchInputValue: action.payload.searchInputValue,
          };
        }
        case "SEARCH": {
          return {
            ...prevState,
            tag: "loading",
          };
        }
      }
    }
    default: {
      return prevState;
    }
  }
}

export { reducer };
