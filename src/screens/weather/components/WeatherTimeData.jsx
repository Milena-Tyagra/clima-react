import { LineVertical } from "@phosphor-icons/react";

export const WeatherTimeData = ({ data }) => {
  return (
    <div className="flex">
      {data.map((time, i) => (
        <div className="flex items-center justyfy_between ">
          <div
            key={time.label}
            className="flex flex-col gap-1 justify-center items-center"
          >
            <span className="font-extralight text-xs">{time.label}</span>
            <span className="font-light text-sm">{time.data}</span>
          </div>
          {i != data.length - 1 && <LineVertical size={25}  weight="thin" />}
        </div>
      ))}
    </div>
  );
};
