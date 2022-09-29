import React from "react";
import logo from "./assets/logo.svg";
import { instagramIcon, twitterIcon, linkedinIcon } from "./assets/socials";

export default function App() {
  return (
    <div id="main" className="h-screen w-full bg-black font-grot text-white">
      <div className="flex justify-center items-center flex-col h-full w-full">
        <img src={logo} alt="Tezucka logo" />
        <h1 className="font-black sm:text-8xl text-5xl pointer-events-none">
          Coming Soon
        </h1>
      </div>

      <div className="fixed bottom-0 left-0 h-1/6 flex justify-center items-center flex-col w-full">
        <span className="font-semibold text-xl">Follow us</span>
        <div className="flex">
          <a
            href="https://twitter.com/tezucka"
            className="sm:mx-20 mx-10 my-5"
            target="_blank"
          >
            <img src={twitterIcon} alt="Twitter logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/tezucka-tech/"
            className="sm:mx-20 mx-10 my-5"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin logo" />
          </a>
          <a
            href="https://www.instagram.com/tezucka/"
            className="sm:mx-20 mx-10 my-5"
            target="_blank"
          >
            <img src={instagramIcon} alt="Instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
