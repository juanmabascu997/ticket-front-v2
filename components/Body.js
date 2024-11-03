import { signIn, signOut, useSession } from "next-auth/react";
import Carousel from "./Carousel";
import { styles } from "@/styles/styles";
import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";

const Body = () => {
  const { data: session } = useSession();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <>
      <main className="flex-grow bg-gray-100">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <Carousel />
        </motion.div>
      </main>

      <motion.div
        className="mt-10 max-w-md mx-auto p-6 rounded-lg shadow-md bg-white space-y-4 text-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUp}>
          <h2
            className={`${styles.sectionSubText} text-gray-500 font-medium uppercase tracking-wider`}
          >
            Bienvenido a la Plataforma de Eventos
          </h2>
        </motion.div>
        <motion.p
          className={`${styles.sectionHeadText} text-gray-800 font-bold`}
          variants={fadeInUp}
        >
          Inicia sesión para ver tus eventos o crear uno si eres administrador.
        </motion.p>

        {session ? (
          <motion.div variants={fadeInUp}>
            <p className="text-gray-700">Bienvenido, {session.user.name}!</p>
            <button
              onClick={() => signOut()}
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Cerrar Sesión
            </button>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => signIn("google")}
            className="fixed bottom-4 right-4 bg-[#915eff] text-white p-4 rounded-full shadow-lg z-50"
            variants={fadeInUp}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            Iniciar Sesión con Google
          </motion.button>
        )}
      </motion.div>
    </>
  );
}


export default SectionWrapper(Body, "body");
