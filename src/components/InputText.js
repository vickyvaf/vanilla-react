const InputText = (input, setInput) => {
  const inputText = document.createElement("input");
  inputText.id = "input"
  inputText.placeholder = "Type..."
  inputText.value = input;
  inputText.oninput = (event) => {
    setInput(event.target.value);
  };

  return inputText;
};

export default InputText;
