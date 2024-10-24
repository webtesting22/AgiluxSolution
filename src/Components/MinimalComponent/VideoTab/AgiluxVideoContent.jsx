import React from "react";
import { Row, Col } from "antd";

import "./VideosContainer.css"
import LogoAnimation from "./Logo Animation.mp4"

const AgiluxVideoContent = () => {
    return (
        <>
            <div className="TopContainer">
                <div>
                    <h4>/ Agilux Video</h4>
                    <div style={{ display: "flex", justifyContent: "space-Between" }}>
                        <h2>Video Editing</h2>
                    </div>
                </div>
            </div>

            <div className="VideosContainer">
                <Row>
                    <Col lg={6} md={12}>
                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/Educational%20Niche-BgUrm4yI.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/Short%20Form-wjSPI3W0.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/Delivery%20Ads-DmSO92if.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/Video3-C9klMcQl.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12} md={24}>

                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/Video2-QS4DPx8A.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div className="AbsoluteVideo">
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/sample6-B3ArTujS.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                    <Col lg={6} md={12}>
                        <div>
                            <video
                                x
                                src={LogoAnimation}
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={6} md={12}>

                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/Portfolio%20%20show%20reel-DpLpG9dY.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                    <Col lg={6}>

                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/sample9-evH8vlBu.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>
                    <Col lg={6}>

                    </Col>
                    <Col lg={6} md={12}>

                        <div>
                            <video
                                x
                                src="https://webtesting-upload.vercel.app/assets/sample10-g_NUUOSu.mp4"
                                loop={true}
                                autoPlay
                                muted
                                playsInline
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', pointerEvents: 'none' }} // Ensure no interaction triggers fullscreen
                            />
                        </div>
                    </Col>

                </Row>

            </div>
        </>
    )
}
export default AgiluxVideoContent