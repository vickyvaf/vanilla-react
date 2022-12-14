import { React } from "../react/index.js";

const App = () => {
  const [input, setInput] = React.useState("");
  const [todos, setTodos] = React.useState(
    JSON.parse(localStorage.getItem("todos")) ?? []
  );

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const inputText = document.createElement("input");
  inputText.placeholder = "Type to add...";
  inputText.autocomplete = "off";
  inputText.id = "input";
  inputText.value = input;
  inputText.oninput = (event) => {
    setInput(event.target.value);
  };

  const addButton = document.createElement("button");
  addButton.textContent = "Add";
  if (input !== "") {
    addButton.onclick = () => {
      setTodos([...todos, input]);
      setInput("");
    };
  }

  const listWrapper = document.createElement("div");

  todos.map((todo, i) => {
    const list = document.createElement("span");
    list.textContent = todo;
    const deleteIcon = document.createElement("img");
    deleteIcon.src = "./public/delete.png";
    deleteIcon.style.width = "1em";
    deleteIcon.style.height = "1em";

    list.append(deleteIcon);
    listWrapper.append(list);
    list.style.width = "100%";
    list.style.display = "flex";
    list.style.alignItems = "center";
    list.style.justifyContent = "space-between";
    listWrapper.style.display = "flex";
    listWrapper.style.flexDirection = "column-reverse";
    listWrapper.style.gap = "1rem"

    deleteIcon.onclick = () => {
      const filteredTodos = todos.filter((_, indexTodos) => indexTodos !== i);
      setTodos([...filteredTodos]);
    };
  });

  const div = document.createElement("div");
  div.append(inputText);
  div.append(addButton);
  div.append(listWrapper);
  div.style.maxWidth = "fit-content";
  div.style.margin = "0 auto";
  div.style.textAlign = "center";
  listWrapper.style.textAlign = "start";
  listWrapper.style.marginTop = "1rem"
  return div;
};

export default App;
