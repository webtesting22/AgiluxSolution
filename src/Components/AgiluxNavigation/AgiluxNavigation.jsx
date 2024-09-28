import React, { useState, useEffect } from "react";
import "./AgiluxNavigation.css";
import { Button, Drawer, Collapse } from 'antd';
import { Link } from "react-router-dom";
const AgiluxNavigation = () => {
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [selectedContent, setSelectedContent] = useState(""); // State to store content for child drawer

    // Track scroll position to switch from absolute to sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const showChildrenDrawer = (content) => {
        setSelectedContent(content);  // Set content for child drawer
        setChildrenDrawer(true);
    };

    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };

    const items = [
        {
            key: '1',
            label: 'Services',
            children:
                <>
                    <div className="NavigationChildLinks">
                        <p style={{ height: "100%" }} onClick={() => showChildrenDrawer(
                            <>
                                <div className="ChildDrawerContent">
                                    <p>/ UI/UX Design</p>
                                    <p>/ Frontend Development</p>
                                    <p>/ Backend Development & API Integration</p>
                                    <p>/ Testing and Quality Assurance</p>
                                    <p>/ Deployment and Submission</p>
                                    <p>/ Post-Launch Support & Maintenance</p>

                                </div>
                            </>
                        )}>
                            App Development
                        </p>
                        <p onClick={() => showChildrenDrawer(
                            <>
                                <div className="ChildDrawerContent">
                                    <p>/ UI/UX Design</p>
                                    <p>/ Frontend Development</p>
                                    <p>/ Backend Development</p>
                                    <p>/ Content Management System (CMS)</p>
                                    <p>/ Testing & Quality Assurance</p>
                                    <p>/ Post-Launch Support & Maintenance</p>

                                </div>
                            </>
                        )}>Web Development</p>
                        <p onClick={() => showChildrenDrawer(
                            <>
                                <div className="ChildDrawerContent">
                                    <p>/ Concept Development & Ideation</p>
                                    <p>/ Design Execution</p>
                                    <p>/ Revisions and Final Adjustments</p>
                                    <p>/ File Preparation and Delivery</p>
                                    <p>/ Client Handoff and Support</p>

                                </div>
                            </>
                        )}>Graphic Designing</p>
                        <p onClick={() => showChildrenDrawer(
                            <>
                                <div className="ChildDrawerContent">
                                    <p>/ Test Environment Setup</p>
                                    <p>/ Unit Testing Automation</p>
                                    <p>/ Integration Testing Automation</p>
                                    <p>/ Performance Testing Automation</p>
                                    <p>/ Test Report and Documentation</p>

                                </div>
                            </>
                        )}>QA Automatic Testing</p>
                        <p onClick={() => showChildrenDrawer(
                            <>
                                <div className="ChildDrawerContent">
                                    <p>/ SEO Audit & Analysis</p>
                                    <p>/ Technical SEO Optimization</p>
                                    <p>/ On-Page SEO Optimization</p>
                                    <p>/ Content Strategy & Creation</p>
                                    <p>/ Off-Page SEO & Link Building</p>
                                    <p>/ Ongoing SEO Monitoring & Reporting</p>

                                </div>
                            </>
                        )}>Search Engine Optimization (SEO)</p>
                    </div>
                </>,
        },
        {
            key: '2',
            label: 'Projects',
            children:
                <>
                    <div className="NavigationChildLinks">
                        <Link to="/appdevelopment"><p onClick={onClose}>App Development</p></Link>
                        <Link to="/webdevelopment"><p onClick={onClose}>Web Development</p></Link>
                    </div>
                </>,
        },
        // {
        //     key: '3',
        //     label: 'Industries',
        //     children: <p>Industry Content</p>,
        // },
        // {
        //     key: '4',
        //     label: 'More Info',
        //     children: <p>More Information Content</p>,
        // },
        {
            key: '3',
            label: <><Link to="/agiluxaboutus" onClick={onClose}>About Us</Link></>,
        },
        {
            key: '4',
            label: <><Link to="/agiluxblog" onClick={onClose}>Blogs</Link></>,
        },
    ];

    return (
        <div className={`AgiluxNavigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="NavigationContainer">
                <div className="AgiluxLogoAnimated">
                    <Link to="/"><h4>Agilux</h4></Link>
                    <div className="ExploreTabs" onClick={showDrawer}>
                        <span>menu</span>
                    </div>

                    <Drawer
                        title={<>
                            <div className="DrawerTitle">
                                <h3>Explore</h3>
                            </div>
                        </>}
                        width={520}
                        closable={false}
                        onClose={onClose}
                        open={open}
                    >
                        <button onClick={onClose}>
                            X
                        </button>
                        <Collapse accordion items={items} />
                    </Drawer>

                    <Drawer
                        title={null}
                        width={320}
                        closable={false}
                        onClose={onChildrenDrawerClose}
                        open={childrenDrawer}
                    >
                        <button onClick={onChildrenDrawerClose}>X</button>
                        {/* Display the selected content here */}
                        <p>{selectedContent}</p>
                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default AgiluxNavigation;
