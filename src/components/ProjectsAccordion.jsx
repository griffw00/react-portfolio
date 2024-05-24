import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';
import './styles/projects.css';



const ProjectsAccordion = ({ projectData }) => {


  return (
    <Accordion defaultIndex = {[0]} className="accordion-container">
      {projectData.map((project, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton className="accordion-button">
              <Box flex="1" textAlign="left">
                {project.name}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}  pl="35px" className="accordion-panel">
              {project.description}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProjectsAccordion;
