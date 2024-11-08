import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div id="projects">
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h1 className="projects-title">My Previous Projects</h1>
            <p className="projects-description">
              Here is a showcase of some projects I have built, ranging from responsive websites to
              dynamic web applications. Each project reflects my commitment to clean code, functional
              design, and attention to detail. Explore my work below to see how I bring ideas to life on the web.
            </p>
          </div>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  src="/accets/projects/portfolio.png"
                  width={500}
                  height={500}
                />
                <div className="project-overlay">
                  <h2 className="project-category">My Previous Portfolio Website</h2>
                  <h1 className="project-title">Portfolio</h1>
                  <p className="project-summary">
                    I created this project for my personal use. It was a fun project to work on.
                  </p>
                  <Link target="_blank" href="https://zehrascripter.github.io/portfolio-live-new/">
                    <p className="project-link">View project</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  src="/accets/projects/shoping.png"
                  width={500}
                  height={500}
                />
                <div className="project-overlay">
                  <h2 className="project-category">E-commerce Website</h2>
                  <h1 className="project-title">Shopping</h1>
                  <p className="project-summary">
                    I created this project for my personal use. It was a fun project to work on.
                  </p>
                  <Link target="_blank" href="https://next-js-milestone-2-custom-css.vercel.app/">
                    <p className="project-link">View project</p>
                  </Link>
                </div>
              </div>
            </div>

            <div className="project-card">
              <div className="project-image-wrapper">
                <Image
                  alt="gallery"
                  className="project-image"
                  src="/accets/projects/smitfigma.png"
                  width={500}
                  height={500}
                />
                <div className="project-overlay">
                  <h2 className="project-category">Figma Design Website</h2>
                  <h1 className="project-title">Figma Design</h1>
                  <p className="project-summary">
                    I created this project for my personal use. It was a fun project to work on.
                  </p>
                  <Link target="_blank" href="https://fimgadesign.vercel.app/">
                    <p className="project-link">View project</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
