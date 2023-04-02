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
      const images = carousel.querySelectorAll(".carousel-item img");

      images.forEach((img) => {
        const width = carouselInner.clientWidth;
        const height = carouselInner.clientHeight;
        const imgRatio = img.naturalWidth / img.naturalHeight;
        const containerRatio = width / height;

        if (imgRatio > containerRatio) {
          img.style.width = "100%";
          img.style.height = "auto";
        } else {
          img.style.width = "auto";
          img.style.height = "100%";
        }
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
          left: 500,
          right: 500,
          bottom: footerPosition === "bottom" ? "4rem" : 0,
          margin: "auto",
        }}
        ref={carouselRef}
      >
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src="https://www.pcdigital.com.mx/image/catalog/pcdigital/2017/KSP-300.png"
              alt="bocina"
              style={{
                border: "10px ",
                padding: "1rem",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src="https://www.ihnsa.mx/media/catalog/product/cache/1eff44fae7f0f87612ba0fbcd3096c2f/h/g/hg3r_2.png"
              alt="calentador"
              style={{
                border: "10px ",
                padding: "1rem",
              }}
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-20"
              src="https://rotoplas.com.mx/wp-content/uploads/2020/01/cisterna02-1.png"
              alt="rotoplas"
              style={{
                border: "10px ",
                padding: "1rem",
              }}
            />
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