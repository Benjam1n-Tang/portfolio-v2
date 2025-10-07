import React from "react";

const Hero = () => {
  return (
    <div className="page bg-primary flex justify-center">
      <div className="flex flex-col gap-1 pt-10">
        <h3 className="text-secondary pl-2 font-mono text-3xl">
          Hello, I&apos;m
        </h3>
        <h1 className="uppercase text-primary-foreground font-inter-tight font-extrabold leading-none text-center text-[clamp(42px,-3.0704225352px+9.014084507vw,170px)]">
          Benjamin Tang
        </h1>
        <h3 className="text-4xl text-primary-foreground font-mono tracking-[0.2rem] text-center leading-none">Computer Science Undergraduate</h3>
      </div>
    </div>
  );
};

export default Hero;
