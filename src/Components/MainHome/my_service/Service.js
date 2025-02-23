import React from "react";
import "./service.css";

function Service() {
    const services = [
        {
            title: "Frontend Development",
            description: "Building responsive and user-friendly interfaces using React, HTML, CSS, and JavaScript.",
        },
        {
            title: "UI/UX Design",
            description: "Creating intuitive and aesthetically pleasing user experiences with modern design principles.",
        },
        {
            title: "Web Optimization",
            description: "Enhancing website speed, accessibility for a smooth and optimized user experience.",
        },
        {
            title: "JavaScript Development",
            description: "Developing dynamic and interactive web applications with modern frameworks.",
        }
    ];

    return (
        <section>
            <div className="container sectionConta" style={{ color: "white" }}>
                <div>
                    <h2>My Services</h2>
                </div>

                <div className="cardSec">
                    {services.map((service, index) => (
                        <div className="card" key={index}>
                            <h1 style={{ fontSize: "22px", color: "white" }}>{service.title}</h1>
                            <p className="heading" style={{ fontSize: "13px", color: "green" }}>
                                {service.description}
                            </p>
                            <p>
                                {/* <button style={{ fontSize: "10px" }}>Explore</button> */}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Service;
