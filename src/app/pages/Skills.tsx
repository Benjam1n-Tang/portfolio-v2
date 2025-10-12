import { skills } from "@/constants";

const Skills = () => {
  return (
    <div
      id="skills"
      className="page bg-primary text-primary-foreground flex flex-col gap-18"
    >
      <div className="flex flex-col lg:gap-2 gap-4">
        <h3 className="page_header text-primary-foreground">My Skills</h3>{" "}
        <h5 className="font-poppins tracking-wide text-base lg:text-xl text-center text-primary-foreground">
          From frontend to backend, here are the technologies I’m most familiar
          with and confident using.
        </h5>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h4 className="text-4xl font-inter-tight font-semibold uppercase">
            Languages
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.languages.map((item) => (
              <div key={item.name} className="bg-[#24283b] text-secondary">
                <div className="flex flex-row justify-center gap-2 items-center py-2 px-6">
                  <p className="font-inter-tight text-lg tracking-wider">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-4xl font-inter-tight font-semibold uppercase">
            Frontend
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.frontend.map((item) => (
              <div key={item.name} className="bg-[#24283b] text-secondary">
                <div className="flex flex-row justify-center gap-2 items-center py-2 px-6">
                  <p className="font-inter-tight text-lg tracking-wider">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-4xl font-inter-tight font-semibold uppercase">
            Backend
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.backend.map((item) => (
              <div key={item.name} className="bg-[#24283b] text-secondary">
                <div className="flex flex-row justify-center gap-2 items-center py-2 px-6">
                  <p className="font-inter-tight text-lg tracking-wider">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h4 className="text-4xl font-inter-tight font-semibold uppercase">
            Other
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {skills.other.map((item) => (
              <div key={item.name} className="bg-[#24283b] text-secondary">
                <div className="flex flex-row justify-center gap-2 items-center py-2 px-6">
                  <p className="font-inter-tight text-lg tracking-wider">
                    {item.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
