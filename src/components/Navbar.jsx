import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-6 md:px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      {/* Logo */}
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-100 sm:opacity-60 transition-all duration-300 hover:opacity-100"
      >
        AN
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10">
        <li>
          <a href="#home" className="opacity-60 hover:opacity-100 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#tech" className="opacity-60 hover:opacity-100 transition">
            Tech
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="opacity-60 hover:opacity-100 transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="opacity-60 hover:opacity-100 transition"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Desktop Social */}
      <ul className="hidden md:flex gap-5">
        <li>
          <a
            href="https://www.linkedin.com/in/ahmed-labibb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl opacity-60 hover:text-blue-500 hover:opacity-100 transition"
          >
            <BsLinkedin />
          </a>
        </li>

        <li>
          <a
            href="https://github.com/ahmed-labib-w"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl opacity-60 hover:text-orange-400 hover:opacity-100 transition"
          >
            <BsGithub />
          </a>
        </li>
      </ul>

      {/* Mobile Icon */}
      {isOpen ? (
        <BiX
          className="block md:hidden text-4xl cursor-pointer"
          onClick={menuOpen}
        />
      ) : (
        <BiMenu
          className="block md:hidden text-4xl cursor-pointer"
          onClick={menuOpen}
        />
      )}

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col gap-10 border-l border-gray-800 bg-black/90 p-12">
          <ul className="flex flex-col gap-8">
            <li>
              <a href="#home" onClick={menuOpen}>
                Home
              </a>
            </li>
            <li>
              <a href="#tech" onClick={menuOpen}>
                Tech
              </a>
            </li>
            <li>
              <a href="#projects" onClick={menuOpen}>
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={menuOpen}>
                Contact
              </a>
            </li>
          </ul>

          <ul className="flex gap-6">
            <li>
              <a
                href="https://www.linkedin.com/in/ahmed-labibb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="text-2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/ahmed-labib-w"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
