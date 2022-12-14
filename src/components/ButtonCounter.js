const ButtonCounter = (props) => {
  const buttonIncrease = document.createElement("button");
  buttonIncrease.textContent = "+";
  const buttonDecrease = document.createElement("button");
  buttonDecrease.textContent = "-";

  buttonIncrease.onclick = () => {
    props.setCounter(props.counter + 1);
  };

  buttonDecrease.onclick = () => {
    props.setCounter(props.counter - 1);
  };

  const div = document.createElement("div");
  div.append(buttonDecrease);
  div.append(buttonIncrease);
  return div;
};

export default ButtonCounter;
