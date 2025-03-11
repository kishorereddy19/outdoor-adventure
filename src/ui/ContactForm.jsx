import Button from "./Button";

function ContactForm() {
  return (
      <form className="flex flex-grow-1 flex-col gap-4 justify-center">
        <h1 className="text-3xl font-semibold">We're Ready, Let's Talk.</h1>
        <div>
          <input
            className=" bg-white w-full border border-gray-200 px-3 py-2 rounded-md"
            type="text"
            placeholder="Your name"
          ></input>
        </div>
        <div>
          <input
            className=" bg-white w-full border border-gray-200 px-3 py-2 rounded-md"
            type="text"
            placeholder="Email Address"
          ></input>
        </div>
        <div>
          <textarea
            className=" bg-white w-full border border-gray-200 px-3 py-2 rounded-md resize-none"
            type="textarea"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="items-start">
          <Button>Send Message</Button>
        </div>
      </form>
  );
}

export default ContactForm;
