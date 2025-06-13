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
    <div className="w-full max-w-[670px] flex flex-col gap-3">
      <div className="w-full h-[453px] bg-gray-300 rounded-sm"></div>
      <div className="text-black text-[15px] font-jost uppercase leading-3">
        {title}
      </div>
      <div className="text-black/70 text-[15px] font-jost leading-3">
        {description}
      </div>
    </div>
  );
};

const ScarlartDesign: React.FC = () => {
  return (
    <div className="bg-white font-jost mx-[0px] size-auto px-[0px]">
      {/* Header */}
      <header className="w-full px-8 pt-6 pb-4 sticky fixed">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="h-[38px] flex items-center">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2yMHMbRSBSi0gQWZrzj0zXGRSwQ-1749821218878-node-18%3A33-1749821218302.png"
              alt="Logo"
              className="h-[38px] w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">
            <span className="text-black/70 text-[15px] font-jost uppercase leading-snug">
              Work
            </span>
            <span className="text-black text-[15px] font-jost uppercase leading-snug">
              Contact
            </span>
            <span className="text-black text-[15px] font-jost uppercase leading-snug">
              eCommerce UI theme
            </span>
          </nav>

          {/* Contact Info */}
          <div className="w-[250px] flex flex-col items-end gap-3">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0px_0px_5px_0px_rgba(23,241,110,0.58)]"></div>
              <span className="text-black/70 text-[15px] font-jost leading-[18px]">
                Availability: Open to work
              </span>
            </div>
            <span className="text-black text-[15px] font-jost underline leading-[18px]">
              scarlat.den@gmail.com
            </span>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="px-8 pb-0 ">
        {/* Project Grid Row 1 */}
        <section className="w-full mb-[165px] ml-[0px] mt-[165px] mr-[0px] mx-[0px] sticky">
          <div className="flex justify-between items-start">
            {/* Left Content */}
            <div className="flex flex-col gap-9">
              <h1 className="text-black text-[74px] font-jost leading-[88px] tracking-[-1px]">
                Scarlat Design
              </h1>
              <div className="flex items-start gap-6 rounded-[32px]">
                <div className="w-[67px] h-[67px] bg-gray-300 rounded-full flex-shrink-0"></div>
                <p className="text-black/75 text-[15px] font-jost leading-snug max-w-[500px]">
                  I'm Denys Nesmeian. I provide full-cycle web design services
                  from UX Research to UX/UI Test and Support. I help businesses
                  improve their digital brand design.
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="pr-2 flex flex-col gap-4">
              <h3 className="text-black/60 text-sm font-jost uppercase leading-[19px]">
                SERVICES
              </h3>
              <div className="text-black text-sm font-jost leading-[21px]">
                Design strategy
              </div>
              <div className="text-black text-sm font-jost leading-[21px]">
                Design strategy
              </div>
              <div className="text-black text-sm font-jost leading-[21px]">
                Design strategy
              </div>
              <div className="text-black text-sm font-jost leading-[21px]">
                Design strategy
              </div>
              <div className="text-black text-sm font-jost leading-[21px]">
                Design strategy
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mx-auto mb-[165px] max-w-[auto]">
          <div className="grid grid-cols-2 gap-8">
            <ProjectCard />
            <ProjectCard className="w-[100%]" />
          </div>
        </section>
        {/* Project Grid Row 2 */}
        <section className="w-full mx-auto mb-[165px] max-w-[100%]">
          <div className="grid grid-cols-2 gap-8">
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        {/* Hero Section */}
        {/* Project Grid Row 3 */}
        <section className="w-full max-w-[1372px] mx-auto mb-[165px]">
          <div className="grid grid-cols-2 gap-8">
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        {/* Contact Section */}
        <section className="w-full max-w-[1372px] mx-auto mb-[165px]">
          <div className="text-center px-[367px]">
            <h2 className="text-black text-[64px] font-jost leading-[70px] tracking-[-1px] mb-6">
              Work with me—write to
            </h2>
            <a
              href="mailto:scarlat.den@gmail.com"
              className="text-black text-[64px] font-jost underline leading-[70px] tracking-[-1px]"
            >
              scarlat.den@gmail.com
            </a>
          </div>
        </section>
        {/* Social Icons */}
        <section className="w-full flex justify-center">
          <div className="flex items-center gap-32">
            <img
              src="https://storage.googleapis.com/tempo-public-images/figma-exports%2Fuser_2yMHMbRSBSi0gQWZrzj0zXGRSwQ-1749821219748-node-18%3A86-1749821219305.png"
              alt="Social Icons"
              className="w-auto h-6"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default ScarlartDesign;
