import { React } from "../react/index.js";
import CounterPreview from "./components/CounterPreview.js";
import ButtonCounter from "./components/ButtonCounter.js";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const div = document.createElement("div");
  div.append(CounterPreview(counter));
  div.append(ButtonCounter(counter, setCounter));
  div.style.textAlign = "center";
  return div;
};

export default App;
