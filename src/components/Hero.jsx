import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useState } from "react";
import { useEffect } from "react";

const Hero = () => {
  const texts = ["Anwar SY", "Web Developer", "Freelancer"]; // Teks yang akan ditampilkan dengan efek mesin ketik
  const [count, setCount] = useState(0);
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const type = () => {
      if (count === texts.length) {
        setCount(0);
      }
      const setCurrentText=(
        texts[count].slice(0, index) + "|" // Teks yang sedang ditampilkan
      );
      if (currentText.length === texts[count].length) {
        setCount(count + 1);
        setIndex(0);
      }
      if (index < texts[count].length) {
        setIndex(index + 1);
      }
    };

    const typingInterval = setInterval(type, 200); // Waktu penundaan antara setiap karakter yang "diketik"

    return () => clearInterval(typingInterval);
  }, [count, index, currentText, texts]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{currentText}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
            I develop 3D visuals, user <br className="sm:block hidden" />
            interfaces and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
