import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Flex, Text } from '@chakra-ui/react';
import './styles/projects.css';
import { FaGithub } from 'react-icons/fa'; // Import icons from react-icons library



const ProjectsAccordion = ({ projectData }) => {


  return (
    <Accordion defaultIndex = {[0]} className="accordion-container">
      {projectData.map((project, index) => (
        <AccordionItem key={index}>
          <h2>
          <AccordionButton className="accordion-button">
            <Box flex="1" textAlign="left" className="project-info">
              <div className = "header-wrapper">

                <div className="project-name">
                  {project.name}
                </div>

                <div className = "github-icon">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon"/>
                  </a>
                </div>
              </div>
              
              <div className="project-technologies">
                {project.technologies}
              </div>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          </h2>
          <AccordionPanel pb={4}  pl="35px" className="accordion-panel">
                <Flex align="center">
                    <Box flex="0 0 auto">
                        <img className = "project-image" src={project.image} alt={project.name} style={{ width: '350px', marginRight: '20px' }} />
                    </Box>
                    <Box className = "project-desc" flex="1">
                        <Text>{project.description}</Text>
                    </Box>
                </Flex>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProjectsAccordion;
