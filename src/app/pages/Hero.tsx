import React from "react";

const Hero = () => {
  return (
    <div className="page flex items-center flex-col gap-20 min-h-[100dvh]">
      <div className="flex flex-col gap-1 pt-10">
        <h3 className="text-primary tracking-wide pl-2 font-mono lg:text-4xl text-xl">
          Hello, I&apos;m
        </h3>
        <h1 className="uppercase text-secondary-foreground font-inter-tight font-extrabold leading-none text-center lg:text-[170px] text-7xl">
          Benjamin Tang
        </h1>
        <h3 className="lg:text-4xl text-xl text-secondary-foreground font-poppins tracking-[0.2rem] text-center leading-none uppercase">
          Computer Science Undergraduate
        </h3>
      </div>
      <div>
        <h5 className="text-primary font-poppins uppercase tracking-wider max-w-100 text-center"> I am a computer science student at Stony brook University, with a strong interest in software developmenet and problem-solving. Based in new york city, I am passionate about building efficient, user-focused applications.</h5>
      </div>
    </div>
  );
};

export default Hero;
