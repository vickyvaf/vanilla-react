const ErrorMessage = (props) => {
  const errorText = document.createElement("p");
  errorText.textContent = props.errorMsg;

  return errorText;
};

export default ErrorMessage;
