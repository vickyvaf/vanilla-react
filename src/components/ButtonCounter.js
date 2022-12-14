const ButtonCounter = (counter, setCounter) => {
  const buttonIncrease = document.createElement("button");
  buttonIncrease.textContent = "+";
  const buttonDecrease = document.createElement("button");
  buttonDecrease.textContent = "-";

  buttonIncrease.onclick = () => {
    setCounter(counter + 1);
  };

  buttonDecrease.onclick = () => {
    setCounter(counter - 1);
  };

  const div = document.createElement("div");
  div.append(buttonDecrease);
  div.append(buttonIncrease);
  return div;
};

export default ButtonCounter;
