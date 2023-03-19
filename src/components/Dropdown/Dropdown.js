import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Dropdown.css";
// IMAGES
import image1 from "./1.svg";
import image2 from "./2.svg";
import image3 from "./3.svg";
import logo from "./logo.png";
// Following is slides array that contains data about different slides to show.
const slides = [
  {
    name: "Development",
    image: image1,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vuejs",
      "Svelte",
      "Preact",
      "Qwik",
      "Solidjs",
    ],
  },
  {
    name: "Design",
    image: image2,
    items: [
      "Figma",
      "Adobe XD",
      "Illustrator",
      "Fireworks",
      "InVision",
      "Draw.io",
      "Canva",
      "Visio",
      "Jitter",
    ],
  },
  {
    name: "Deployment",
    image: image3,
    items: [
      "Netlify",
      "Vercel",
      "Heroku",
      "AWS",
      "GCP",
      "Azure",
      "Railway",
      "Jenkins",
      "CircleCI",
    ],
  },
];

const Dropdown = () => {
  return (
    <div className="w-full h-max">
      <nav className="shadow-sm">
        <img src={logo} alt="logo" className="logo" />
        <div className="navlinks font-bold ">
          <a href="https://www.github.com/zainmustafai">Portfolio</a>
          <div className="skills">
            <button>Skills</button>
            <Swiper
                className="dropdown relative"
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{
                  clickable: true,
                }}
              >
                {slides.map((slide) => (
                  <SwiperSlide key={slide.name}>
                    <div className="grid grid-cols-12 w-full h-full place-content-start ">
                      <div className="imagecol col-span-3 grid place-items-center pt-4 ">
                        <div className=" h-[110px] w-[110px] rounded-full overflow-hidden grid place-items-center bg-[#f7baf7ee] ">
                          <img
                            src={slide.image}
                            alt={slide.name}
                            className={"slideimage"}
                          />
                        </div>
                      </div>
                      {/**Following div has list of SKills */}
                      <div className="listcol col-span-7 text-left space-y-4  ">
                        <h2 className="font-bold text-lg text-green-500 ">{slide.name}</h2>
                        <div className="w-full grid grid-cols-3 gap-3 place-content-start h-full ">
                          {slide.items.map((item) => (
                            <span className="item col-span-1 font-normal text-sm ">{item}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
          </div>
          <a href="https://www.github.com/zainmustafai" >Contact </a>
          <a href="https://www.github.com/zainmustafai">About </a>
        </div>
      </nav>
    </div>
  );
};

export default Dropdown;

/**
 * CoDE FOR SWIPER
 * 
 * <Swiper
        className="dropdown relative"
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.name}>
            <div className="grid grid-cols-10 w-full h-full place-content-start  ">
              <div className="imagecol col-span-3 grid place-items-center  ">
                <div className=" h-[100px] w-[100px] rounded-full overflow-hidden grid place-items-center bg-[#fefe] ">
                  <img src={slide.image} alt={slide.name} className={"slideimage"} />
                </div>
              </div>

              <div className="listcol col-span-7 text-left  ">
                <h2 className="font-bold">{slide.name}</h2>
                <div className="w-full grid grid-cols-3 place-content-start h-full ">
                  {slide.items.map((item) => (
                    <span className="item col-span-1">{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
 */
