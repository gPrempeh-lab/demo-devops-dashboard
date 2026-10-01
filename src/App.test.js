import { act } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container;
let root;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => root.render(<App />));
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

const findButton = (name) =>
  [...container.querySelectorAll("button.tech-item")].find(
    (b) => b.textContent === name
  );

test("renders the header", () => {
  expect(container.querySelector("h1").textContent).toBe("Demo DevOps Dashboard");
});

test("shows a description when a tech item is clicked and hides it on second click", () => {
  const docker = findButton("Docker");
  expect(container.querySelector(".tech-description")).toBeNull();

  act(() => docker.click());
  expect(docker.getAttribute("aria-expanded")).toBe("true");
  expect(container.querySelector(".tech-description").textContent).toMatch(/container/i);

  act(() => docker.click());
  expect(container.querySelector(".tech-description")).toBeNull();
});

test("only one description is open at a time", () => {
  act(() => findButton("React").click());
  act(() => findButton("Kubernetes").click());

  const descriptions = container.querySelectorAll(".tech-description");
  expect(descriptions).toHaveLength(1);
  expect(descriptions[0].textContent).toMatch(/orchestrat|cluster/i);
});
