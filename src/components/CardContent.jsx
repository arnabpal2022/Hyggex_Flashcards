import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { HiMiniSpeakerWave } from "react-icons/hi2";

function CardContent(props) {
  return (
    <div className="mt-8 w-full mx-8 flex flex-col gap-20">
      <div className="flex justify-between items-center mb-4">
        <div>
          <FaRegLightbulb />
        </div>
        <div>
          <HiMiniSpeakerWave />
        </div>
      </div>
      <div className="text-white text-center text-3xl font-semibold">
        {props.content}
      </div>
    </div>
  );
}

export default CardContent;
