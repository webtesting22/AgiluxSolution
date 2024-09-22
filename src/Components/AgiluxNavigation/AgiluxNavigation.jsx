import React, { useState, useEffect } from "react";
import "./AgiluxNavigation.css";
import { Button, Drawer, Collapse } from 'antd';

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
                        <p onClick={() => showChildrenDrawer("App Development")}>App Development</p>
                        <p onClick={() => showChildrenDrawer("Web Development")}>Web Development</p>
                        <p onClick={() => showChildrenDrawer("Graphic Designing")}>Graphic Designing</p>
                        <p onClick={() => showChildrenDrawer("QA Automatic Testing")}>QA Automatic Testing</p>
                        <p onClick={() => showChildrenDrawer("SEO Services")}>Search Engine Optimization (SEO)</p>
                    </div>
                </>,
        },
        {
            key: '2',
            label: 'Industries',
            children: <p>Industry Content</p>,
        },
        {
            key: '3',
            label: 'More Info',
            children: <p>More Information Content</p>,
        },
    ];

    return (
        <div className={`AgiluxNavigation ${scrolled ? 'scrolled' : ''}`}>
            <div className="NavigationContainer">
                <div className="AgiluxLogoAnimated">
                    <h4>Agilux</h4>
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
