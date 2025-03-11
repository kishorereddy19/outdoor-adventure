import ImageConveyorBelt from "../ui/ImageConveyorBelt";
import AdventureCard from "../ui/AdventureCard";

const adventures = [
  {
    type: "Adventure",
    title: "Water Sports",
    description:
      "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
    images: [
      "src\\assets\\water-sports-01.jpg",
      "src\\assets\\water-sports-02.jpg",
      "src\\assets\\water-sports-03.jpg",
      "src\\assets\\water-sports-04.jpg",
    ],
  },
  {
    type: "Snow Adventure",
    title: "Winter Sports",
    description:
      "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
    images: [
      "src\\assets\\winter-sports-01.jpg",
      "src\\assets\\winter-sports-02.jpg",
      "src\\assets\\winter-sports-03.jpg",
      "src\\assets\\winter-sports-04.jpg",
    ],
  },
  {
    type: "Forest Tours",
    title: "Camping",
    description:
      "Interdum exercitation penatibus, praesentium facilisi accusamus fermentum, sagittis.",
    images: [
      "src\\assets\\camp-1.jpg",
      "src\\assets\\camp-2.jpg",
      "src\\assets\\camp-3.jpg",
      "src\\assets\\camp-4.jpg",
    ],
  },
];

function Projects() {
  return (
    <div>
      <section
        className="relative h-[50dvh] lg:h-[70dvh] flex items-center justify-center px-6 py-8"
        style={{ background: "url('src/assets/project-background.jpg')" }}
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
