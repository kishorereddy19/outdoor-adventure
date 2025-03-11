import ContactForm from "../ui/ContactForm";
import ContactInfo from "../ui/ContactInfo";

function Contact() {
  return (
    <div>
      <section
        className="relative h-[50dvh] lg:h-[70dvh] flex items-center justify-center px-6 py-8"
        style={{ background: "url('src/assets/about-bg-2.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <p className="text-white font-semibold text-5xl tracking-wide z-1">
          Contact Us
        </p>
      </section>
      <div className="px-6 py-8 2xl:mx-[12%] flex flex-col justify-center gap-10 md:flex-row">
        <ContactForm />
        <ContactInfo/>
      </div>
    </div>
  );
}

export default Contact;
