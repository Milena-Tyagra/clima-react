import { LineVertical } from "@phosphor-icons/react";
import { displayMessage } from "../../../../helpers/messages";

export const WeatherTimeData = ({ data }) => {
  return (
    <div className="flex">
      {data.map((time, i) => (
        <div className="flex items-center justyfy_between ">
          <div
            key={time.label}
            className="flex flex-col gap-1 justify-center items-center"
          >
            <span className="font-extralight text-xs">{time.label ?? displayMessage("EMPTY")}</span>
            <span className="font-light text-sm">{time.data ?? displayMessage("EMPTY")}</span>
          </div>
          {i != data.length - 1 && <LineVertical size={25}  weight="thin" />}
        </div>
      ))}
    </div>
  );
};
