"use client";

import Link from "next/link";

interface RepoData {
  title: string;
  description: string;
  date: string;
  tags: string[];
  repo: string;
  link: string;
}

interface ProjectCardProps {
  project: RepoData;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div
      key={project.repo}
      className="p-4 rounded-none border-black border-1 flex flex-col justify-between"
    >
      <div>
        <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
        <p className="text-sm text-muted-foreground mb-2">{project.date}</p>
        <p className="text-sm mb-2">{project.description}</p>
        {project.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="bg-gray-200 dark:bg-gray-700 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded transition"
      >
        Open Repo
      </Link>
    </div>
  );
};

export default ProjectCard;
