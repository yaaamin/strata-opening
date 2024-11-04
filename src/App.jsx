import { useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function App() {
  const [isExploding, setIsExploding] = useState(false);

  const confettiProps = {
    force: 0.6,
    duration: 4500,
    particleCount: 850,
    width: 2500,
    colors: ["#041E43", "#1471BF", "#5BB4DC", "#FC027B", "#66D805"],
  };

  const { height, width } = useWindowSize();

  return (
    <>
      <Confetti
        width={width - 50}
        height={height - 10}
        numberOfPieces={850}
        run={isExploding}
      />
      <div
        className="bg-primary min-h-screen min-w-screen w-full h-full flex flex-col justify-center items-center p-0 overflow-hidden"
        // style={{ backgroundImage: `url(/hero.jpg)` }}
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <img
            src="https://hiyaavehi.housing.gov.mv/img/Emblem_of_Maldives.png"
            className="h-52 w-auto animate-[--animation-pulse] "
          />
          {/* <p className="text-4xl font-dhivehi  text-[#DB7239] ">
            ހިޔާވެހި <span className="text-[#bcbcbc] ">ޕޯޓަލް</span>
          </p> */}
          <img src="/text.svg" className="h-20 w-auto" />
        </div>
        <button
          onClick={() => {
            setIsExploding(true);
            setTimeout(() => {
              window.location.replace("https://hiyaavehi.housing.gov.mv/");
            }, 5000);
          }}
          className=" animate-[--animation-blink] duration-1000 inline-flex items-center justify-center whitespace-nowrap  bg-[#012e4d] text-xl font-semibold hover:bg-[#012e4d]/50 h-20 px-12 text-white my-12 rounded-full"
        >
          {isExploding ? (
            <div className="flex flex-row items-center gap-x-2  ">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <p>Taking you to Hiyaavehi Portal...</p>
            </div>
          ) : (
            "Launch Hiyaavehi Portal"
          )}
        </button>
        {/* {isExploding && (
          <>
            <ConfettiExplosion {...confettiProps} />
          </>
        )} */}
      </div>
    </>
  );
}

export default App;
