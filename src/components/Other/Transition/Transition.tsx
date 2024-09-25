import { motion } from "framer-motion";

import { ChildrenInterface } from "@/interfaces/ChildrenInterface";

export const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Transition = ({ children }: ChildrenInterface) => {

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
        className='bg-background'
      >
        {children}
      </motion.main>
    </>
  );
};

export default Transition;
