import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto max-w-3xl md:px-4 lg:px-10 pt-8 pb-6 px-4 min-h-screen">
      <h1 className="text-center text-3xl select-none tracking-tight font-semibold text-stone-400 pb-8">Render Math</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <Link to="/remaining" className="w-full">
            <div className="group bg-emerald-950 border-2 border-emerald-800 h-36 rounded-lg hover:bg-emerald-900 active:bg-emerald-950 transition active:border-emerald-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fdeded"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-auto mt-4 stroke-emerald-500"
              >
                <path d="M10 2h4" />
                <path d="M12 14v-4" />
                <path d="M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6" />
                <path d="M9 17H4v5" />
              </svg>
              <div className="w-full text-center pt-1 font-semibold text-xl text-emerald-300 group-hover:text-emerald-200">Time Remaining</div>
              <div className="w-full text-center pt-0 font-regular text-sm text-emerald-500">How much longer will my animation take</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/duration" className="w-full">
            <div className="group bg-teal-950 border-2 border-teal-800 h-36 rounded-lg hover:bg-teal-900 active:bg-teal-950 transition active:border-teal-900">
              <svg xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fdeded"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-auto mt-4 stroke-teal-500"><line x1="10" x2="14" y1="2" y2="2" /><line x1="12" x2="15" y1="14" y2="11" /><circle cx="12" cy="14" r="8" /></svg>
              <div className="w-full text-center pt-1 font-semibold text-xl text-teal-300 group-hover:text-teal-200">Animation Duration</div>
              <div className="w-full text-center pt-0 font-regular text-sm text-teal-500">How long will my animation be</div>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/bpm" className="w-full">
            <div className="group bg-cyan-950 border-2 border-cyan-800 h-36 rounded-lg hover:bg-cyan-900 active:bg-cyan-950 transition active:border-cyan-900">
              <svg width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#fdeded"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="mx-auto mt-4 stroke-cyan-500"><path d="M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2" /></svg>
              <div className="w-full text-center pt-1 font-semibold text-xl text-cyan-300 group-hover:text-cyan-200">BPM to FPS</div>
              <div className="w-full text-center pt-0 font-regular text-sm text-cyan-500">Converts BPM to FPS</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
