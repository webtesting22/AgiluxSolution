import React from "react";
import "./AgiluxFooter.css"
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AgiluxFooter = () => {
    return (
        <>
            <section className="Footer">
                <div className="FooterContainer">
                    <div className="EmailContainer">
                        <h2>Elevate your digital presence with our team of expert designers and developers. We specialize in crafting innovative, user-centric solutions that bring your digital vision to life. Let us help you stand out with exceptional design and development that exceeds expectations.</h2>
                        <br />
                        <div className="EmailAnimation">
                            <h4>contact@agilux.com</h4>
                            <hr />
                        </div>
                    </div>
                    <br /><br />
                    <div className="TopBarFooter">
                        <div>
                            <div><p>Design & Developed by <Link to="/"><span style={{ fontWeight: "400" }}>Agilux Solution</span></Link> </p></div>
                        </div>
                        <div className="SocialLinks">
                            <ul>
                                <li>Instagram </li>
                                <li>FaceBook </li>
                                <li>Whatsapp </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AgiluxFooter