import ImageConveyorBelt from "./ImageConveyorBelt";

function AdventureCard({ adventure }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <span>{adventure.type}</span>
        <span> <hr className="text-pink-500 border-[0.1rem] w-50" /></span>
      </div>
      <h1 className="text-4xl font-semibold py-3">{adventure.title}</h1>
      <p className="tracking-tight">{adventure.description}</p>
      <ImageConveyorBelt images={adventure.images} />
    </div>
  );
}

export default AdventureCard;
