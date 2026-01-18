
import React from 'react';
import { BodyText } from '../../atoms/Typography';
import ProjectCard from '../../molecules/ProjectCard';
import PageLayout from '../../organisms/PageLayout';
import { dict, projects } from '@/input';

interface ProjectsPageProps {
  startIndex?: number;  // Starting index in projects array
  count?: number;       // Number of projects to show
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ 
  startIndex = 0, 
  count = projects.list.length 
}) => {
  // Get subset of projects
  const projectsToShow = projects.list.slice(startIndex, startIndex + count);
  
  return (
    <PageLayout
      title={dict.projects.title}
      subtitle={`${projects.list.length} open-source projects`}
      className="px-4 md:px-8"
    >
      <div className="space-y-6">
        {projectsToShow.map((project, index) => (
          <ProjectCard key={startIndex + index} project={project} />
        ))}
        
        {/* Footer note */}
        <div className="text-center pt-8 pb-4">
          <BodyText size="sm" className="opacity-60">
            All projects are open-source and available on GitHub
          </BodyText>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectsPage;


