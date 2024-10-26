import React, { useState, useEffect } from "react";
import "./AgiluxNavigation.css";
import { Button, Drawer, Collapse } from 'antd';
import { Link } from "react-router-dom";
import { MdOutlineMenu } from "react-icons/md";
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
                                    <Link to="/services/UIUX"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}
                                    >
                                        <p>/ UI/UX Design</p>
                                    </Link>
                                    <Link to="/services/Frontend-Development"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Frontend Development</p>
                                    </Link>
                                    <Link to="/services/Backend-Development"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Backend Development & API Integration</p>
                                    </Link>
                                    <Link to="/services/Testing-Quality-Assurance"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Testing and Quality Assurance</p>
                                    </Link>
                                    <Link to="/services/Deployment-and-Submission"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Deployment and Submission</p>
                                    </Link>
                                    <Link to="/services/Post-Launch-Support"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Post-Launch Support & Maintenance</p>
                                    </Link>

                                </div>
                            </>
                        )}>
                            <span>App Development <hr /></span>

                        </p>
                        <p onClick={() => showChildrenDrawer(
                            <>
                                <div className="ChildDrawerContent">
                                    <Link to="/services/UIUXWeb"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}
                                    >
                                        <p>/ UI/UX Design</p>
                                    </Link>
                                    <Link to="/services/Frontend-Development-Web"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Frontend Development</p>
                                    </Link>
                                    <Link to="/services/Backend-Development-Web"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Backend Development</p>
                                    </Link>
                                    <Link to="/services/Our-Content-Management-Systems"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Content Management System (CMS)</p>
                                    </Link>
                                    <Link to="/services/Testing-Quality-Assurance-web"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Testing & Quality Assurance</p>
                                    </Link>
                                    <Link to="/services/Post-Launch-Support-Web"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}>
                                        <p>/ Post-Launch Support & Maintenance</p>
                                    </Link>

                                </div >
                            </>
                        )}><span>Web Development <hr /></span></p>
                        <p onClick={() => showChildrenDrawer(
                            <>
                                <div className="ChildDrawerContent">
                                    <Link to="/services/Concept-Development-Ideation"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}> <p>/ Concept Development & Ideation</p>
                                    </Link>
                                    <Link to="/services/Design-Execution"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}> <p>/ Design Execution</p>
                                    </Link>
                                    <Link to="/services/Revisions-and-Final-Adjustments"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}><p>/ Revisions and Final Adjustments</p>
                                    </Link>
                                    <Link to="/services/File-Preparation-and-Delivery"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}> <p>/ File Preparation and Delivery</p>
                                    </Link>
                                    <Link to="/services/Client-Handoff-and-Support"
                                        onClick={() => {
                                            onClose();
                                            onChildrenDrawerClose();
                                        }}> <p>/ Client Handoff and Support</p>
                                    </Link>
                                </div>
                            </>
                        )}><span>Graphic Designing<hr /></span></p>
                       
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
                        )}><span>QA Automatic Testing<hr /></span></p>
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
                        )}><span>Advertising and Brand Building<hr /></span></p>
                    </div >
                </>,
        },
        {
            key: '2',
            label: 'Projects',
            children:
                <>
                    <div className="NavigationChildLinks">
                        <Link to="/appdevelopment"><p onClick={onClose}><span>App Development<hr /></span></p></Link>
                        <Link to="/webdevelopment"><p onClick={onClose}><span>Web Development<hr /></span></p></Link>
                        <Link to="/agiluxVideoContent"><p onClick={onClose}><span>Video Editing<hr /></span></p></Link>
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
                        <MdOutlineMenu />
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
