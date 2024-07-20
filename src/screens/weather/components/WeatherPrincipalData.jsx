import { ArrowDown, ArrowUp } from "@phosphor-icons/react";
import { ETimeConditions } from "../../../enums/ETimeConditions";

export const WeatherPrincipalData = ({ data }) => {
  return (
    <div>
      <div className="flex gap-1 items-center justify-center">
        <span className="text-8xl">{data.temp}</span>
        <div className="flex flex-col justify-between">
          <span className="text-lg">°C</span>
          <div className="flex flex-col text-sm font-thin">
            <span className="flex">
              <ArrowUp size={16} />
              {data.max_temp}
            </span>
            <span className="flex">
              <ArrowDown size={16} /> {data.min_temp}
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        {ETimeConditions[data?.icon]?.icon || null}
      </div>
    </div>
  );
};
