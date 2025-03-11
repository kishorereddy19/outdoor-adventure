
function About() {
  return (
    <div>
      <section
        className="relative h-[50dvh] lg:h-[70dvh] bg-center bg-cover flex items-center justify-center"
        style={{ backgroundImage: "url('src/assets/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-1 text-white text-5xl font-bold">
          <p>Who We Are?</p>
        </div>
      </section>
      <section className="px-6 py-10 2xl:mx-[12%] text-center">
        <div className="flex flex-col [&>*]:flex-1 md:flex-row gap-8">
          <div className=" text-left flex flex-col items-start z-1 space-y-5">
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-normal">
              Our MissioN
            </h1>
            <hr className="text-pink-500 border-[0.1rem] w-25" />
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              adipiscing elit.
            </p>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div>
            <img src="src\assets\outdoor-image-02.jpg" className="w-[100%] aspect-[3/2]"></img>
          </div>
        </div>

        <div className="flex flex-col [&>*]:flex-1 md:flex-row gap-8 text-left py-10">
          <div className=" flex flex-col items-start z-1 space-y-5">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-normal">
              Extraordinary Experiences
            </h1>
            <hr className="text-pink-500 border-[0.1rem] w-25" />
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              adipiscing elit.
            </p>
            <p>
              Click edit button to change this text. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut elit tellus, luctus nec
              ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className=" flex flex-col items-start z-1 space-y-5">
            <h1 className="text-2xl md:text-3xl font-semibold tracking-normal">
              Our Core Values
            </h1>
            <hr className="text-pink-500 border-[0.1rem] w-25" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <ul>
              <li>Locavit liberioris possedit</li>
              <li>Diremit mundi mare undae</li>
              <li>Spectent tonitrua mutastis</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
