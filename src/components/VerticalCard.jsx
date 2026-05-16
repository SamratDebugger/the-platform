import {
  FaFacebookF,
  FaSquareInstagram,
  FaTwitter,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

export default function VerticalCard() {
  return (
    <div>
      <div>
        <div className="card bg-base-100 ">
          <figure className="justify-start p-5">
            <img
              className="rounded-box"
              src="/assets/images/dan.webp"
              alt="developer"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">
              I'm Dan, a frontend developer exploring tech, business, and
              wellness
            </h2>
            <div className="flex gap-5">
              <FaYoutube className="size-6" />
              <FaXTwitter className="size-6" />
              <FaSquareInstagram className="size-6" />
              <FaFacebookF className="size-6" />
            </div>
            <h3 className="mt-5">Work Experience</h3>
            <div className="divider"></div>
            <div className="flex justify-between">
              <div>
                <h3 className="font-bold text-lg">Nexora Studio</h3>
                <h3>Frontend Developer</h3>
              </div>
              <h4>2021–Present</h4>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between ">
              <div>
                <h3 className="font-bold text-lg">Loopbyte Agency</h3>
                <h3>Web developer</h3>
              </div>
              <h4>2019-2021</h4>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between ">
              <div>
                <h3 className="font-bold text-lg">Loopbyte Agency</h3>
                <h3>Web developer</h3>
              </div>
              <h4>2019-2021</h4>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between ">
              <div>
                <h3 className="font-bold text-lg">Loopbyte Agency</h3>
                <h3>Web developer</h3>
              </div>
              <h4>2019-2021</h4>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
