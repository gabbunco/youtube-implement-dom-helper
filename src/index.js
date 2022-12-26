import { createDOM, setAttribute } from "./helper/createdom.js";

const app = document.getElementById("app");

const button = createDOM("button", {
  textContent: "클릭해주세요",
  id: "my-button",
});

const p = createDOM("p", {
  textContent: "안녕하세요, 반갑습니다.",
  id: "my-paragraph",
  className: "text",
});

button.addEventListener("click", () => {
  setAttribute(p, "textContent", "지금 버튼이 클릭되었습니다.");
  button.remove();
});

app.append(p, button);
