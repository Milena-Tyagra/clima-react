import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { WeatherTimeData } from "./WeatherTimeData";
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

const idx_span_wind_speed = 1;
const idx_span_sunrise = 3;
const idx_span_sunset = 5;
const idx_span_humidity = 7;

const idx_data_wind_speed = 0;
const idx_data_sunrise = 1;
const idx_data_sunset = 2;
const idx_data_humidity = 3;

const fakeDataWithTime = [
  {
    data: "14 °C",
    label: "wind speed",
  },
  {
    data: "06:00 AM",
    label: "sunrise",
  },
  {
    data: "06:51 PM",
    label: "sunset",
  },
  {
    data: "61%",
    label: "humidity",
  },
];

const fakeDataWithoutTime = [
  {
    data: null,
    label: "dawn",
  },
  {
    data: null,
    label: "sunrise",
  },
  {
    data: null,
    label: "sunset",
  },
  {
    data: null,
    label: "nigtht",
  },
];
it("renders data", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeDataWithTime),
    })
  );

  // Usar a versão assíncrona de act para aplicar Promises resolvidas
  await act(async () => {
    render(<WeatherTimeData data={fakeDataWithTime} />, container);
  });
  const spansWithTime = container.querySelectorAll("span");

  expect(spansWithTime[idx_span_wind_speed].textContent).toBe(
    fakeDataWithTime[idx_data_wind_speed].data
  );
  expect(spansWithTime[idx_span_sunrise].textContent).toBe(
    fakeDataWithTime[idx_data_sunrise].data
  );
  expect(spansWithTime[idx_span_sunset].textContent).toBe(
    fakeDataWithTime[idx_data_sunset].data
  );
  expect(spansWithTime[idx_span_humidity].textContent).toBe(
    fakeDataWithTime[idx_data_humidity].data
  );

  // remover o mock para garantir que os testes estão completamente isolados
  global.fetch.mockRestore();
});

it("renders data without Time", async () => {
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeDataWithoutTime),
    })
  );

  // Usar a versão assíncrona de act para aplicar Promises resolvidas
  await act(async () => {
    render(<WeatherTimeData data={fakeDataWithoutTime} />, container);
  });
  const spansWithoutTime = container.querySelectorAll("span");

  expect(spansWithoutTime[idx_span_wind_speed].textContent).toBe(
    displayMessage("EMPTY")
  );
  expect(spansWithoutTime[idx_span_sunrise].textContent).toBe(
    displayMessage("EMPTY")
  );
  expect(spansWithoutTime[idx_span_sunset].textContent).toBe(
    displayMessage("EMPTY")
  );
  expect(spansWithoutTime[idx_span_humidity].textContent).toBe(
    displayMessage("EMPTY")
  );

  // remover o mock para garantir que os testes estão completamente isolados
  global.fetch.mockRestore();
});
