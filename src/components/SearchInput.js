const SearchInput = (props) => {
  const inputText = document.createElement("input");
  inputText.id = "input";
  inputText.autocomplete = "off";
  inputText.value = props.inputValue;
  inputText.oninput = (event) => {
    props.setInputValue(event.target.value);
  };

  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.onclick = () => {
    props.setIsLoading(true);
    props.setInputValue("");
  };

  const div = document.createElement("div");
  div.append(inputText);
  div.append(searchButton);

  return div;
};

export default SearchInput;
