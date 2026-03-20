import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-8 flex min-h-screen w-full items-center justify-center py-20 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-6 text-white">
        {/* pfp */}
        <motion.img
          src="/public/avatar.png"
          alt="Ahmed Nasser"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-lg shadow-purple-500/30"
        />

        <div className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.1 }}
            className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl md:text-6xl font-semibold transition-all duration-300 hover:-translate-y-1 cursor-default"
          >
            Ahmed Nasser
          </motion.h1>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-3"
          >
            <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-3xl">
              Software Developer
            </h3>
            <p className="text-sm md:text-base text-gray-400 text-pretty">
              Hi, I'm Ahmed — a Computer Science graduate exploring software
              development across modern web technologies, with hands-on
              experience in React and API-driven applications. applications with
              React & Next.js. Based In{" "}
              <em className="font-bold text-white">Giza, Egypt</em>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
