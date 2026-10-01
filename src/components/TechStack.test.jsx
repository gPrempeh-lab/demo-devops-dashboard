import { act } from "react";
import { createRoot } from "react-dom/client";
import TechStack from "./TechStack";

globalThis.IS_REACT_ACT_ENVIRONMENT = true;

let container;
let root;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
  root = createRoot(container);
  act(() => root.render(<TechStack />));
});

afterEach(() => {
  act(() => root.unmount());
  container.remove();
});

const categories = () =>
  [...container.querySelectorAll(".tech-group h3")].map((h) => h.textContent);

const itemsIn = (category) => {
  const group = [...container.querySelectorAll(".tech-group")].find(
    (g) => g.querySelector("h3").textContent === category
  );
  return [...group.querySelectorAll("button.tech-item")].map((b) => b.textContent);
};

const clickItem = (name) => {
  const button = [...container.querySelectorAll("button.tech-item")].find(
    (b) => b.textContent === name
  );
  act(() => button.click());
  return button;
};

test("renders the Azure and Terraform categories", () => {
  expect(categories()).toEqual(
    expect.arrayContaining(["Cloud (Azure)", "Infrastructure as Code (Terraform)"])
  );
});

test("Azure category lists its items", () => {
  expect(itemsIn("Cloud (Azure)")).toEqual([
    "Azure",
    "Azure Kubernetes Service (AKS)",
    "Azure Container Registry (ACR)"
  ]);
});

test("Terraform category lists its items", () => {
  expect(itemsIn("Infrastructure as Code (Terraform)")).toEqual([
    "Terraform",
    "Providers",
    "State"
  ]);
});

test.each([
  ["Azure", /Microsoft's cloud platform/],
  ["Azure Kubernetes Service (AKS)", /managed Kubernetes/],
  ["Azure Container Registry (ACR)", /container images/],
  ["Terraform", /infrastructure in code/],
  ["Providers", /azurerm/],
  ["State", /what it has created/]
])("clicking %s shows its description", (name, expected) => {
  const button = clickItem(name);
  expect(button.getAttribute("aria-expanded")).toBe("true");
  expect(container.querySelector(".tech-description").textContent).toMatch(expected);
});

test("switching from an Azure item to a Terraform item keeps only one open", () => {
  clickItem("Azure");
  clickItem("Terraform");

  const descriptions = container.querySelectorAll(".tech-description");
  expect(descriptions).toHaveLength(1);
  expect(descriptions[0].textContent).toMatch(/HashiCorp/);
});
