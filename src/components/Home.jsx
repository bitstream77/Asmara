import { useRef, useState } from "react";
import TypeWriter from "typewriter-effect";
import Button from "./Button";

function Home() {
  const buttonBox = useRef(null);
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="w-96 h-96 bg-neutral-900 z-10 bg-opacity-75 rounded-md p-4 ">
        <span className="flex flex-col p-4">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(
                  '<span class="text-fuchsia-500">Hello World!,</span>'
                )
                .pauseFor(2500)
                .typeString(
                  '<br><span class="text-xs">welcome to my humble website.</span>'
                )
                .callFunction(() => {
                  setActive(true);
                })
                .start();
            }}
          />
        </span>

        <div className="flex flex-row justify-around hidden" ref={buttonBox}>
          <Button content={"TEST1"} />
          <Button content={"TEST2"} />
        </div>
      </div>
    </>
  );
}

export default Home;
