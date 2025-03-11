import Button from "../ui/Button";
import Quote from "../ui/Quote";
import EventCard from "../ui/EventCard";
import {homeEventsData,upcomingJourneys} from "../assets/data/data";

import hbg1 from "../assets/images/hero-bg.jpg";
import hbg2 from "../assets/images/section-bg-img.jpg";
// import hbg1 from "../assets/images/hero-bg.jpg";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50dvh] md:h-[70dvh] flex items-center justify-center text-center bg-cover bg-center md:bg-fixed p-4"
        style={{ backgroundImage: `url(${hbg1})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>

        {/* Hero Content */}
        <div className=" z-1 text-white p-6 max-w-2xl animate-fade-in">
          <p className="m-4 text-xl md:text-2xl font-semibold">
            Explore the Colourful World
          </p>
          <hr className="text-pink-500 border-1 w-25 m-auto" />
          <h1 className="text-5xl md:text-6xl m-4 font-extrabold tracking-wide">
            A Wonderful Gift
          </h1>
          <Button> Learn more</Button>
        </div>
      </section>

      {/* Dummy Content for Scrolling Effect */}
      <section className="p-4 flex flex-col items-center">
        <Quote />
        <h1 className="mt-20 mb-5 text-3xl md:text-4xl font-bold tracking-normal">
          Upcoming Events
        </h1>
        <hr className="text-pink-500 border-2 rounded-md w-25" />
        <ul className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
          {homeEventsData.map((event) => (
            <EventCard event={event} />
          ))}
        </ul>
      </section>

      <section
        className="relative h-screen flex items-center text-left bg-cover bg-center md:bg-fixed p-4"
        style={{ backgroundImage: `url(${hbg2})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-40 "></div>

        {/* Hero Content */}
        <div className="relative md:start-[50%] md:w-[50%] flex flex-col items-start z-1 text-white">
          <h1 className="my-8 text-3xl md:text-4xl font-extrabold tracking-normal">
            Explore the World
          </h1>
          <hr className="text-pink-500 border-1 w-15" />
          <p className="mt-4">
            Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
            concordi. Fert his. Recessit mentes praecipites locum caligine sui
            egens erat. Silvas caeli regna.
          </p>
          <Button>Get Started</Button>
        </div>
      </section>

      {/* Dummy Content for Scrolling Effect */}
      <section className="p-10 mt-10 text-center">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[30%] text-left flex flex-col items-start z-1">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-normal">
              Upcoming Tours & Destination
            </h1>
            <hr className="text-pink-500 my-5 border-[0.1rem] w-25" />
            <p>
              Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda
              concordi. Fert his. Recessit mentes praecipites locum caligine sui
              egens erat. Silvas caeli regna.
            </p>
            <Button>Get Started</Button>
          </div>
          <div className="md:w-[70%] flex flex-col gap-3 md:grid md:grid-cols-2 md:grid-rows-2">
            {upcomingJourneys.map((imageUrl) => (
              <img src={imageUrl} alt="hiking.png"/>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
