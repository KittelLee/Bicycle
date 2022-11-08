import React from "react";
import Layout from "./components/Layout";
import Marquee from "react-fast-marquee";
import img1 from "../public/images/one.jpg";
import img2 from "../public/images/two.jpg";
import img3 from "../public/images/three.jpg";
import img4 from "../public/images/four.jpg";
import img5 from "../public/images/five.png";
import img6 from "../public/images/six.png";
import img7 from "../public/images/seven.jpg";

export default function Home() {
  return (
    <Layout title="Home">
      <Marquee>
        <div className="flex w-full h96">
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={img2} />
          </div>
          <div>
            <img src={img3} />
          </div>
          <div>
            <img src={img4} />
          </div>
          <div>
            <img src={img5} />
          </div>
          <div>
            <img src={img6} />
          </div>
          <div>
            <img src={img7} />
          </div>
        </div>
      </Marquee>
    </Layout>
  );
}
