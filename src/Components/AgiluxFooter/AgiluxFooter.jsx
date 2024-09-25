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
                        <h2>If you wanna stand out, gotta be outstanding. Our designers and development rockstars are here to make your digital dreams pop.</h2>
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