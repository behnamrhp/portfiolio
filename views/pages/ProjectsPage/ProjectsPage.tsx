'use client';

import React from 'react';
import { BodyText } from '../../atoms/Typography';
import ProjectCard from '../../molecules/ProjectCard';
import PageLayout from '../../organisms/PageLayout';
import { dict, projects } from '@/input';

const ProjectsPage: React.FC = () => {
  return (
    <PageLayout
      title={dict.projects.title}
      subtitle={`${projects.list.length} open-source projects`}
      className="px-4 md:px-8"
    >
      <div className="space-y-6">
        {projects.list.map((project, index) => (
          <ProjectCard key={index} project={project} />
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


