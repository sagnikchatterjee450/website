export default function App() {
  const logo = "/icons/logo.svg";
  const socials = {
    twitterIcon: "/icons/socials/twitter.svg",
    linkedinIcon: "/icons/socials/linkedin.svg",
    instagramIcon: "/icons/socials/instagram.svg",
  };

  return (
    <div id="main" className="h-screen w-full bg-black font-grot text-white">
      <div className="flex justify-center items-center flex-col h-full w-full">
        <img src={logo} alt="Tezucka logo" />
        <h1 className="font-black sm:text-8xl text-5xl pointer-events-none">
          Coming Soon
        </h1>

        <a href="#video" className="font-bold underline text-xl m-5">
          Our promo video
        </a>
      </div>

      <div
        id="video"
        className="bg-black flex justify-center items-center w-full h-screen"
      >
        <video src="/videos/tezucka-health.mp4" width="500" controls></video>
      </div>

      <div className="fixed bottom-0 left-0 h-1/6 flex justify-center items-center flex-col w-full bg-black">
        <span className="font-semibold text-xl">Follow us</span>
        <div className="flex">
          <a
            href="https://twitter.com/tezucka"
            className="sm:mx-20 mx-10 my-5"
            target="_blank"
          >
            <img src={socials.twitterIcon} alt="Twitter logo" />
          </a>
          <a
            href="https://www.linkedin.com/company/tezucka-tech/"
            className="sm:mx-20 mx-10 my-5"
            target="_blank"
          >
            <img src={socials.linkedinIcon} alt="Linkedin logo" />
          </a>
          <a
            href="https://www.instagram.com/tezucka/"
            className="sm:mx-20 mx-10 my-5"
            target="_blank"
          >
            <img src={socials.instagramIcon} alt="Instagram logo" />
          </a>
        </div>
      </div>
    </div>
  );
}
