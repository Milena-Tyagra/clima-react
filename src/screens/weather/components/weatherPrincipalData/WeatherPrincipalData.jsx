import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { ETimeConditions } from "../../../../enums/ETimeConditions";
import { displayMessage } from "../../../../helpers/messages";

export const WeatherPrincipalData = ({ data }) => {
  return (
    <div>
      <div className="flex gap-1 items-center justify-center">
        <span className="text-8xl">{data.temp ?? displayMessage("EMPTY")}</span>
        <div className="flex flex-col justify-between">
          <span className="text-lg">°C</span>
          <div className="flex flex-col text-sm font-thin">
            <div className="flex">
              <ArrowUp size={16} />
              <span>{data.max_temp ?? displayMessage("EMPTY")}</span>
            </div>
            <div className="flex">
              <ArrowDown size={16} />
              <span>{data.min_temp ?? displayMessage("EMPTY")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {ETimeConditions[data?.icon]?.icon || null}
      </div>
    </div>
  );
};
