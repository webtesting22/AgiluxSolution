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
                            <Link to="mailto:agiluxsolutions@gmail.com" target="_blank"><h4>agiluxsolutions@gmail.com</h4></Link>
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
                                <Link to="https://www.instagram.com/agiluxsolution/" target="_blank"><li>Instagram </li></Link>
                                {/* <li>FaceBook </li>
                                <li>Whatsapp </li> */}
                                <Link to="https://x.com/AgiluxSolution" target="_blank"><li>Twitter</li></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default AgiluxFooter