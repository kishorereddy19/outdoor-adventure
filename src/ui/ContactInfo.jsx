function ContactInfo() {
  return (
    <div className=" flex-grow-1 space-y-3">
      <h1 className="text-4xl font-semibold"> Contact Info</h1>
      <div className="space-y-1">
        <p className="font-semibold text-xl">Address</p>
        <p>123 Fifth Avenue, NY 10160, New York, USA</p>
      </div>
      <div className="space-y-1">
        <p className="font-semibold">Email Us</p>
        <p>contact@example.com</p>
      </div>
      <div className="space-y-1">
        <p className="font-semibold">Call Us</p>
        <p>800-123-456</p>
      </div>
      <div className="space-y-3 ">
        <p className="font-semibold">Follow Us</p>
        <div className="space-x-2">
          <span className="bg-pink-500 p-2 rounded-3xl">😀</span>
          <span className="bg-pink-500 p-2 rounded-3xl">😊</span>
          <span className="bg-pink-500 p-2 rounded-3xl">🤣</span>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
