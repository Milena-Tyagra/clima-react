import { displayMessage } from "../../../../helpers/messages";

export const WeatherDayData = ({ data }) => {
  return (
    <div className="flex gap-5">
      {data.map((time) => (
        <div key={time.label} className="flex flex-col gap-2 justify-center items-center">
          <span className="font-light">{time?.label}</span>
          {time?.icon && time.icon}
          <span className="font-light">{time?.data ? `${time?.data} °C` : displayMessage("EMPTY")}</span>
        </div>
      ))}
    </div>
  );
};
