import React from "react";
import "./AgiluxServices.css"
import GraphicDesign from "./GraphicDesign.jpeg"
const AgiluxServices = () => {

    const AgiluxServices = [
        {
            Title: "App Development",
            keyWord: "Mobile App Development Services",
            Description: "We build robust, scalable, and user-friendly mobile applications for iOS and Android, turning your ideas into powerful tools that drive user engagement and business growth."
        },
        {
            Title: "Web Development",
            keyWord: "Website Optimization.",
            Description: "Our web development services are designed to create high-performing, responsive, and visually appealing websites that provide seamless user experiences. From e-commerce platforms to corporate websites, we ensure your online presence is impactful and effective."
        },
        // {
        //     Title: "Web Design",
        //     Description: "Our creative design team crafts intuitive, modern, and visually stunning web interfaces that focus on user experience (UX) and user interface (UI) design. We ensure that every website we build not only looks great but also functions seamlessly on all devices."
        // },
        {
            Title: "Graphic Design",
            image: GraphicDesign,
            keyWord: "Visual content optimization.",
            Description: "From logos to marketing collateral, our graphic design services give your brand a distinctive, professional look. We create designs that resonate with your audience and reflect your brand identity across all platforms."
        },
        // {
        //     Title: "Motion Design",
        //     Description: "Bring your brand to life with engaging motion graphics. Whether for advertising, social media, or product demos, our motion design services help you communicate complex ideas in a simple, visually dynamic way."
        // },
        {
            Title: "Automated Testing",
            keyWord: "Test Automation",
            Description: "We ensure the reliability and performance of your software through rigorous automated testing. By identifying bugs and improving functionality before launch, we guarantee that your product performs flawlessly under all conditions."
        },
        {
            Title: "SEO (Search Engine Optimization)",
            keyWord: "Organic search traffic",
            Description: "Drive more organic traffic and improve your website’s visibility with our SEO services. From on-page optimization to keyword research and link building, we implement strategies that enhance your rankings on search engines and attract the right audience."
        },
        // {
        //     Title: "App Deployment & Updates",
        //     Description: "We manage the complete lifecycle of your mobile application, from deployment to ongoing updates. Our team ensures a smooth launch, regular maintenance, and continuous improvements to keep your app competitive and up-to-date."
        // },
        // {
        //     Title: "Bug Fixes & Maintenance",
        //     Description: "Whether it’s resolving technical issues or making adjustments based on user feedback, we provide timely bug fixes and ongoing maintenance to ensure your app and website continue to run smoothly without interruptions."
        // }
    ]
    return (
        <>
            <section style={{ backgroundColor: "white" }}>
                <div className="AgiluxCoreServicesContainer">
                    <h4 style={{ color: "black", fontWeight: "400" }}>/ Our Services</h4>
                    <div style={{ display: "flex", justifyContent: "space-Between", padding: "2rem 0rem" }}>
                        <h2>Leading with Purpose</h2>
                    </div>
                    {/* <div className="AgiluxServicesContainer"> */}

                    {AgiluxServices.map((item, index) => (
                        <div key={index} className="AgiluxServicesContainer">
                            <div className="InsideFlexContainer">
                                {/* <img src={item.image} alt=""  className="AbsoluteImage"/> */}
                                <div>
                                    <h5 style={{ color: "black", margin: "0px" }}>/&nbsp;{index + 1}</h5>&nbsp;&nbsp;&nbsp;<h2>{item.Title}</h2>
                                </div>
                                <div>
                                    {item.Description}
                                    <br />
                                    <br />
                                    <p>/ {item.keyWord}</p>
                                </div>
                            </div>
                        </div>
                    ))}


                    {/* </div> */}
                </div>
            </section>
        </>
    )
}
export default AgiluxServices