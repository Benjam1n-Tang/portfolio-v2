import React from "react";

const Hero = () => {
  return (
    <div className="page bg-primary flex justify-center">
      <div className="flex flex-col gap-1 pt-10">
        <h3 className="text-secondary pl-2 font-mono text-3xl">
          Hello, I&apos;m
        </h3>
        <h1 className="uppercase text-[12rem] text-primary-foreground font-red-hat-display font-bold leading-none tracking-tighter text-center">
          Benjamin Tang
        </h1>
        <h3 className="text-5xl text-primary-foreground font-mono leading-20 tracking-[0.2rem] text-center">Computer Science Undergraduate</h3>
      </div>
    </div>
  );
};

export default Hero;
