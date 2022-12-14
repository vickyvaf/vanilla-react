const Todos = (props) => {
  const listWrapper = document.createElement("div");

  props.todos.map((todo, i) => {
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
    listWrapper.style.gap = "1rem";

    deleteIcon.onclick = () => {
      const filteredTodos = props.todos.filter((_, indexTodos) => indexTodos !== i);
      props.setTodos([...filteredTodos]);
    };
  });

  listWrapper.style.marginTop = "1rem";

  return listWrapper;
};

export default Todos;
