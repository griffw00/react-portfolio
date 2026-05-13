import React from "react";
import "./styles/projects.css";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="experience-card">
      <div className="experience-card-icon-wrapper">
        <img
          className="experience-card-icon"
          src={experience.icon}
          alt={`${experience.company} icon`}
        />
      </div>
      <div className="experience-card-content">
        <h2 className="experience-card-title">
          {experience.role} @ {experience.company}
        </h2>
        <p className="experience-card-date">{experience.date}</p>
        <div className="experience-tech-list">
          {experience.technologies.map((technology) => (
            <span className="experience-tech-pill" key={technology}>
              {technology}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
