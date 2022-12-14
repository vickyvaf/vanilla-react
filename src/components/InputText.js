const InputText = (props) => {
  const inputText = document.createElement("input");
  inputText.id = "input";
  inputText.placeholder = "Type...";
  inputText.value = props.input;
  inputText.oninput = (event) => {
    props.setInput(event.target.value);
  };

  return inputText;
};

export default InputText;
