const ErrorMessage = (props) => {
  const errorText = document.createElement("p");
  errorText.textContent = props.state.errorMsg;

  return errorText;
};

export default ErrorMessage;
