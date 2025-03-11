import EventCard from "../ui/EventCard";
import {eventsData} from "../assets/data/data";
import servicesBg from '../assets/images/services-bg.jpg';

function Services() {
  return (
    <div className="">
      <section
        className="bg-cover bg-center relative h-[50dvh] lg:h-[70dvh] flex items-center justify-center"
        style={{ background: `url(${servicesBg})`}}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-1 text-white font-semibold text-5xl tracking-wide">
          Services
        </div>
      </section>
      <section className="px-6 py-8 2xl:mx-[12%] flex flex-col gap-10">
        <div className="text-center flex flex-col items-center gap-5">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-normal">
            It's Time to Start Your Adventures
          </h1>
          <hr className="text-pink-500 border-[0.1rem] w-25 m-auto" />
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            adipiscing elit.
          </p>
          <p>
            Click edit button to change this text. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
            mattis, pulvinar dapibus leo.
          </p>
        </div>
        <ul className="grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2">
          {eventsData.map((event) => (
            <EventCard event={event} shouldContainLink={false} />
          ))}
        </ul>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="space-y-5 p-4">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              Why Outdoor Adventure
            </h1>
            <hr className="text-pink-500 border-[0.1rem] w-25" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ul>
              <li>Experience: Locavit liberioris possedit</li>
              <li>Reputation: Diremit mundi mare undae</li>
              <li>Guide Experience: Spectent tonitrua mutastis</li>
            </ul>
          </div>
          <div className="space-y-5 p-4">
            <h1 className="text-3xl md:text-4xl font-extrabold">
              What You Get
            </h1>
            <hr className="text-pink-500 border-[0.1rem] w-25" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ol>
              <li>Private Hike: Locavit liberioris possedit</li>
              <li>Transportation: Diremit mundi mare undae</li>
              <li>Great Facilities: Spectent tonitrua mutastis</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
