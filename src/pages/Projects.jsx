import ImageConveyorBelt from "../ui/ImageConveyorBelt";
import AdventureCard from "../ui/AdventureCard";
import { adventures } from "../assets/data/data";
import projectsBg from "../assets/images/project-background.jpg";

function Projects() {
  return (
    <div>
      <section
        className="relative h-[50dvh] lg:h-[70dvh] flex items-center justify-center px-6 py-8"
        style={{ background: `url(${projectsBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <p className="text-white font-semibold text-5xl tracking-wide z-1">
          Projects
        </p>
      </section>
      {adventures.map((adventure) => (
        <div className="px-6 py-8 2xl:mx-[12%]">
          <AdventureCard adventure={adventure} />
        </div>
      ))}
    </div>
  );
}

export default Projects;
