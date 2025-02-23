import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import "./journey.css"; 
import Footer from "../MainHome/Footer/Footer";

const journeyData = [
  {
    title: "Early Beginnings",
    text: "My journey started with a fascination for the internet and how websites were built. I began learning HTML, CSS, and JavaScript through online resources, building small projects, and experimenting with different web design techniques.",
    image: "https://i.pinimg.com/236x/0c/5a/38/0c5a38f76959ff13ab08ac2fdc3820f9.jpg"
  },
  {
    title: "Stepping Into Front-End Development",
    text: "I quickly fell in love with the art of creating beautiful, interactive user interfaces. I expanded my knowledge into front-end development by diving deeper into JavaScript and learning frameworks like React.",
    image: "https://i.pinimg.com/236x/b2/e5/38/b2e5380cccf49d3aa6d8cdba1aca90e8.jpg"
  },
  {
    title: "Embracing Full-Stack Development",
    text: "As I grew more comfortable with front-end development, I started exploring back-end technologies, databases, and APIs, aiming to become a full-stack developer.",
    image: "https://i.pinimg.com/236x/d0/8c/98/d08c98a438e525d3f8e69056cbaa48fd.jpg"
  },
  {
    title: "Professional Growth",
    text: "Currently, I'm honing my skills as a developer by working on both personal projects and professional opportunities. My goal is to continue improving and contribute to impactful web applications.",
    image: "https://i.pinimg.com/236x/e1/f9/57/e1f9577c9a10eacafc4656b6d43ffca4.jpg"
  },
  {
    title: "Looking Ahead",
    text: "As I continue to grow, I look forward to exploring new areas such as advanced JavaScript frameworks, machine learning, and artificial intelligence.",
    image: "https://i.pinimg.com/474x/31/4c/d3/314cd335170bd8a8f4e3142b1d7326c5.jpg"
  }
];

const JourneySection = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for triggering animations when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <>
    <section ref={sectionRef} className="journey-container">
      <motion.h2 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: visible ? 1 : 0, y: 0 }}
        transition={{ duration: 1 }}
        className="journey-title"
        >
        My Journey
      </motion.h2>
      
      {journeyData.map((item, index) => (
        <motion.div 
          key={index} 
          className={`journey-item ${index % 2 !== 0 ? "reverse" : ""}`}
          initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
          animate={{ opacity: visible ? 1 : 0, x: 0 }}
          transition={{ duration: 1, delay: index * 0.3 }}
        >
          <img className="imgSet" style={{width: '200px', height: '200px'}} src={item.image} alt={item.title} />
          <div className="journey-content">
            <h3>{item.title}</h3>
            <p style={{color: 'white'}}>{item.text}</p>
          </div>
        </motion.div>
      ))}
    </section>
    {/* <Footer /> */}
      </>
  );
};

export default JourneySection;
