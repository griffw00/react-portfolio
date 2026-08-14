import React from "react";
import ExperienceCard from "./ExperienceCard";
import "./styles/projects.css";

const experienceData = [
  {
    company: "SOZO Intuition Systems",
    role: "Software Developer Co-op",
    date: "Jan 2026 — Present",
    description:
      "Shipping product features at an early-stage startup across the stack — from LangGraph-powered workflows to TypeScript frontends, with Docker and AWS in production.",
    technologies: [
      "LangGraph",
      "Python",
      "PyTest",
      "TypeScript",
      "React",
      "Docker",
      "AWS",
    ],
  },
  {
    company: "Global Relay",
    role: "Software Developer in Test Co-op",
    date: "Jan 2025 — Aug 2025",
    description:
      "Built and maintained automated test suites for a large compliance platform. Improved reliability of CI pipelines and surfaced regressions before they reached production.",
    technologies: ["Java", "JUnit", "Selenium", "SQL", "Jenkins", "Grafana"],
  },
  {
    company: "UBC Arts ISIT",
    role: "IT Support",
    date: "Sep 2023 — Dec 2024",
    description:
      "Supported faculty and staff across the Faculty of Arts — resolving tickets, maintaining campus systems, and keeping day-to-day tools running smoothly.",
    technologies: ["ServiceNow", "Office 365"],
  },
];

const Experience = () => {
  return (
    <section className="section" id="experience">
      <div className="section-grid">
        <p className="label section-label">02 — Experience</p>
        <div className="section-content experience-list">
          {experienceData.map((experience) => (
            <ExperienceCard experience={experience} key={experience.company} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
