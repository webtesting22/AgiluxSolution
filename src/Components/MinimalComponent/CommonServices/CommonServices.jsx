import React from 'react';
import { useParams } from 'react-router-dom';
import "./DescriptionContainer.css"
const serviceData = {
    'UIUX': {
        title: 'UI-UX Design',
        description: <>
            <p>Effective UI/UX Design</p>
            <br />
            <p><b>User Research: </b>Conduct thorough user research to understand the target audience's needs, behaviors, and pain points. Utilize methods like surveys, interviews, and usability testing to gather valuable insights.</p>
            <br />
            <p><b>Wireframing and Prototyping:</b> Develop wireframes and prototypes to visualize the app's structure and functionality. This iterative process allows for early testing and feedback, helping refine the design before development begins.</p>
            <br />
            <p><b>Consistency:</b> Maintain consistency in design elements, such as colors, fonts, and button styles, throughout the application. Consistent design fosters familiarity, making it easier for users to navigate.</p>
            <br />
            <p><b>Responsive Design:</b> Ensure that the application is designed to function smoothly across various devices and screen sizes. Responsive design enhances usability on mobile devices, tablets, and desktops.</p>
            <br />
            <p><b>Accessibility:</b> Design with accessibility in mind to accommodate users with diverse abilities. Implement features such as screen reader compatibility, alt text for images, and adjustable font sizes to create an inclusive experience.</p>
            <br />
            <p><b>Visual Hierarchy:</b> Use visual hierarchy to guide users' attention to important information and actions. Employ size, color, and placement to highlight key elements, making it easy for users to understand the app’s flow.</p>
            <br /><br />
            
            <p><b>Our UI/UX Design Tools</b></p>
            <br />
            <p><b>1. Figma</b></p>
            <br />
            <p>Figma is a powerful cloud-based design tool widely used for UI/UX design. It offers collaborative features that allow teams to work together in real-time, making it ideal for remote work. Key features include:
            </p>
            <p><b>Vector Graphics Editing:</b> Create scalable graphics and design elements easily.</p>
         
            <p><b>Prototyping:</b> Build interactive prototypes to simulate user flows and test functionalities.</p>
        
            <p><b>Component Libraries:</b> Utilize reusable design components to maintain consistency across projects.</p>
            
            <p><b>Feedback and Commenting:</b> Stakeholders can leave comments directly on the design, facilitating streamlined communication.</p>
            <br /> 
            <p><b>2. Adobe XD</b></p>
            <br />
            <p>Adobe XD is another leading design tool that provides a comprehensive suite for designing and prototyping user experiences. Its features include:
            </p>
            <p><b>Design Systems:</b> Create and maintain design systems for consistent branding across applications.</p>
            <p><b>oice Prototyping:</b> Design and prototype voice interfaces, catering to the growing demand for voice-activated apps.</p>
            <p><b>Integration with Adobe Creative Cloud:</b> Seamlessly connect with other Adobe products for a streamlined workflow.</p>
            <br />
            <p><b>3. Sketch</b></p>
            <br />
            <p>Sketch is a popular vector graphics editor focused on UI/UX design for web and mobile applications. Key features include:</p>
            <p>Symbols and Shared Styles: Create reusable design elements and styles to ensure consistency.
                Plugins and Integrations: Extend functionality with various plugins that enhance design capabilities and workflows.</p>
                <br />
            <p><b>4. InVision</b></p>
            <br />
            <p>InVision is a digital product design platform that facilitates collaboration and prototyping. Its features include:</p>
            <p><b>Prototyping: </b>Create interactive prototypes that can be shared with stakeholders for feedback.</p>
            <p><b>Design Collaboration:</b> Collaborate with team members in real-time, allowing for a more cohesive design process.</p>
            <br />
            <p><b>5. Axure RP</b></p>
            <br />
            <p>Axure RP is a comprehensive tool for wireframing and prototyping. It offers features such as:</p>
            <p><b>Advanced Prototyping: </b>Create high-fidelity prototypes with interactive elements and complex functionalities.</p>
            <p><b>Documentation:</b> Generate detailed specifications and documentation to guide developers during the implementation phase.</p>
            <p>Best Practices for UI/UX Design in Application Development</p>
            <p><b>Iterative Design Process:</b> Embrace an iterative design approach that involves continuous testing and refinement. Gather user feedback at each stage to make informed design decisions.</p>
            <p><b>Collaborate Across Teams:</b> Foster collaboration between designers, developers, and stakeholders throughout the design process. Cross-functional teamwork leads to a more cohesive product.</p>
            <p><b>Utilize User Testing:</b> Conduct usability testing with real users to identify pain points and areas for improvement. Testing helps ensure that the final product meets user expectations.</p>
            <p>Stay Updated on Trends: Keep an eye on the latest design trends and emerging technologies to ensure your applications remain modern and relevant. Adapting to new design paradigms enhances user engagement.</p>
            <p><b>Focus on Performance:</b> Ensure that design choices do not compromise app performance. Optimize images, minimize animations, and streamline code to enhance load times and responsiveness.</p>
        </>,
    },
    'Frontend-Development': {
        title: 'Frontend Development',
        description: 'We specialize in web development...',
    },
    'Backend-Development': {
        title: 'Backend Development',
        description: 'Our app development team creates scalable applications...',
    },
    'Content-Management-System': {
        title: 'Content Management System',
        description: 'Our testing services ensure quality and performance...',
    },
    'Testing-Quality-Assurance': {
        title: 'Testing-Quality-Assurance',
        description: 'Our testing services ensure quality and performance...',
    },
    'Post-Launch-Support': {
        title: 'Post-Launch Support',
        description: 'Our testing services ensure quality and performance...',
    },
};

const CommonServices = () => {
    const { service } = useParams();  // This will grab the dynamic part of the URL

    const currentService = serviceData[service];  // Get the content based on the URL

    if (!currentService) {
        return <p>Service not found</p>;
    }

    return (
        <section>
            <div className="TopContainer">
                <div>
                    <h2>/ {currentService.title}</h2>
                </div>
            </div>
            <div className='DescriptionContainer'>
            <p>{currentService.description}</p>
            </div>
        </section>
    );
};

export default CommonServices;
