import { isMobile } from "react-device-detect";
import "./App.css";
import { Icon } from "@iconify/react";
import React from "react";
import DisableZoom from "./utils/disable-zoom";
import {
  Timeline,
  TimelineBody,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineItem,
} from "@material-tailwind/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { format } from "date-fns";

// import gambar
var background_image = require("../src/images/BG.png");
var background_image2 = require("../src/images/BG2.png");
var foto_wahyu = require("../src/images/foto_wahyu.png");
var foto_vera = require("../src/images/foto_vera.png");
var slide1 = require("../src/images/gallery/1.jpg");
var slide2 = require("../src/images/gallery/2.jpg");
var slide3 = require("../src/images/gallery/3.jpg");
var slide4 = require("../src/images/gallery/4.jpg");
var slide5 = require("../src/images/gallery/5.jpg");
var slide6 = require("../src/images/gallery/6.jpg");

// import audio
var audio_akad = new Audio(require("../src/audio/sound.mp3"));

function play() {
  audio_akad.play();
  if (audio_akad.currentTime === 0) {
    // alert("habis")
  }
}
function resume() {
  audio_akad.play();
}
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function pause() {
  audio_akad.pause();
}

var images = [slide1, slide2, slide3, slide4, slide5, slide6];

function App() {
  //set usestate
  const [from, setFrom] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [ucapan, setUcapan] = React.useState([]) as any;
  const [music, setMusic] = React.useState(true);
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(0);
  const [days, setDays] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [minutes, setMinutes] = React.useState(0);
  const [seconds, setSeconds] = React.useState(0);

  const deadline = "27 Apr 2024 10:00:00 GMT+7";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  React.useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    // play();
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="flex flex-1 items-center flex-col"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${background_image})`,
        height: "100vh",
        // overflowY: "hidden",
      }}
    >
      <DisableZoom />

      {/* ketika undangan dibuka */}
      {isMobile === true && open === true && (
        <div
          className="flex flex-col w-full items-center"
          style={{
            backgroundSize: "400px",
            backgroundRepeat: "repeat",
            backgroundImage: `url(${background_image2})`,
          }}
        >
          {/* floating action button for music */}
          <button
            onClick={() => {
              setMusic(!music);
              if (music) {
                pause();
              } else {
                resume();
              }
            }}
            className="p-3 rounded-full border-black border-2 fixed bg-white z-50 bottom-8 right-8"
          >
            <Icon icon={music === true ? "mdi:music" : "mdi:music-off"} />
          </button>

          {/* ayat ayat */}
          <div className="mt-10 flex w-full py-5 px-10 text-center">
            <div className="font-raleway text-black z-50">
              AND ONE OF HIS SIGNS IS THAT HE CREATED FOR YOU SPOUSES FROM AMONG
              YOURSELVES SO THAT YOU MAY FIND COMFORT IN THEM. AND HE HAS PLACED
              BETWEEN YOU COMPASSION AND MERCY. SURELY IN THIS ARE SIGNS FOR
              PEOPLE WHO REFLECT. (Ar- Rum: 21)
            </div>
          </div>

          <div className="flex flex-col items-center mb-5 mt-5">
            <div className="font-italliano text-6xl">Wahyu</div>
            <div className="font-italliano mt-1 text-6xl">&</div>
            <div className="font-italliano mt-1 text-6xl">Vera</div>
            <div className="font-raleway mt-5 text-xl">
              Sabtu, 27 April 2024
            </div>
          </div>

          {/* timer */}
          <div className="flex flex-row py-5 px-10 gap-x-2">
            <div className="flex flex-col items-center min-w-16">
              <div className="font-raleway text-4xl">
                {days < 10 ? "0" + days : days}
              </div>
              <div className="font-raleway text-xs font-bold">
                {days > 1 ? "Days" : "Day"}
              </div>
            </div>
            <div className="font-raleway text-4xl font-bold">:</div>
            <div className="flex flex-col items-center min-w-16">
              <div className="font-raleway text-4xl">
                {hours < 10 ? "0" + hours : hours}
              </div>
              <div className="font-raleway text-xs font-bold">
                {hours > 1 ? "Hours" : "Hour"}
              </div>
            </div>
            <div className="font-raleway text-4xl font-bold">:</div>
            <div className="flex flex-col items-center min-w-16">
              <div className="font-raleway text-4xl">
                {minutes < 10 ? "0" + minutes : minutes}
              </div>
              <div className="font-raleway text-xs font-bold">
                {minutes > 1 ? "Minutes" : "Minute"}
              </div>
            </div>
            <div className="font-raleway text-4xl font-bold">:</div>
            <div className="flex flex-col items-center min-w-16">
              <div className="font-raleway text-4xl">
                {seconds < 10 ? "0" + seconds : seconds}
              </div>
              <div className="font-raleway text-xs font-bold">
                {seconds > 1 ? "Seconds" : "Second"}
              </div>
            </div>
          </div>

          {/* couples */}
          <div className="flex flex-col w-full px-10 mt-20 mb-5 items-center">
            <div className="font-italliano mb-5 text-5xl">The Couples</div>
            <div>
              <img
                src={foto_wahyu}
                className="border-2 border-solid border-amber-600 rounded-3xl"
              />
            </div>
            <div className="flex flex-col mt-5 mb-10 gap-x-5">
              <div className="font-italliano text-4xl text-center">
                Wahyu Aji Pangestu, S.Kom.
              </div>
              <div className="text-center font-raleway">
                Putra Pertama dari Bpk. Atang Harijanto dan Ibu Susi Soeswanti
              </div>
            </div>
            <div>
              <img
                src={foto_vera}
                className="border-2 border-solid border-amber-600 rounded-3xl"
              />
            </div>
            <div className="flex flex-col mt-5 mb-10 gap-x-5">
              <div className="font-italliano text-4xl text-center">
                Vera Wati, S.Pd.
              </div>
              <div className="text-center font-raleway">
                Putri Kedua dari Bpk. Agus Suwito dan Ibu Wiwik Nurkhayati
              </div>
            </div>
          </div>

          {/* Waktu dan lokasi */}
          <div className="flex flex-col w-full px-10 mt-10 mb-5">
            <div className="font-italliano text-center mb-5 text-5xl">
              Time and Place
            </div>
            <div className="flex-col flex text-center items-center">
              <div className="font-raleway text-2xl items-center">
                Graha Pariwisata
              </div>
              <div className="font-raleway text-sm items-center mt-5">
                Jl. WISATA MENANGGAL No.38, Dukuh MENANGGAL, KEC. GAYUNGAN,
                SURABAYA, JAWA TIMUR
              </div>
              <button
                onClick={() =>
                  window.open("https://maps.app.goo.gl/r6Rds19pt14yxYG39")
                }
                className="flex flex-row mt-5 items-center font-raleway border-b-2 w-fit"
              >
                <Icon icon={"mdi:location"} />
                See Location
              </button>
            </div>
            <div className="flex flex-col mt-10 justify-end">
              <Timeline>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <Icon icon="mdi:calendar" />
                    </TimelineIcon>
                    <div className="font-raleway text-xl">Akad Nikah</div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="text-[16px] font-raleway">
                      Jumat, 19 April 2024 <br />
                      08:00 - 11:00
                    </div>
                  </TimelineBody>
                </TimelineItem>
                <TimelineItem>
                  <TimelineConnector />
                  <TimelineHeader>
                    <TimelineIcon className="p-2">
                      <Icon icon="mdi:home" />
                    </TimelineIcon>
                    <div className="font-raleway text-xl">Resepsi</div>
                  </TimelineHeader>
                  <TimelineBody className="pb-8">
                    <div className="text-[16px] font-raleway">
                      Sabtu, 27 April 2024
                      <br /> 10:00 - 12:00
                    </div>
                  </TimelineBody>
                </TimelineItem>
              </Timeline>
            </div>
          </div>
          <div className="mt-10 mx-10 w-full flex flex-col mb-10">
            <div className="w-full flex-1 py-5 text-5xl text-center">
              <div className="font-italliano text-black z-50 opacity-100">
                Gallery
              </div>
            </div>
            <div className="flex flex-row mt-10 mb-5 rounded-2xl mx-10 bg-slate-300 p-2">
              <Carousel
                onClickThumb={(idx: any) => setSelectedItem(Number(idx))}
                autoPlay
                infiniteLoop
                showArrows={false}
                showThumbs={false}
                showIndicators={false}
                selectedItem={selectedItem}
                dynamicHeight={true}
                showStatus={false}
                onChange={(idx: any) => {
                  setSelectedItem(Number(idx));
                }}
                className="flex flex-row"
              >
                {images.map((file, idx) => {
                  return (
                    <img
                      key={idx}
                      src={file}
                      className="rounded-2xl"
                      alt={`slide${idx}`}
                    />
                  );
                })}
              </Carousel>
            </div>
            <div className="grid-cols-2 grid gap-5 mx-10">
              {images.map((file, idx) => {
                return (
                  <img
                    key={idx}
                    src={file}
                    className="rounded-2xl max-w-30"
                    alt={`slide${idx}`}
                  />
                );
              })}
            </div>
          </div>

          {/* pesan ucapan */}
          <div className="flex w-full px-10 my-5 flex-col">
            <div className="flex my-5 font-italliano text-5xl">
              Write a Wish
            </div>
            <div className="bg-amber-200 rounded-2xl px-5 py-4 flex flex-col">
              <div className="flex flex-row border-b-2 pb-2 items-center border-amber-600 gap-x-2 font-quicksnad text-sm font-bold">
                <Icon icon="iconamoon:comment" />
                {ucapan.length} wishes for Wahyu & Vera
              </div>
              <div className="flex flex-col mt-4 gap-y-4 border-b-2 border-amber-600 pb-3">
                <input
                  className="font-quicksnad py-1 px-3 rounded-lg"
                  placeholder="Name"
                  value={from}
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                />
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="py-1 px-3 rounded-lg font-quicksnad"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <button
                  className="bg-amber-500 rounded-2xl w-fit px-4 py-2 font-quicksnad font-bold"
                  onClick={() => {
                    let a = ucapan;
                    a.push({
                      date: new Date(),
                      name: from,
                      message: message,
                    });
                    setUcapan(a);
                    setFrom("");
                    setMessage("");
                  }}
                >
                  Send
                </button>
              </div>
              <div className="flex flex-col w-full flex-1 mt-5 gap-y-4">
                {ucapan.length > 0 &&
                  ucapan.map((item: any, idx: number) => {
                    return (
                      <div
                        className={`flex flex-row items-start gap-x-5 pb-4 ${
                          idx !== ucapan.length - 1
                            ? "border-b-2 border-amber-600"
                            : "border-b-0"
                        }`}
                      >
                        <div className="py-2">
                          <Icon icon="iconamoon:comment" />
                        </div>
                        <div className="flex flex-col">
                          <div className="font-bold font-quicksnad">
                            {item.name}
                          </div>
                          <div className="gap-x-1 flex flex-row items-center text-xs font-quicksnad">
                            {format(item.date, "dd MMM yyyy HH:mm")}
                            <Icon icon="mdi:history" />
                          </div>
                          <div>{item.message}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ketika undangan belum dibuka */}
      {isMobile === true && open === false ? (
        <div className="flex flex-col mt-10 h-full rounded-2xl">
          <div className="flex flex-col items-center">
            <div className="font-quicksnad text-3xl pb-4">
              Wedding Invitation
            </div>
            <div className="font-italliano font-bold text-[44px]">
              Wahyu & Vera
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-10 flex-col">
            <div className="text px-10 text-center mt-[370px] font-quicksnad text-2xl">
              {window.location.search
                .replace("?", "")
                .replace(new RegExp("\\+", "g"), " ")}
            </div>
            <button
              onClick={() => {
                setOpen(true);
                play();
              }}
              className="bg-gray-400 p-3 rounded-xl"
            >
              <div className="font-quicksnad font-bold">Open Invitation</div>
            </button>
          </div>
        </div>
      ) : (
        // ketika buka dari pc
        <div></div>
      )}
    </div>
  );
}

export default App;
