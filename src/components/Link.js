const Link = (props) => {
  const a = document.createElement("a");
  a.href = props.href;
  a.textContent = props.label;
  a.onclick = function (event) {
    event.preventDefault();
    props.pushState();
    props.onClick();
  };
  return a;
};

export default Link