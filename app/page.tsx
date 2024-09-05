"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import ScrollMagic from "scrollmagic";

export default function Home() {
  useEffect(() => {
    // Smooth Scroll
    const lenis = new Lenis();
    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Scroll Down - Button
    const scrollBtn = document.getElementById("scrollBtn");
    window.addEventListener("scroll", function () {
      const box = document.querySelector(".scrollBtn");
      if (window.scrollY > 0) {
        box.classList.add("move");
      } else {
        box.classList.remove("move");
      }
    });

    // Preloader Text
    window.addEventListener("load", function () {
      const preloader = document.getElementById("preloader");
      const firstText = document.getElementById("first-text");
      const secondText = document.getElementById("second-text");

      firstText.style.opacity = "1";
      setTimeout(() => {
        firstText.style.opacity = "0";
        secondText.style.opacity = "1";
      }, 1000);
      setTimeout(() => {
        preloader.style.display = "none";
      }, 4000);
    });

    // Loader Video
    window.addEventListener("load", function () {
      document.body.classList.add("overflow-hidden");
      document.documentElement.classList.add("overflow-hidden");

      setTimeout(function () {
        const loaderVideo = document.getElementById("loaderVideo");
        loaderVideo.style.width = "90%";
        loaderVideo.style.height = "90%";
        loaderVideo.style.transform = "translate(-50%, -50%)";
        loaderVideo.style.top = "50%";
        loaderVideo.style.left = "50%";
        loaderVideo.style.position = "fixed";
        loaderVideo.style.borderRadius = "12px";
      }, 2000);

      setTimeout(() => {
        const loaderVideo = document.getElementById("loaderVideo");

        if (window.matchMedia("(max-width: 576px)").matches) {
          loaderVideo.style.width = "220px";
          loaderVideo.style.height = "220px";
          loaderVideo.style.top = "25%";
          loaderVideo.style.left = "24px";
          loaderVideo.style.right = "auto";
          loaderVideo.style.transform = "translate(0%, -25%)";
        } else if (window.matchMedia("(max-width: 767px)").matches) {
          loaderVideo.style.width = "220px";
          loaderVideo.style.height = "220px";
          loaderVideo.style.left = "auto";
          loaderVideo.style.right = "40px";
          loaderVideo.style.transform = "translate(0%, -50%)";
        } else if (window.matchMedia("(max-width: 991px)").matches) {
          loaderVideo.style.width = "310px";
          loaderVideo.style.height = "310px";
          loaderVideo.style.left = "auto";
          loaderVideo.style.right = "40px";
          loaderVideo.style.transform = "translate(0%, -50%)";
        } else if (window.matchMedia("(max-width: 1199px)").matches) {
          loaderVideo.style.width = "400px";
          loaderVideo.style.height = "400px";
          loaderVideo.style.left = "auto";
          loaderVideo.style.right = "60px";
          loaderVideo.style.transform = "translate(0%, -50%)";
        } else if (window.matchMedia("(max-width: 1399px)").matches) {
          loaderVideo.style.width = "450px";
          loaderVideo.style.height = "450px";
          loaderVideo.style.left = "auto";
          loaderVideo.style.right = "80px";
          loaderVideo.style.transform = "translate(0%, -50%)";
        } else {
          loaderVideo.style.width = "500px";
          loaderVideo.style.height = "500px";
          loaderVideo.style.top = "50%";
          loaderVideo.style.left = "auto";
          loaderVideo.style.right = "100px";
          loaderVideo.style.transform = "translate(0%, -50%)";
          loaderVideo.style.position = "absolute";
        }

        document.body.classList.remove("overflow-hidden");
        document.documentElement.classList.remove("overflow-hidden");
      }, 3000);
    });
  }, []);
  useEffect(() => {
    // DOM이 모두 로드된 후 ScrollMagic을 초기화
    const controller = new ScrollMagic.Controller({ loglevel: 3 });

    const section2 = document.querySelector("#section2");
    const section3 = document.querySelector("#section3");
    const section4 = document.querySelector("#section4");

    if (section2 && section3 && section4) {
      new ScrollMagic.Scene({
        triggerElement: section2,
        triggerHook: "onEnter",
        duration: "100%",
      })
        .setPin("#section1 .pinWrapper", {
          pushFollowers: false,
        })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: section2,
        triggerHook: "onEnter",
        duration: "200%",
      })
        .setPin("#section2 .pinWrapper", {
          pushFollowers: false,
        })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: section3,
        triggerHook: "onEnter",
        duration: "200%",
      })
        .setPin("#section3 .pinWrapper", {
          pushFollowers: false,
        })
        .addTo(controller);

      new ScrollMagic.Scene({
        triggerElement: section4,
        triggerHook: "onEnter",
        duration: "100%",
      })
        .setPin("#section4 .pinWrapper", {
          pushFollowers: false,
        })
        .addTo(controller);
    }

    // Cleanup
    return () => {
      controller.destroy(true);
    };
  }, []);
  return (
    <>
      <section className="events-page">
        <div id="section1" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>test1</h2>
              <p>의자랑 계단있고 테이블 위에 화분도 있음 예쁘긴함</p>
            </div>
            <div className="image" id="loaderVideo">
              <video autoPlay loop muted playsInline>
                <source
                  src="https://www.yudiz.com/codepen/studio-r/bg-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            {/* <!-- Video --> */}
          </div>
          <div className="scrollBtn">
            <h6>scroll</h6>
            <span></span>
          </div>
        </div>
        {/* <!-- Section 01 --> */}
        <div id="section2" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>test2</h2>
              <p>
                의자 두개 있고 냄비 화분 인덕션 환기시키는 기계 이름 까먹음
                아무튼 저런거 있음
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        {/* <!-- Section 02 --> */}
        <div id="section3" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>test3</h2>
              <p>
                침대있고 액자있고 화분은 계속있고 낮잠때리기 좋아보이는 침실인듯
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        {/* <!-- Section 03 --> */}
        <div id="section4" className="event">
          <div className="pinWrapper">
            <div className="text">
              <h2>test4</h2>
              <p>
                서재인듯 회의실인듯한 아리까리한 느낌 여기도 화분 보여주기식
                인듯? 암튼 잘꾸밈
              </p>
            </div>
            <div className="image"></div>
          </div>
        </div>
        {/* <!-- Section 04 --> */}
      </section>

      {/* <!-- Loader --> */}
      <div id="preloader">
        <div className="text-wrapper">
          <h1 id="first-text">Studio R</h1>
          <h3 id="second-text">Creative Agency</h3>
        </div>
      </div>
    </>
  );
}
