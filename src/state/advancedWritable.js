import {
  writable
} from 'svelte/store';

export const advancedWritable = (defaultValue, storage) => {
  const {
    type,
    name
  } = storage || {};
  let initialValue;
  if (typeof window === 'undefined') {
    initialValue = defaultValue;
  } else {
    if (storage) {
      let v;
      if (type === 'local') {
        v = window.localStorage.getItem(name);
      }
      if (type === 'session') {
        v = window.sessionStorage.getItem(name);
      }
      if (!v) initialValue = defaultValue;
      else initialValue = JSON.parse(v)
    } else {
      initialValue = defaultValue;
    }
  }

  const {
    subscribe,
    set,
    update
  } = writable(initialValue)

  function setFunc(value) {
    set(value)
    if (storage) {
      if (type === 'local') {
        window.localStorage.setItem(name, JSON.stringify(value))
      }
      if (type === 'session') {
        window.sessionStorage.setItem(name, JSON.stringify(value))
      }
    }
  }

  function getFunc() {
    let _value;
    update(n => {
      _value = n;
      return n;
    })
    return _value;
  }

  return {
    subscribe,
    set: setFunc,
    setValue: (key, value) => {
      const n = getFunc();
      n[key] = value
      setFunc(n)
    },
    get: getFunc,
    reset: () => set(initialValue)
  }
}