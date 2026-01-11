import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import Divider from '../../atoms/Divider';
import PageLayout from '../../organisms/PageLayout';
import { dict, skills } from '@/input';

/**
 * Skills Section - Page 1: Software Engineering Practices & Architectures
 * Shows software engineering principles and best practices (text only, no logos)
 */
const SkillsPracticesPage: React.FC = () => {
  return (
    <PageLayout
      title={dict.skills.title}
      className="px-4 md:px-8"
    >
      <div className="space-y-8">
        {/* Drag hint */}
        <div className="bg-manuscript-lapis bg-opacity-10 border-l-4 border-manuscript-lapis p-4 rounded-sm">
          <BodyText size="sm" className="italic">
            💡 {dict.skills.dragHint}
          </BodyText>
        </div>
        
        <Divider dividerStyle="ornamental" />
        
        {/* Software Engineering Principles - Text Only */}
        <section>
          <Heading level="h3" className="mb-4">
            Software Engineering Practices & Architectures
          </Heading>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {skills.principles.map((principle, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 border border-manuscript-ink rounded-sm hover:bg-manuscript-ink hover:bg-opacity-5 transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="stroke-manuscript-lapis flex-shrink-0"
                >
                  <path
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <BodyText size="sm" className="flex-1">
                  {principle}
                </BodyText>
              </div>
            ))}
          </div>
        </section>
        
        {/* Footer note */}
        <div className="text-center pt-8">
          <BodyText size="sm" className="opacity-60">
            Flip to next page to see technical stack with logos
          </BodyText>
        </div>
      </div>
    </PageLayout>
  );
};

export default SkillsPracticesPage;

