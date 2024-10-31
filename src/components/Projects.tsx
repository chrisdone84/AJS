import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-background text-textSecondary">
      <h2 className="text-3xl font-bold mb-8">Recent Projects</h2>
      <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <img src="/path-to-project-image.jpg" alt="Morris Meadows" className="w-full h-64 object-cover" />
        <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-textPrimary p-4">
          <h3 className="text-2xl font-semibold">Morris Meadows</h3>
          <p className="text-lg">Location: Netherthor, Liverpool</p>
          <p className="text-lg">Sector: New Build</p>
          <a href="#" className="mt-2 inline-block bg-primary text-secondary py-2 px-4 rounded hover:bg-secondary hover:text-primary">View Project</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
