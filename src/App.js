import { React } from "../react/index.js";
import SearchInput from "./components/SearchInput.js";
import ProductsList from "./components/ProductsList.js";
import Loader from "./components/Loader.js";
import NotFound from "./components/NotFound.js";
import ErrorMessage from "./components/ErrorMessage.js";

const App = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    setIsLoading(true);
  }, []);

  React.useEffect(() => {
    if (isLoading) {
      fetch(`https://dummyjson.com/products/search?q=${inputValue}`)
        .then((res) => res.json())
        .then((res) => {
          setIsLoading(false);
          setProducts(res.products);
          setErrorMsg("");
        })
        .catch((error) => {
          setIsLoading(false);
          setProducts([]);
          setErrorMsg(error.message);
        });
    }
  }, [isLoading]);

  const div = document.createElement("div");
  div.append(SearchInput({ inputValue, setInputValue, setIsLoading }));
  if (isLoading) {
    div.append(Loader());
  }
  if (!isLoading && products.length === 0) {
    div.append(NotFound());
  }
  if (!isLoading && errorMsg !== "") {
    div.append(ErrorMessage({ errorMsg }));
  }
  if (!isLoading && products.length !== 0) {
    div.append(ProductsList({ products }));
  }

  div.style.maxWidth = "fit-content";
  div.style.margin = "0 auto";

  return div;
};

export default App;
