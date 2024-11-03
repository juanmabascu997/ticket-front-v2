import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "@/components/Body";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="z-10"
      >
        <Navbar />
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="hidden"
        animate="visible"
        className="flex-grow"
      >
        <Body />
      </motion.div>

      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="z-10"
      >
        <Footer />
      </motion.div>
    </div>
  );
}
