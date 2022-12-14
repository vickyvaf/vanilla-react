const TextPreview = (input) => {
  const textPreview = document.createElement("p");
  textPreview.textContent = input;

  textPreview.style.minHeight = "1.5rem"
  return textPreview
};

export default TextPreview;
