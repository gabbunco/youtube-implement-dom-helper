export function createDOM(tagName, attributes = null) {
  const element = document.createElement(tagName);

  if (attributes) {
    for (let key in attributes) {
      setAttribute(element, key, attributes[key]);
    }
  }

  return element;
}

export function setAttribute(element, key, value) {
  element[key] = value;
}
