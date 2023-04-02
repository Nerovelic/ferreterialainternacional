'use client'
import React, { useRef, useEffect } from "react";
import backgroundImage from "./images/ferre.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const HomePage = ({ footerPosition = "bottom" }) => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const carouselInner = carousel.querySelector(".carousel-inner");

    const resizeImages = () => {
      const items = carousel.querySelectorAll(".carousel-item");
      const itemHeight = carouselInner.clientHeight;

      items.forEach((item) => {
        const img = item.querySelector(".carousel-img");
        const wrapper = item.querySelector(".carousel-img-wrapper");

        wrapper.style.height = `${itemHeight}px`;

        const imgRatio = img.naturalWidth / img.naturalHeight;
        const wrapperRatio = item.clientWidth / item.clientHeight;

        if (imgRatio > wrapperRatio) {
          img.style.width = "100%";
          img.style.height = "auto";
        } else {
          img.style.width = "auto";
          img.style.height = "100%";
          img.style.width = "auto";
        }
        
        img.style.position = "absolute";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
      });
    };

    resizeImages();
    window.addEventListener("resize", resizeImages);

    return () => {
      window.removeEventListener("resize", resizeImages);
    };
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        background: "linear-gradient(to top, #a2d2ff, #D8DAD3)",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "99vw",
          height: "25vh",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "25vh",
          left: 0,
          right: 0,
          bottom: footerPosition === "bottom" ? "4rem" : 0,
          maxHeight: "calc(100vh - 25vh - 4rem)",
          overflowY: "auto",
          width: "50%",
          margin: "0 auto",
        }}
        ref={carouselRef}
      >
        <Carousel>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
              <img
                className="d-block carousel-img"
                src="https://www.pcdigital.com.mx/image/catalog/pcdigital/2017/KSP-300.png"
                alt="bocina"
                style={{
                  border: "10px ",
                  padding: "1rem",
                  height: "100%",
                  width: "auto",
                }}
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
            <img
              className="d-block w-10 carousel-img"
              src="https://www.ihnsa.mx/media/catalog/product/cache/1eff44fae7f0f87612ba0fbcd3096c2f/h/g/hg3r_2.png"
              alt="calentador"
              style={{
                border: "10px ",
                padding: "1rem",
                height: "100%",
                width: "auto",
              }}
            />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="carousel-img-wrapper">
            <img
              className="d-block w-10 carousel-img"
              src="https://rotoplas.com.mx/wp-content/uploads/2020/01/cisterna02-1.png"
              alt="rotoplas"
              style={{
                border: "10px ",
                padding: "1rem",
                height: "100%",
                width: "auto",
              }}
            />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <footer
        style={{
          backgroundColor: "#333333",
          color: "#ffffff",
          padding: "2rem",
          textAlign: "center",
          position: "absolute",
          bottom: -100,
          left: 0,
          right: 0,
        }}
      >
        <p>FERRETERIA Y MADERERIA LA INTERNACIONAL. ENSENADA B.C. Tel.(646)176-26-50 CR. 2018 -2019</p>
      </footer>
    </div>
  );
};

export default HomePage;