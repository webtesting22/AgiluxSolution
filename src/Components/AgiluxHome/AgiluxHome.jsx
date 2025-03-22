import React, { useEffect, useState, useRef } from "react";
import "./AgiluxHome.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaArrowRightLong } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
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
    const videoRef = useRef(null);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1.0; // Adjust the speed if needed
        }
    }, []);

    // // Handle video time updates to fade out near the end
    // const handleTimeUpdate = () => {
    //     const video = videoRef.current;
    //     if (video && video.duration - video.currentTime <= 0.5) { // 0.5 seconds before the video ends
    //         setIsFading(true); // Trigger fade out
    //     }
    // };

    // // Handle video ending event to loop smoothly
    // const handleVideoEnd = () => {
    //     const video = videoRef.current;
    //     setIsFading(false); // Reset fading
    //     video.currentTime = 0; // Reset video to the start
    //     video.play(); // Restart the video
    // };

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
        }, 2000); // Change heading every 2 seconds

        return () => clearInterval(interval);
    }, [headings.length]);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    return (
        <>
            <section className="AgiluxHomeContainer">
                <div style={{ overflow: "hidden", width: "100%" }}>
                    <div className="video-container">
                        <img src="/HomePageBanner.jpg" alt="" data-aos="zoom-in" data-aos-delay="200"  data-aos-duration="2000"/>
                        {/* <video
                            id="PcONly"
                            ref={videoRef}
                            src="https://webtesting-upload.vercel.app/assets/BackGround-DuFX_wDI.mp4"
                            loop={true} // We control the loop manually
                            autoPlay
                            preload="auto"
                            muted
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnd}
                            style={{ width: '100%', objectFit:"cover" }}
                        />
                        <video
                            id="Mobileonly"
                            ref={videoRef}
                            src="https://webtesting-upload.vercel.app/assets/Mobilescreen-CpsBTcOJ.mp4"
                            loop={true} // We control the loop manually
                            autoPlay
                            preload="auto"
                            muted
                            onTimeUpdate={handleTimeUpdate}
                            onEnded={handleVideoEnd}
                            style={{ width: '100%', objectFit:"cover"  }}
                        /> */}

                    </div>
                    <div className="BlackOverlay">

                    </div>
                    <div className="AgiluxHomeContentContainer">
                        <div data-aos="fade-up" data-aos-delay="200"  data-aos-duration="2000">
                            <h1 className={`HomePageAgiluxHeading ${fade ? 'fade-in' : 'fade-out'}`} >
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
                                        <SwiperSlide key={index}><div className="TextAnimated">{item.text}</div></SwiperSlide>
                                    ))}

                                </Swiper>
                                <div className="ContactUsbtn">
                                    <a href="tel:9558653846"><p>Contact&nbsp;us</p><FaArrowRightLong /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <AgiluxMV />
            <AgiluxServices />
            <AgiluxWhyUs />
            <AgiluxProcess />
            {/* <Expertise /> */}
        </>
    )
}
export default AgiluxHome