import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { WeatherDayData } from "./WeatherDayData";
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

const idx_span_dawn = 1
const idx_span_morning = 3
const idx_span_afternoon = 5
const idx_span_night = 7

const idx_data_dawn = 0
const idx_data_morning = 1
const idx_data_afternoon = 2
const idx_data_night = 3

const fakeDataWithTemperature = [
    {
        data: 14,
        label: 'dawn'
    },
    {
        data: 19,
        label: 'morning'
    },
    {
        data: 22,
        label: 'afternoon'
    },
    {
        data: 18,
        label: 'nigtht'
    }
]

const fakeDataWithoutTemperature = [
    {
        data: null,
        label: 'dawn'
    },
    {
        data: null,
        label: 'morning'
    },
    {
        data: null,
        label: 'afternoon'
    },
    {
        data: null,
        label: 'nigtht'
    }
]
it("renders data", async () => {
    
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeDataWithTemperature)
      })
    );
  
    // Usar a versão assíncrona de act para aplicar Promises resolvidas
    await act(async () => {
      render(<WeatherDayData data={fakeDataWithTemperature}/>, container);
    });
    const spansWithTemperature = container.querySelectorAll("span");
  
    expect(spansWithTemperature[idx_span_dawn].textContent).toBe(`${fakeDataWithTemperature[idx_data_dawn].data} °C`);
    expect(spansWithTemperature[idx_span_morning].textContent).toBe(`${fakeDataWithTemperature[idx_data_morning].data} °C`);
    expect(spansWithTemperature[idx_span_afternoon].textContent).toBe(`${fakeDataWithTemperature[idx_data_afternoon].data} °C`);
    expect(spansWithTemperature[idx_span_night].textContent).toBe(`${fakeDataWithTemperature[idx_data_night].data} °C`);
  
    // remover o mock para garantir que os testes estão completamente isolados
    global.fetch.mockRestore();
  });

  it("renders data without temperature", async () => {
    
    
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(fakeDataWithoutTemperature)
      })
    );
  
    // Usar a versão assíncrona de act para aplicar Promises resolvidas
    await act(async () => {
      render(<WeatherDayData data={fakeDataWithoutTemperature}/>, container);
    });
    const spansWithoutTemperature = container.querySelectorAll("span");
  
    expect(spansWithoutTemperature[idx_span_dawn].textContent).toBe(displayMessage("EMPTY"));
    expect(spansWithoutTemperature[idx_span_morning].textContent).toBe(displayMessage("EMPTY"));
    expect(spansWithoutTemperature[idx_span_afternoon].textContent).toBe(displayMessage("EMPTY"));
    expect(spansWithoutTemperature[idx_span_night].textContent).toBe(displayMessage("EMPTY"));
  
    // remover o mock para garantir que os testes estão completamente isolados
    global.fetch.mockRestore();
  });