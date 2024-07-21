import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { WeatherPrincipalData } from "./WeatherPrincipalData";
import { displayMessage } from "../../../../helpers/messages";


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

const idx_span_temp_now = 0
const idx_span_max_temp = 2
const idx_span_min_temp = 3

const fakeDataWithData = {
  icon: 1087,
  max_temp: "22",
  min_temp: "14",
  temp: "15",
  text: "Text"
}

const fakeDataWithoutData = {
  icon: null,
  max_temp: null,
  min_temp: null,
  temp: null,
  text: null
}
it("renders data", async () => {
    
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeDataWithData)
      })
    );
  
    // Usar a versão assíncrona de act para aplicar Promises resolvidas
    await act(async () => {
      render(<WeatherPrincipalData data={fakeDataWithData}/>, container);
    });
    const spansWithData = container.querySelectorAll("span");
  
    expect(spansWithData[idx_span_temp_now].textContent).toBe(fakeDataWithData.temp);
    expect(spansWithData[idx_span_max_temp].textContent).toBe(fakeDataWithData.max_temp);
    expect(spansWithData[idx_span_min_temp].textContent).toBe(fakeDataWithData.min_temp);
    
  
    // remover o mock para garantir que os testes estão completamente isolados
    global.fetch.mockRestore();
  });

  it("renders data without data", async () => {
    
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeDataWithoutData)
      })
    );
  
    // Usar a versão assíncrona de act para aplicar Promises resolvidas
    await act(async () => {
      render(<WeatherPrincipalData data={fakeDataWithoutData}/>, container);
    });
    const spansWithoutData = container.querySelectorAll("span");
  
    expect(spansWithoutData[idx_span_temp_now].textContent).toBe(displayMessage("EMPTY"));
    expect(spansWithoutData[idx_span_max_temp].textContent).toBe(displayMessage("EMPTY"));
    expect(spansWithoutData[idx_span_min_temp].textContent).toBe(displayMessage("EMPTY"));
  
    // remover o mock para garantir que os testes estão completamente isolados
    global.fetch.mockRestore();
  });