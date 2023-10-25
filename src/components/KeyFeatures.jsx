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
            <img src="https://icecube-eu-307.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc1P4PqFoF.dJjBzu3ZXL35hGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0ocsCJXrMJAvr7imQARFrpmde6k.Q4xZR1ls9p_T1t3XBFy0GpxVe7okbPzwYoUN.7m9pfTzXqRRKmtc13tindiXIBTXZtJNVCr15Xtso3ClAeVG1k2eyIx0NLNyzOQndk-" alt="feature1" />
            swimming pools
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default KeyFeatures;
