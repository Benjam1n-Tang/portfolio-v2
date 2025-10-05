import React from "react";

const Hero = () => {
  return (
    <div className="page bg-primary flex justify-center">
      <div className="flex flex-col gap-1">
        <h3 className="text-secondary font-mono text-2xl"> Hello, Im</h3>
        <h1 className="uppercase font-sans text-8xl font-semibold text-primary-foreground">
          {" "}
          Benjamin Tang
        </h1>
      </div>
    </div>
  );
};

export default Hero;
