import { React } from "../react/index.js";
import { reducer } from "./store/reducer.js";
import SearchInput from "./components/SearchInput.js";
import ProductsList from "./components/ProductsList.js";
import Loader from "./components/Loader.js";
import NotFound from "./components/NotFound.js";
import ErrorMessage from "./components/ErrorMessage.js";

const App = () => {
  const [state, dispatch] = React.useReducer(reducer, {
    isLoading: false,
    searchInputValue: "",
    products: [],
    errorMsg: "",
  });

  React.useEffect(() => {
    dispatch({ type: "FETCH" });
  }, []);

  React.useEffect(() => {
    if (state.isLoading) {
      fetch(`https://dummyjson.com/products/search?q=${state.searchInputValue}`)
        .then((res) => res.json())
        .then((res) => {
          if (res.products.length === 0) {
            dispatch({ type: "FETCH_EMPTY" });
          } else {
            dispatch({
              type: "FETCH_SUCCESS",
              payload: { products: res.products },
            });
          }
        })
        .catch((err) =>
          dispatch({ type: "FETCH_ERROR", payload: { errorMsg: err.message } })
        );
    }
  }, [state.isLoading]);

  const div = document.createElement("div");
  div.append(SearchInput({ dispatch, state }));
  if (state.isLoading === true) {
    div.append(Loader());
  }
  if (state.isLoading === false && state.products.length !== 0) {
    div.append(ProductsList({ state }));
  }
  if (state.isLoading === false && state.products.length === 0 && state.errorMsg === "") {
    div.append(NotFound());
  }
  if (state.isLoading === false && state.errorMsg !== "") {
    div.append(ErrorMessage({ state }));
  }

  div.style.maxWidth = "fit-content";
  div.style.margin = "0 auto";

  return div;
};

export default App;
