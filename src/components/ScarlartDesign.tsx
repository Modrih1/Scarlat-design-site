import React from "react";

interface ProjectCardProps {
  title?: string;
  description?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title = "PROMUSE",
  description = "e-commerce, ux-ui design",
}) => {
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="w-full h-[280px] sm:h-[350px] lg:h-[453px] bg-gray-300 rounded-sm"></div>
      <div className="text-black text-[13px] sm:text-[15px] font-jost uppercase leading-3">
        {title}
      </div>
      <div className="text-black/70 text-[13px] sm:text-[15px] font-jost leading-3">
        {description}
      </div>
    </div>
  );
};

const ScarlartDesign: React.FC = () => {
  return (
    <div className="bg-white font-jost mx-0 size-auto px-0">
      {/* Header */}
      <header className="w-full px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-4 sticky top-0 bg-white z-50">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
          {/* Logo */}
          <div className="h-[32px] sm:h-[38px] flex items-center">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2yMHMbRSBSi0gQWZrzj0zXGRSwQ-1749821218878-node-18%3A33-1749821218302.png"
              alt="Logo"
              className="h-[32px] sm:h-[38px] w-auto"
            />
          </div>

          {/* Navigation - Hidden on mobile, shown on desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            <span className="text-black/70 text-[15px] font-jost uppercase leading-snug hover:text-black transition-colors cursor-pointer">
              Work
            </span>
            <span className="text-black text-[15px] font-jost uppercase leading-snug hover:text-black/70 transition-colors cursor-pointer">
              Contact
            </span>
            <span className="text-black text-[15px] font-jost uppercase leading-snug hover:text-black/70 transition-colors cursor-pointer">
              eCommerce UI theme
            </span>
          </nav>

          {/* Mobile Navigation */}
          <nav className="flex lg:hidden items-center gap-4 text-sm">
            <span className="text-black/70 font-jost uppercase leading-snug hover:text-black transition-colors cursor-pointer">
              Work
            </span>
            <span className="text-black font-jost uppercase leading-snug hover:text-black/70 transition-colors cursor-pointer">
              Contact
            </span>
          </nav>

          {/* Contact Info */}
          <div className="w-full lg:w-[250px] flex flex-col items-start lg:items-end gap-2 sm:gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0px_0px_5px_0px_rgba(23,241,110,0.58)]"></div>
              <span className="text-black/70 text-[13px] sm:text-[15px] font-jost leading-[18px]">
                Availability: Open to work
              </span>
            </div>
            <a 
              href="mailto:scarlat.den@gmail.com"
              className="text-black text-[13px] sm:text-[15px] font-jost underline leading-[18px] hover:text-black/70 transition-colors"
            >
              scarlat.den@gmail.com
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-8 pb-0">
        {/* Hero Section */}
        <section className="w-full mb-16 sm:mb-24 lg:mb-[165px] mt-8 sm:mt-16 lg:mt-[165px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="flex flex-col gap-6 sm:gap-9 w-full lg:w-auto">
              <h1 className="text-black text-[48px] sm:text-[60px] lg:text-[74px] font-jost leading-[56px] sm:leading-[70px] lg:leading-[88px] tracking-[-1px]">
                Scarlat Design
              </h1>
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-[32px]">
                <div className="w-[56px] h-[56px] sm:w-[67px] sm:h-[67px] bg-gray-300 rounded-full flex-shrink-0"></div>
                <p className="text-black/75 text-[14px] sm:text-[15px] font-jost leading-snug max-w-[500px]">
                  I'm Denys Nesmeian. I provide full-cycle web design services
                  from UX Research to UX/UI Test and Support. I help businesses
                  improve their digital brand design.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="w-full lg:w-auto lg:pr-2 flex flex-col gap-3 sm:gap-4">
              <h3 className="text-black/60 text-sm font-jost uppercase leading-[19px]">
                SERVICES
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 sm:gap-0">
                <div className="text-black text-sm font-jost leading-[21px] hover:text-black/70 transition-colors cursor-pointer">
                  Design strategy
                </div>
                <div className="text-black text-sm font-jost leading-[21px] hover:text-black/70 transition-colors cursor-pointer">
                  UX Research
                </div>
                <div className="text-black text-sm font-jost leading-[21px] hover:text-black/70 transition-colors cursor-pointer">
                  UI Design
                </div>
                <div className="text-black text-sm font-jost leading-[21px] hover:text-black/70 transition-colors cursor-pointer">
                  Prototyping
                </div>
                <div className="text-black text-sm font-jost leading-[21px] hover:text-black/70 transition-colors cursor-pointer">
                  User Testing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Grid Row 1 */}
        <section className="w-full mx-auto mb-16 sm:mb-24 lg:mb-[165px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

        {/* Project Grid Row 2 */}
        <section className="w-full mx-auto mb-16 sm:mb-24 lg:mb-[165px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

        {/* Project Grid Row 3 */}
        <section className="w-full mx-auto mb-16 sm:mb-24 lg:mb-[165px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full mx-auto mb-16 sm:mb-24 lg:mb-[165px]">
          <div className="text-center px-4 sm:px-8 lg:px-[367px]">
            <h2 className="text-black text-[32px] sm:text-[48px] lg:text-[64px] font-jost leading-[38px] sm:leading-[54px] lg:leading-[70px] tracking-[-1px] mb-4 sm:mb-6">
              Work with me—write to
            </h2>
            <a
              href="mailto:scarlat.den@gmail.com"
              className="text-black text-[32px] sm:text-[48px] lg:text-[64px] font-jost underline leading-[38px] sm:leading-[54px] lg:leading-[70px] tracking-[-1px] hover:text-black/70 transition-colors break-all sm:break-normal"
            >
              scarlat.den@gmail.com
            </a>
          </div>
        </section>

        {/* Social Icons */}
        <section className="w-full flex justify-center pb-8 sm:pb-12 lg:pb-16">
          <div className="flex items-center">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2yMHMbRSBSi0gQWZrzj0zXGRSwQ-1749821219748-node-18%3A86-1749821219305.png"
              alt="Social Icons"
              className="w-auto h-5 sm:h-6 hover:opacity-70 transition-opacity cursor-pointer"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ScarlartDesign;