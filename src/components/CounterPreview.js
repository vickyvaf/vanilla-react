const CounterPreview = (props) => {
  const counterPreview = document.createElement("p");
  counterPreview.textContent = props.counter;

  return counterPreview;
};

export default CounterPreview;
