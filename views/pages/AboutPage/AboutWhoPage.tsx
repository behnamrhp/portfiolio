import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import PageLayout from '../../organisms/PageLayout';
import { dict } from '@/input';

/**
 * About Section - Page 1: "Who is he?"
 * Shows the bio/introduction content
 */
const AboutWhoPage: React.FC = () => {
  // Extract "software engineer" for bold emphasis
  const bioContent = dict.about.whoIsHe.content;
  const parts = bioContent.split('software engineer');
  
  return (
    <PageLayout
      title={dict.about.title}
      className="px-4 md:px-8"
    >
      <div className="space-y-6">
        <section>
          <Heading level="h3" className="mb-4">
            {dict.about.whoIsHe.title}
          </Heading>
          
          <BodyText className="leading-relaxed">
            {parts[0]}
            <strong className="font-bold text-manuscript-lapis">
              software engineer
            </strong>
            {parts[1]}
          </BodyText>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutWhoPage;

