import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import Divider from '../../atoms/Divider';
import Button from '../../atoms/Button';
import PageLayout from '../../organisms/PageLayout';
import { dict, CV_LINK } from '@/input';

/**
 * About Section - Page 2: "Which parts can he help you with?"
 * Shows help areas and CV download link
 */
const AboutHelpPage: React.FC = () => {
  return (
    <PageLayout
      title={dict.about.title}
      className="px-4 md:px-8"
    >
      <div className="space-y-8">
        {/* Which parts can he help you with? Section */}
        <section>
          <Heading level="h3" className="mb-6">
            {dict.about.help.title}
          </Heading>
          
          <div className="space-y-4">
            {dict.about.help.items.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 items-start group hover:bg-manuscript-ink hover:bg-opacity-5 p-3 rounded-sm transition-colors"
              >
                {/* Ornamental bullet */}
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="stroke-manuscript-lapis"
                  >
                    <path
                      d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z"
                      strokeWidth="1.5"
                      fill="currentColor"
                      className="fill-manuscript-lapis opacity-30 group-hover:opacity-60 transition-opacity"
                    />
                  </svg>
                </div>
                
                <BodyText size="base" className="flex-1">
                  {item}
                </BodyText>
              </div>
            ))}
          </div>
        </section>
        
        <Divider />
        
        {/* CV Download Section */}
        <section className="flex flex-col items-center gap-4 py-6">
          <BodyText size="lg" className="text-center opacity-80">
            Interested in working together?
          </BodyText>
          
          <Button
            variant="primary"
            size="lg"
            onClick={() => window.open(CV_LINK, '_blank', 'noopener,noreferrer')}
            rightIcon={
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            }
          >
            {dict.about.cvLink.text}
          </Button>
          
          <BodyText size="sm" className="opacity-60">
            PDF · Updated {new Date().getFullYear()}
          </BodyText>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutHelpPage;

