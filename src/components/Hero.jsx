import {motion} from "framer-motion";

function Hero(){
    return (
        <div className="hero">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>

        <nav>
          <div className="hamburger">
            <img src="https://icecube-eu-307.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc1Ewn_rVQpSK6_lTBSF8LIVGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0pQyafQUTlx4ASWdazBUSXDHCcVaFk4KXdSxYr9GrtnK_otMtSDkfeRohz00TYjF77m9pfTzXqRRKmtc13tindiq_B5fGyoh8zMV4PLsOxm1g--" alt="hamburger-icon" /> Menu
          </div>
          <div className="logo">
            <img src="https://icecube-eu-307.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc28rYaZMfIpsTZaVFarBXkoGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0q.dA34kNreGYfjhilvY6u05corD6Il3jOh3oMmZB1xP2lhgnPi5AF2EO8ZsYhouxbm9pfTzXqRRKmtc13tindiJg3CirLcb36y_t1MWvLbDw--" alt="logo" />
          </div>
          <div className="contact">+99455-555-55-55 </div>
        </nav>
        <section className="welcome">
          <div className="quote">
            <h4>your trusted</h4>
            <h1>
              <span>Interior</span> Design Partner for Home or Office
            </h1>
            <p>get a free quote</p>
          </div>
          <motion.div initial={{x:700}} whileInView={{x:0}} transition={{duration:2}} className="welcome-image">
            <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3VsHbzSyqlb8ZLtU5PP0pIGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0oeEzr2wriE2kl8CL5YeDDwpSfrG08xdOAvBojkKn6VL.NPq8orKM_SIJ9klYlxzxbm9pfTzXqRRKmtc13tindi5keXxrJjaCEeJA.y7Vb4dsK9yRSi18lMBg4k1TO46tSVJM9Zr6TawsKGiuEJ8w4b" alt="welcome-image" />
          </motion.div>
        </section>
      </div>
    )
}

export default Hero;