import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TypeWriter from "typewriter-effect";
import Button from "./Button";

function Home() {
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="w-96 bg-neutral-900 z-10 bg-opacity-75 rounded-md p-4 absolute">
        <span className="flex flex-col p-4">
          <TypeWriter
            onInit={(typewriter) => {
              typewriter
                .changeDelay(50)
                .typeString(
                  '<span class="text-fuchsia-500">Hello World!</span>'
                )
                .pauseFor(1500)
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
        <div className="relative">
          {active ? <Button content={"Projects"} /> : null}
          {active ? <Button content={"About"} /> : null}
        </div>
      </div>

      <BrowserRouter>
        <Routes>
          <Route Component={null} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Home;
