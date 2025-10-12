import { Headshot } from "@/assets";
import Image from "next/image";

const About = () => {
  const paragraphs = [
    "My name is Benjamin Tang. I was born and raised in New York City. I am currently an undergraduate student at Stony Brook University where I am studying for my bachelors in computer science.",
    "My expereiences include my personal and school projects, a tutoring program called the BigSib Organization for tutoring python and java, and my internship at the Selective Corporate Internship Program. These experiences have helped me develop strong teamwork, problem-solving, and communication skills, and have deepened my interest in building practical, user-focused applications.",
    "I am actively seeking opportunies to contribute to real-world projects. I am eager to apply my skills and continue to grow as a developer. Feel free to explore my portfolio and get in touch through my socials."
  ];

  return (
    <div
      id="about"
      className="page bg-primary text-primary-foreground flex flex-col gap-18"
    >
      <div className="flex flex-col lg:gap-2 gap-4">
        <h3 className="page_header text-primary-foreground">About Me</h3>{" "}
        <h5 className="font-poppins tracking-wide text-base lg:text-xl text-center text-primary-foreground">
          A brief overview of my background, values, and the skills and
          experiences that define my approach to development.
        </h5>
      </div>
      <div className="flex lg:flex-row gap-20 lg:gap-10 flex-col-reverse justify-center">
        <aside className="flex lg:w-150 w-full justify-center">
            <Image src={Headshot} alt="headshot" className="h-auto bg-secondary w-80" />
        </aside>
        <aside className="flex flex-col text-justify gap-8 lg:w-150 w-full font-poppins tracking-wide">
          {paragraphs.map((p, index) => (
            <p key={index}>{p}</p>
          ))}
        </aside>
      </div>
    </div>
  );
};

export default About;
