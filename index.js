const React = (() => {
  let hooks = [];
  let idx = 0;
  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => {
      const newState =
        typeof newVal === "function" ? newVal(hooks[_idx]) : newVal;
      hooks[_idx] = newState;
    };
    idx++;
    return [state, setState];
  }

  function useEffect(callback, depArray) {
    const hasNoDeps = !depArray;
    const deps = hooks[idx];
    const hasChangedDeps = deps
      ? !depArray.every((el, i) => el === deps[i])
      : true;
    if (hasNoDeps || hasChangedDeps) {
      hooks[idx] = depArray;
      callback();
    }
    idx++;
  }

  function render(Component) {
    idx = 0;
    const C = Component();
    C.render();
    return C;
  }
  return { useState, render, useEffect };
})();

const Component = () => {
  const [count, setCount] = React.useState(1);
  const [word, setWord] = React.useState("apple");

  React.useEffect(() => {
    console.log("this is not react");
  }, []);

  return {
    render: () => console.log({ count, word }),
    click: () => setCount(count + 1),
    type: (word) => setWord(word),
  };
};

var App = React.render(Component);
App.click();
var App = React.render(Component);
App.type("pear");
var App = React.render(Component);
