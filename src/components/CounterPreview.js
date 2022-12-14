const CounterPreview = (counter) => {
  const counterPreview = document.createElement("p");
  counterPreview.textContent = counter;

  return counterPreview;
};

export default CounterPreview;
