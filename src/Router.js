import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Initial } from "./screens/initial/Initial";
import { CityWeather } from "./screens/weather/CityWeather";

const router = createBrowserRouter(
  [
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Initial />,
        },
        {
          path: ":city_code",
          element: <CityWeather />,
        },
      ],
    },
  ],
  { basename: "/" }
);

export function Router() {
  return <RouterProvider router={router} />;
}
