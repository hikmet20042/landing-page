import { motion } from "framer-motion";
import { useState } from "react";
function KeyFeatures() {
  const [features, setFeatures] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section className="key-features">
      <motion.div
        className="heading"
        initial={{ transform: "translateY(-100px)" }}
        whileInView={{ transform: "translateY(0)" }}
      >
        <h1>Key features</h1>
      </motion.div>
      <div className="features">
        {features.map(() => (
          <motion.div className="feature feature-1" initial={{ transform: "translateY(-100px)" }}
          whileInView={{ transform: "translateY(0)" }} transition={{duration:"0.6"}}>
            <img src="src\assets\swimming-pool.png" alt="feature1" />
            swimming pools
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default KeyFeatures;
