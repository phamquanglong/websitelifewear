import { motion } from "framer-motion";
import { useEffect, useState } from "react";

let LazyloadDiv = (props) => {
  let [arr, setArr] = useState([]);

  // useEffect(() => {
  //   setArr([1, 0.8, 0.6, 0.8, 1]);
  //   setTimeout(() => setArr([], 1000));
  // }, [arr]);

  return (
    <motion.div
      className="bg-gray-200 h-full items-center justify-center flex rounded-md h-80 mx-4"
      style={{ width: 250 }}
      transition={{ duration: 0.5 }}
      animate={{
        opacity: arr,
      }}
    >
      <p className={`text-2xl text-gray-400`}>Lifewear</p>
    </motion.div>
  );
};

export default LazyloadDiv;
