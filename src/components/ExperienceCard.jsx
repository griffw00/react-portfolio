import React from "react";

const ExperienceCard = ({ experience }) => {
  return (
    <article className="experience-card">
      <div className="experience-card-top">
        <h3 className="experience-card-company">{experience.company}</h3>
        <p className="experience-card-date">{experience.date}</p>
      </div>
      <p className="experience-card-role">{experience.role}</p>
      <p className="experience-card-description">{experience.description}</p>
      <div className="tech-list">
        {experience.technologies.map((technology) => (
          <span className="tech-tag" key={technology}>
            {technology}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ExperienceCard;
