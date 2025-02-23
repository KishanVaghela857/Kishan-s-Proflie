import React from 'react';
import './Skill.css';

const skills = [
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Bootstrap' },
    { name: 'JavaScript' },
    { name: 'React' }
];

function Skills() {
    return (
        <div className="container ContaDEmo">
            <h1 className="h1Skill">My Skills</h1>
            <div className="skill">
                {skills.map((skill, index) => (
                    <div className="container" key={index}>
                        <div className="cardSkill">
                            <h2>{skill.name}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
