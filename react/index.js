const ReactDOM = (() => {
  let _container;
  let _Component;

  function update() {
    this.render(_container, _Component);
  }

  function render(container, Component) {
    _container = container;
    _Component = Component;

    const focusedElementId = document.activeElement.id;
    const focusedElementSelectionStart = document.activeElement.selectionStart;
    const focusedElementSelectionEnd = document.activeElement.selectionEnd;

    const componentDOM = React.render(Component);
    container.replaceChildren();
    container.appendChild(componentDOM);

    if (focusedElementId) {
      const focusedElement = document.getElementById(focusedElementId);
      focusedElement.focus();
      focusedElement.selectionStart = focusedElementSelectionStart;
      focusedElement.selectionEnd = focusedElementSelectionEnd;
    }
  }

  return { update, render };
})();

const React = (() => {
  let hooks = [];
  let idx = 0;

  function render(Component) {
    idx = 0;

    const Comp = Component();
    return Comp;
  }

  function useState(initVal) {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal) => {
      const newState =
        typeof newVal === "function" ? newVal(hooks[_idx]) : newVal;
      hooks[_idx] = newState;
      ReactDOM.update();
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

  return { render, useState, useEffect };
})();

export { React, ReactDOM };
