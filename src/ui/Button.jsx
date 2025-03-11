function Button({ children }) {
  return (
    <button className="mt-6  mb-10 inline-block px-8 py-3 bg-pink-500 text-white text-md uppercase font-semibold rounded-full hover:bg-pink-700 transition">
      {children}
    </button>
  );
}

export default Button;
