import { useNavigate } from 'react-router-dom'
import { GlobeHemisphereWest } from "@phosphor-icons/react";

import { ECities } from "../../enums/ECities";
import { displayMessage } from "../../helpers/messages";
import { Title } from '../../components/title/Title';

export const Initial = () => {
    const cities = Object.values(ECities)
    const navigate = useNavigate()
  return (
    <div className="original text-white w-full h-full flex flex-col items-center justify-center p-5 gap-7">
      <Title title={displayMessage("WEATHER")} subtitle={displayMessage("CHOSE_CITY")}/>
      <GlobeHemisphereWest size={96} weight="thin" />
      <div className="grid grid-cols-3 gap-x-5 gap-y-7	">
        {cities.map(city => (<span key={city.code} className="font-extralight cursor-pointer" onClick={() => navigate(`/${city.code}`)}>{city.label}</span>))}
      </div>
    </div>
  );
};
