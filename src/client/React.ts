const ReactDOM = (() => {
  let _container: HTMLElement;
  let _Component: () => HTMLElement;

  function update() {
    this.render(_container, _Component);
  }

  function render(container: HTMLElement, Component: () => HTMLElement) {
    _container = container;
    _Component = Component;

    const focusedElementId = document.activeElement.id;
     // @ts-ignore
    const focusedElementSelectionStart = document.activeElement.selectionStart;
     // @ts-ignore
    const focusedElementSelectionEnd = document.activeElement.selectionEnd;

    const componentDOM = React.render(Component);
    container.replaceChildren();
    container.appendChild(componentDOM);

    if (focusedElementId) {
      const focusedElement = document.getElementById(focusedElementId);
      focusedElement.focus();
       // @ts-ignore
      focusedElement.selectionStart = focusedElementSelectionStart;
       // @ts-ignore
      focusedElement.selectionEnd = focusedElementSelectionEnd;
    }
  }

  return { update, render };
})();

const React = (() => {
  let hooks = [];
  let idx = 0;

  function render(Component: () => HTMLElement) {
    idx = 0;

    const Comp = Component();
    return Comp;
  }

  function useState<T>(initVal: T): [T, (newVal: T) => void ] {
    const state = hooks[idx] || initVal;
    const _idx = idx;
    const setState = (newVal: T) => {
      const newState =
        typeof newVal === "function" ? newVal(hooks[_idx]) : newVal;
      hooks[_idx] = newState;
      ReactDOM.update();
    };
    idx++;
    return [state, setState];
  }

  function useEffect(callback: () => void, depArray: any[]) {
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

  function useReducer<A, B>(reducer: (prevState: A, action: B) => A, initialState: B) {
    const _idx = idx;
    idx++

    hooks[_idx] = hooks[_idx] ?? initialState;

    const dispatch = (action: B) => {
      const newState = reducer(hooks[_idx], action);
      hooks[_idx] = newState;
      ReactDOM.update();
    };

    return [hooks[_idx], dispatch];
  }

  return { render, useState, useEffect, useReducer };
})();

export { React, ReactDOM };