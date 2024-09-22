import React, { useEffect, useState } from "react";
import { ssrExportAllKey } from "vite/runtime";
import BackVideo from "./BackVideo.mp4"
import "./AgiluxHome.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Expertise from "../Expertise/Expertise";
import AgiluxMV from "../AgiluxMissionVision/AgiluxMV";
import AgiluxServices from "../AgiluxCoreServices/AgiluxServices";
import AgiluxWhyUs from "../AgiluxWhyUs/AgiluxWhyUs";
import AgiluxProcess from "../MinimalComponent/AgiluxProcess/AgiluxProcess";
const TextSlider = [
    {
        text: "Digital Agency"
    },
    {
        text: "Graphics Designing"
    },
    {
        text: "App Development"
    },
    {
        text: "Web Development"
    }
]
const AgiluxHome = () => {
    const headings = [
        "Transforming Ideas into Digital Reality",
        "Innovative Solutions for Web and Mobile",
        "Crafting Digital Experiences That Matter",
        "Your Vision, Our Code",
        "Powering Digital Growth Through Custom Development"
    ]; // Add multiple headings here

    const [currentHeading, setCurrentHeading] = useState(0);
    const [fade, setFade] = useState(true); // For fade effect

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(false); // Start fade-out effect
            setTimeout(() => {
                setCurrentHeading((prevHeading) => (prevHeading + 1) % headings.length); // Change the heading
                setFade(true); // Start fade-in effect
            }, 500); // Wait for fade-out to complete before changing
        }, 4000); // Change heading every 2 seconds

        return () => clearInterval(interval);
    }, [headings.length]);

    return (
        <>
            <section className="AgiluxHomeContainer">
                <div style={{ overflow: "hidden", width: "100%" }}>
                    <video src={BackVideo} loop autoPlay muted></video>
                    <div className="BlackOverlay">

                    </div>
                    <div className="AgiluxHomeContentContainer">
                        <div>
                            <h1 className={`HomePageAgiluxHeading ${fade ? 'fade-in' : 'fade-out'}`}>
                                {headings[currentHeading]}
                            </h1>
                            <div style={{ display: "flex", alignContent: "center" }}>
                                /&nbsp;&nbsp;
                                <Swiper
                                    direction={'vertical'}
                                    loop={true}
                                    autoplay={{
                                        delay: 2000,
                                        disableOnInteraction: false,
                                    }}
                                    modules={[Autoplay]}
                                    className="mySwiper"
                                >
                                    {TextSlider.map((item, index) => (
                                        <SwiperSlide><div className="TextAnimated">{item.text}</div></SwiperSlide>
                                    ))}

                                </Swiper>
                                <div className="ContactUsbtn">
                                    <a href=""><p>Contact&nbsp;us</p><FaArrowRightLong /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AgiluxMV />
            <AgiluxServices />
            <AgiluxWhyUs />
            <AgiluxProcess/>
            {/* <Expertise /> */}
        </>
    )
}
export default AgiluxHome