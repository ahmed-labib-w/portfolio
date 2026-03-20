const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col min-h-[70vh] min-w-full items-center justify-center"
    >
      <h1 className="text-center text-5xl md:text-7xl mb-8">
        <span className="bg-gradient-to-r from-indigo-500 to to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </span>
      </h1>

      <p className="text-center text-lg font-semibold text-gray-500">
        Want to reach out? Please send an Email by clicking on this button.
      </p>
      <a
        href="mailto:ahmed.labib.w@gmail.com"
        className="p-[3px] relative mt-7"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          Contact Me
        </div>
      </a>
    </div>
  );
};

export default Contact;
