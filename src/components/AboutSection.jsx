
import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Frontend Developer with 1.5+ Years of Experience
            </h3>

            <p className="text-muted-foreground">
              I’m a frontend developer with strong experience in building
              responsive, high-performance web apps using <strong>React.js</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>. I’ve worked across multiple real-world projects, collaborating closely with teams and applying modern frontend best practices. I also have a working knowledge of backend tools like <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
            </p>

            <p className="text-muted-foreground">
              Currently, I am contributing as a Junior Frontend Developer, where I continue to enhance my skills and build scalable, maintainable user interfaces.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Kredmint Technology Pvt Ltd</h4>
                  <p className="text-muted-foreground">
                    Junior Frontend Developer (Aug 2024 – Present). Building scalable frontend systems using React, Next.js, TypeScript, and Tailwind CSS. Actively contributing to multiple large-scale projects.
                  </p>
                </div>
              </div>
            </div>
          

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Beesolver Technology Pvt Ltd</h4>
                  <p className="text-muted-foreground">
                    Frontend Developer (Jul 2023 – Aug 2024). Worked on real-world projects using React, Tailwind CSS, and integrated APIs to build and maintain dynamic UIs.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Netgains Pvt Ltd</h4>
                  <p className="text-muted-foreground">
                    Web Development Intern (Mar 2023 – Jun 2023). Gained hands-on experience with frontend technologies, built UI components, and worked on live web projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
