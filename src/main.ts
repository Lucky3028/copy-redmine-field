/* eslint-disable no-console */
const onDoubleClick = (element: Element) => {
  const content = element.textContent;
  if (content) {
    navigator.clipboard.writeText(content).catch((e) => console.error(e));
  }
};
Array.from(document.querySelectorAll('[class$=attribute]'))
  .map((element) => element.querySelector('div.value'))
  .forEach((element) =>
    element?.addEventListener('dblclick', () => onDoubleClick(element)),
  );
