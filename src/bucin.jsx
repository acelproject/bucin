import { useState } from "react";
import img2 from "../public/bear1.gif";
import img1 from "../public/bearsleep.gif";
import sound from "../public/bsound.mp3";

export default function Bucin() {
  const [state, setState] = useState(16);
  const [yes, setYes] = useState(false);
  return (
    <div className="h-[100vh] bg-amber-100 justify-center flex items-center">
      <div className="hidden">
        <audio src={sound} autoPlay loop controls></audio>
      </div>
      <div className="flex gap-5 justify-center flex-col items-center">
        <div>
          {yes ? (
            <img src={img1} alt="" className="w-28" />
          ) : (
            <img src={img2} alt="" className="w-28" />
          )}
        </div>
        <div className="font-bold text-amber-600">
          {yes ? "yeeyyy.. sini cium! " : "Kamu sayang gak ama aku? "}
        </div>
        <div className={`${yes ? "hidden" : ""}`}>
          <button
            className={`bg-green-500 px-5 rounded-md shadow-md py-1 me-3 font-semibold text-white`}
            style={{ fontSize: `${state}px` }}
            onClick={() => setYes(true)}
          >
            Iya Sayang!
          </button>
          <button
            className="bg-red-500 px-5 rounded-md shadow-md py-1 font-semibold text-white"
            onClick={() => setState(state + 20)}
          >
            Nggak
          </button>
        </div>
      </div>
    </div>
  );
}
