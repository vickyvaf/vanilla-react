const SearchInput = (props) => {
  const inputText = document.createElement("input");
  inputText.id = "input";
  inputText.autocomplete = "off";
  inputText.value = props.state.searchInputValue;
  inputText.oninput = (event) => {
    props.dispatch({
      type: "CHANGE_INPUT",
      payload: { searchInputValue: event.target.value },
    });
  };

  const searchButton = document.createElement("button");
  searchButton.textContent = "Search";
  searchButton.onclick = () => {
    props.dispatch({ type: "FETCH" });
  };

  const div = document.createElement("div");
  div.append(inputText);
  div.append(searchButton);

  return div;
};

export default SearchInput;
