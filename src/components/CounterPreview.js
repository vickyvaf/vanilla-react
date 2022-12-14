const CounterPreview = (counter) => {
  const counterPreview = document.createElement("p");
  counterPreview.textContent = counter;

  const div = document.createElement("div");
  div.append(counterPreview);
  return div;
};

export default CounterPreview;
