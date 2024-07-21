import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { Title } from "./Title";


let container = null;
beforeEach(() => {
  // configurar o elemento do DOM como o alvo da renderização
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // Limpar ao sair
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a title", () => {
  act(() => {
    render(<Title title="Titulo"/>, container);
  });
  const titleSpan = container.querySelector("span");
  expect(titleSpan.textContent).toBe("Titulo")

  act(() => {
    render(<Title subtitle="Subtitulo"/>, container);
  });
  const subtitleSpan = container.querySelector("span");
  expect(subtitleSpan.textContent).toBe("Subtitulo")
});

it("renders with or without a subtitle", () => {
  const idx_title = 0
  const idx_subtitle = 1
  act(() => {
    render(<Title title="Titulo"/>, container);
  });
  const spansJustTitle = container.querySelectorAll("span");
  expect(spansJustTitle.length).toBe(1)
  expect(spansJustTitle[idx_title].textContent).toBe("Titulo")

  act(() => {
    render(<Title title="Titulo" subtitle="Subtitulo"/>, container);
  });
  const spansTitleAndSubTitle = container.querySelectorAll("span");

  expect(spansTitleAndSubTitle.length).toBe(2)
  expect(spansTitleAndSubTitle[idx_title].textContent).toBe("Titulo")
  expect(spansTitleAndSubTitle[idx_subtitle].textContent).toBe("Subtitulo")
});