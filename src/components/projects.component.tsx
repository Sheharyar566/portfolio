import React from 'react';
import projects from '@/data/projects.json';

const Projects = () => {

    return (
        <section id="projects" className="flex flex-col items-center justify-center min-h-screen bg-white text-secondary px-5 py-20 md:px-10 lg:px-20">
            <h2 className="text-2xl font-Roboto font-bold mb-20">Projects</h2>

            <div className="flex flex-row justify-center items-stretch flex-wrap gap-5">
                {projects.map((project, index) => {
                    const { name, content, link, skills } = project;

                    return (
                        <div key={index} className="max-w-[400px] flex border-secondary items-center border-[0.5px] border-opacity-10 flex-col p-10 rounded-lg overflow-hidden shadow-lg">
                            <h3 className="font-Roboto text-lg font-bold mb-5">{name}</h3>
                            <p dangerouslySetInnerHTML={{ __html: content }} />

                            <div className="mt-5 mb-10 self-start">
                                <strong>Skills</strong>
                                <ul>
                                    {skills.map(skill => <li className="list-disc" key={skill}>{skill}</li>)}
                                </ul>
                            </div>

                            <a href={link} className="bg-primary px-10 py-3 text-white font-Roboto rounded-md mt-auto">Link</a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Projects;