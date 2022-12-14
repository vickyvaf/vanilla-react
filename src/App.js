import { React } from "../react/index.js";
import InputText from "./components/InputText.js";
import Todos from "./components/Todos.js";

const App = () => {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const div = document.createElement("div");
  div.append(InputText({ input, setInput, todos, setTodos }));
  div.append(Todos({ todos, setTodos }));

  div.style.maxWidth = "fit-content";
  div.style.margin = "0 auto";

  return div;
};

export default App;
