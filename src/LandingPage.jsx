import { Link } from "react-router-dom";
import bg1 from "../public/bg1.jpg";

export default function LandingPage() {
  return (
    <div className="w-full h-[100vh] hero mx-auto flex justify-center items-center bg-black relative overflow-hidden">
      <div className="absolute md:w-1/2 w-[600px]">
        <img src={bg1} alt="" className="" />
      </div>
      <div>
        <div className="relative z-40 -top-20 bg-amber-700 rounded-md text-white px-5 py-2 text-2xl">
          <Link to={`/bucin`}>MASUK</Link>
        </div>
      </div>
    </div>
  );
}
