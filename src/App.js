import { React } from "../react/index.js";
import TextPreview from "./components/TextPreview.js";
import InputText from "./components/InputText.js";

const App = () => {
  const [input, setInput] = React.useState("");

  const div = document.createElement("div");
  div.append(TextPreview({ input }));
  div.append(InputText({ input, setInput }));
  div.style.textAlign = "center";
  return div;
};

export default App;
