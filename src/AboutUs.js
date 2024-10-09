// import React from 'react';
// import './AboutUs.css';  // Link to CSS file for styles

// const AboutUs = () => {
//     return (
//         <div className="about-us-section">
//             <div className="about-header">
//                 <img src="your-image-url.jpg" alt="Group" className="about-image" />
//                 <div className="about-content">
//                     <h2>ABOUT US</h2>
//                     <p>
//                         MICROSOFT LEARN STUDENT CHAPTER IS PARAMOUNT IN CREATING ONE OF THE MOST INFLUENTIAL EVENTS. 
//                         OUR PEER-TO-PEER LEARNING METHOD HAS MARKEDLY INCREASED OUR RESPONSE RATE AND RESULTED IN SIGNIFICANT IMPROVEMENTS 
//                         IN PARTICIPANTS' VOCATIONAL SKILLS, PROBLEM-SOLVING CAPABILITIES, AND TECHNICAL EXPERTISE. 
//                         THIS PROGRESS IS ATTAINED THROUGH THE PROVISION OF THOUGHTFULLY CURATED CONTENT BY INDUSTRY EXPERTS.
//                     </p>
//                 </div>
//             </div>

//             <div className="steps-container">
//                 <div className="step">
//                     <h3>DECIDE</h3>
//                     <p>We will help you decide the best way ahead by providing you the right information</p>
//                 </div>

//                 <div className="step">
//                     <h3>LEARN</h3>
//                     <p>Having skills is one thing and applying that at the right place is another. We will bridge the gap</p>
//                 </div>

//                 <div className="step">
//                     <h3>APPLY</h3>
//                     <p>We will help you learn what you need to via exclusive events, sessions, and webinars</p>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutUs;
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us-section">
            {/* About Header */}
            <div className="about-header">
                <img src="your-image-url.jpg" alt="Group" className="about-image" />
                <div className="about-content">
                    <h2>ABOUT US</h2>
                    <p>
                        MICROSOFT LEARN STUDENT CHAPTER IS PARAMOUNT IN CREATING ONE OF THE MOST INFLUENTIAL EVENTS.
                        OUR PEER-TO-PEER LEARNING METHOD HAS MARKEDLY INCREASED OUR RESPONSE RATE AND RESULTED IN
                        SIGNIFICANT IMPROVEMENTS IN PARTICIPANTS' VOCATIONAL SKILLS, PROBLEM-SOLVING CAPABILITIES, 
                        AND TECHNICAL EXPERTISE. THIS PROGRESS IS ATTAINED THROUGH THE PROVISION OF THOUGHTFULLY
                        CURATED CONTENT BY INDUSTRY EXPERTS.
                    </p>
                </div>
            </div>

            {/* Steps Section */}
            <div className="steps-container">
                <div className="step">
                    <i className="fas fa-compass step-icon"></i>
                    <h3>DECIDE</h3>
                    <p>We will help you decide the best way ahead by providing you the right information</p>
                </div>

                <div className="step">
                    <i className="fas fa-lightbulb step-icon"></i>
                    <h3>LEARN</h3>
                    <p>Having skills is one thing and applying that at the right place is another. We will bridge the gap</p>
                </div>

                <div className="step">
                    <i className="fas fa-code step-icon"></i>
                    <h3>APPLY</h3>
                    <p>We will help you learn what you need to through exclusive events, sessions, and webinars</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
