const TextPreview = (props) => {
  const textPreview = document.createElement("p");
  textPreview.textContent = props.input;

  textPreview.style.minHeight = "1.5rem";
  return textPreview;
};

export default TextPreview;
