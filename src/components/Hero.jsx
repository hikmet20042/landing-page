import {motion} from "framer-motion";

function Hero(){
    return (
        <div className="hero">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>

        <nav>
          <div className="hamburger">
            <img src="src\assets\menu.png" alt="hamburger-icon" /> Menu
          </div>
          <div className="logo">
            <img src="src\assets\logo.png" alt="logo" />
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
            <img src="src\assets\welcome-image.jpg" alt="welcome-image" />
          </motion.div>
        </section>
      </div>
    )
}

export default Hero;