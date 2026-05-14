import moment from "moment";
import { FaArrowRightLong, FaMessage, FaRegClock } from "react-icons/fa6";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Hero() {
  return (
    <section className="mx-auto max-w-360 p-5">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 1,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 1,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        <div className="relative">
          <img
            src="/assets/images/hero-1.webp"
            alt="carousel-1"
            className="block h-full w-full m-auto"
          />
          <div className="absolute z-10 top-0 bottom-0 flex items-end">
            <div className="max-w-152 p-10 ">
              <h1 className="text-4xl font-bold leading-13">
                Why Voice Control Devices Are Changing The Way we Live And Work
              </h1>
              <p className="my-5">
                Reflecting on a quiet reminder I didn't expect but truly
                needed-one of those moments that sticks and shifts your day.
              </p>
              <div className="flex items-center">
                <button className="btn ">
                  <FaMessage />5
                </button>
                <button className="btn">
                  Peter Parker
                  <FaArrowRightLong />
                </button>
                <p>{moment().format("MMMM Do, YYYY")}</p>
                <p>
                  <FaRegClock />6 min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  );
}
