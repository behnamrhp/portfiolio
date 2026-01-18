import React from 'react';
import { Heading, BodyText } from '../../atoms/Typography';
import PageLayout from '../../organisms/PageLayout';
import { dict, getYearsOfExperience } from '@/input';

/**
 * About Section - Page 1: "Who is he?"
 * Shows the bio/introduction content
 */
const AboutWhoPage: React.FC = () => {
  // Extract "software engineer" for bold emphasis
  return (
    <PageLayout
      title={dict.about.title}
      className="px-4 md:px-8"
    >
      <div className="space-y-6">
        <section>
          <Heading level="h3" className="mb-8">
            {dict.about.whoIsHe.title}
          </Heading>
          
          <BodyText className="leading-relaxed">
            
<strong className="font-bold text-manuscript-lapis">
   Behnam Rahimpour
  </strong>,  a Persian <strong className="font-bold text-manuscript-lapis">Software Engineer</strong>, started his career as a musician, earning national awards in classical music in his early twenties. During his military service, he transitioned into software engineering.

  <br/>
<br/>
Now he has over <strong className="font-bold text-manuscript-lapis">{getYearsOfExperience()}</strong> years of experience in building and optimizing applications across e-commerce,
education, cloud-based solutions, ISP, and smart home industries. 
<br/>
<br/>
He has experience in developing and leading several international agile-based cross-functional teams during his career in all phases of software development, from business requirements to technical and system design, development, <strong className="font-bold text-manuscript-lapis">scaling</strong>, <strong className="font-bold text-manuscript-lapis"> tests</strong>, <strong className="font-bold text-manuscript-lapis"> maintenance</strong>, <strong className="font-bold text-manuscript-lapis"> observability</strong>, and <strong className="font-bold text-manuscript-lapis">infrastructure</strong> of software.
<br/>
<br/>
His main philosophy about success in software teams is having <strong className="font-bold text-manuscript-lapis">ownership</strong> by defining <strong className="font-bold text-manuscript-lapis">automated learning loops</strong> and leveraging <strong className="font-bold text-manuscript-lapis">AI</strong> to automate repetitive processes and achieve better quality.
          </BodyText>
        </section>
        
        {/* Connect Section */}
        <section onTouchStart={(e) => {
          e.stopPropagation();
          e.preventDefault();
        }} className="mt-8 pt-6 border-t border-manuscript-ink border-opacity-20">
          <Heading level="h4" className="mb-4 text-center">
            Connect with him
          </Heading>
          
          <div className="flex justify-center gap-6">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/behnam-rahimpour-18b13a210"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-sm border border-manuscript-ink border-opacity-20 hover:border-manuscript-lapis hover:bg-manuscript-lapis hover:bg-opacity-10 transition-all"
              title="Connect on LinkedIn"
            >
              <img 
                src="/assets/images/logos/linkedin.webp" 
                alt="LinkedIn" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
              />
              <BodyText size="sm" className="text-center">
                LinkedIn
              </BodyText>
            </a>
            
            {/* GitHub */}
            <a
              href="https://github.com/behnamrhp"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-sm border border-manuscript-ink border-opacity-20 hover:border-manuscript-lapis hover:bg-manuscript-lapis hover:bg-opacity-10 transition-all"
              title="View GitHub Profile"
            >
              <img 
                src="/assets/images/logos/github.webp" 
                alt="GitHub" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
              />
              <BodyText size="sm" className="text-center">
                GitHub
              </BodyText>
            </a>
            
            {/* Email */}
            <a
              href="mailto:behnamrahimpour74@gmail.com"
              className="group flex flex-col items-center gap-2 p-4 rounded-sm border border-manuscript-ink border-opacity-20 hover:border-manuscript-lapis hover:bg-manuscript-lapis hover:bg-opacity-10 transition-all"
              title="Send Email"
            >
              <img 
                src="/assets/images/logos/gmail.webp" 
                alt="Email" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
              />
              <BodyText size="sm" className="text-center">
                Email
              </BodyText>
            </a>
            
            {/* Telegram */}
            <a
              href="https://t.me/BRHP74"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 p-4 rounded-sm border border-manuscript-ink border-opacity-20 hover:border-manuscript-lapis hover:bg-manuscript-lapis hover:bg-opacity-10 transition-all"
              title="Message on Telegram"
            >
              <img 
                src="/assets/images/logos/telegram.webp" 
                alt="Telegram" 
                className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
              />
              <BodyText size="sm" className="text-center">
                Telegram
              </BodyText>
            </a>
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

export default AboutWhoPage;

