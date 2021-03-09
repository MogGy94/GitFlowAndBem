import * as React from 'react';
import './stylesContactUs.css';

const ContactUs = () => {
    return (
        <div className="contactUs">
            <div className="contactUs__contactInfo">
                <div className="">
                    <h2 className="contactUs__tittle">Contact Info</h2>
                    <ul className="contactUs__list">

                        <li>
                            <Icon {...{ type: "fa-anchor", size: "fa-2x" }} />
                            <span className="contactUs__attribute">
                                Creacion Road <br />
                                Bogota DC, bog <br />
                                165982
                            </span>
                        </li>
                        <li>
                            <Icon {...{ type: "fa-envelope-open-o", size: "fa-2x" }} />
                            <span className="contactUs__attribute">ecanonp @unal.edu.co</span>
                        </li>
                        <li>
                            <Icon {...{ type: "fa-phone", size: "fa-2x" }} />
                            <span className="contactUs__attribute">321-379-8477</span>
                        </li>

                    </ul>
                </div>
                <ul className="contactUs__socialMedia">
                    <SocialMedia {...{ type: "fa-facebook" }} />
                    <SocialMedia {...{ type: "fa-twitter" }} />
                    <SocialMedia {...{ type: "fa-whatsapp" }} />
                    <SocialMedia {...{ type: "fa-instagram" }} />
                    <SocialMedia {...{ type: "fa-linkedin" }} />
                    <SocialMedia {...{ type: "fa-vimeo" }} />
                </ul>

            </div>
            <div className="contactUs__contactForm">
                <h2>Send a Messaje</h2>
                <div className="contactUs__formBox">
                    <div className="contactUs__inputBox w50">
                        <input type="text" required />
                        <span>First Name</span>
                    </div>
                    <div className="contactUs__inputBox w50">
                        <input type="text" required />
                        <span>Last Name</span>
                    </div>
                    <div className="contactUs__inputBox w50">
                        <input type="text" required />
                        <span>Email Name</span>
                    </div>
                    <div className="contactUs__inputBox w50">
                        <input type="text" required />
                        <span>Mobile Number</span>
                    </div>
                    <div className="contactUs__inputBox w100">
                        <textarea required></textarea>
                        <span>write your messaje</span>
                    </div>
                    <div className="contactUs__inputBox w100" >
                        <input type="submit" value="send" />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Icon = (props) => (
    <span className="contactUs__listIcon">
        <i className={`fa ${props.type} ${props.size || ''}`} aria-hidden="true"></i>
    </span>
)
const SocialMedia = (props) => (
    <li>
        <a className="" href="#">
            <i className={`fa ${props.type} ${props.size || 'fa-2x'}`} aria-hidden="true"></i>
        </a>
    </li>
)

export default ContactUs;