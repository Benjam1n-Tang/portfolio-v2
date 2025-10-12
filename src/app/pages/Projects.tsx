"use client";

import ProjectCard from "@/components/layout/ProjectCard";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface GitHubRepo {
  name: string;
  description: string | null;
  created_at: string;
  html_url: string;
  fork: boolean;
  topics: string[];
  language?: string | null;
}

interface RepoData {
  title: string;
  description: string;
  date: string;
  tags: string[];
  repo: string;
  link: string;
}

const Projects = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [projects, setProjects] = useState<RepoData[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/Benjam1n-Tang/repos",
          {
            headers: {
              Accept: "application/vnd.github.mercy-preview+json",
            },
          }
        );

        if (!res.ok) throw new Error("Failed to fetch repositories");

        const data: GitHubRepo[] = await res.json();

        const repos: RepoData[] = data
          .filter((repo) => repo.description && repo.description.trim() !== "")
          .filter((repo) => !repo.fork)
          .sort(
            (a, b) =>
              new Date(b.created_at).getTime() -
              new Date(a.created_at).getTime()
          )
          .map((repo) => ({
            title: repo.name,
            description: repo.description ?? "",
            date: new Date(repo.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }),
            tags:
              repo.topics.length > 0
                ? repo.topics
                : [repo.language ?? "Unknown"],
            repo: repo.name,
            link: repo.html_url,
          }));

        setProjects(repos);
        const pageCount = Math.ceil(repos.length / 3);
        setTotalPages(pageCount);
        setCurrentPage(1);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    if (!carouselApi) return;

    const handleSelect = () => {
      const selectedIndex = carouselApi.selectedScrollSnap();
      setCurrentPage(selectedIndex + 1);
    };

    carouselApi.on("select", handleSelect);

    return () => {
      carouselApi.off("select", handleSelect);
    };
  }, [carouselApi]);

  return (
    <div
      id="projects"
      className="page flex flex-col py-24 items-center gap-18"
    >
      <div className="flex flex-col lg:gap-2 gap-4">
        <h3 className="page_header">My Projects</h3>
        <h5 className="font-poppins tracking-wide text-base lg:text-xl text-center">
          Browse through my GitHub repositories.
        </h5>
      </div>

      <Carousel className="flex flex-col m-0 w-full" setApi={setCarouselApi}>
        <CarouselContent className="m-0 w-full">
          {projects.length > 0 &&
            projects
              .reduce((rows: RepoData[][], project, index) => {
                if (index % 3 === 0) rows.push([]);
                rows[rows.length - 1].push(project);
                return rows;
              }, [])
              .map((row, rowIndex) => (
                <CarouselItem key={rowIndex} className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {row.map((project) => (
                      <ProjectCard key={project.repo} project={project} />
                    ))}
                  </div>
                </CarouselItem>
              ))}
        </CarouselContent>

        <div className="flex justify-center items-center gap-4 mt-6">
          <CarouselPrevious
            className="translate-y-0 relative rounded-none border border-foreground/20"
            onClick={() => {
              const newPage = Math.max(currentPage - 1, 1);
              carouselApi?.scrollTo(newPage - 1);
            }}
          />
          <p className="text-sm text-muted-foreground">
            {currentPage} of {totalPages}
          </p>
          <CarouselNext
            className="translate-y-0 relative rounded-none border border-foreground/20"
            onClick={() => {
              const newPage = Math.min(currentPage + 1, totalPages);
              carouselApi?.scrollTo(newPage - 1);
            }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
