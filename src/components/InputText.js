const InputText = (props) => {
  const inputText = document.createElement("input");
  inputText.placeholder = "Type to add...";
  inputText.autocomplete = "off";
  inputText.id = "input";
  inputText.value = props.input;
  inputText.oninput = (event) => {
    props.setInput(event.target.value);
  };

  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  if (props.input !== "") {
    addButton.onclick = () => {
      props.setTodos([...props.todos, props.input]);
      props.setInput("");
    };
  }

  const div = document.createElement("div");
  div.append(inputText);
  div.append(addButton);

  return div;
};

export default InputText;
