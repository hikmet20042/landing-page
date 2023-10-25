import {motion} from "framer-motion";

function Brochure(){
    return(
        <section className="brochure">
        <div className="heading">
          <motion.h1 initial={{y:100}} whileInView={{y:0}} transition={{duration:1}}>Brochure with details</motion.h1>
          <motion.ul initial={{y:100}} whileInView={{y:0}} transition={{duration:1}}>
            <li><img src="src/assets/checked.png"/>Lifestyle</li>
            <li><img src="src/assets/checked.png"/>Gallery</li>
            <li><img src="src/assets/checked.png"/>Masterplan</li>
            <li><img src="src/assets/checked.png"/>Floor plans</li>
          </motion.ul>
        </div>
        <motion.form initial={{y:100}} whileInView={{y:0}} transition={{duration:1}}>
          <h1>Fill in the form</h1>
          <input type="text" placeholder="Your name"/>
          <input type="email" placeholder="Your e-mail"/>
          
          <button>Download</button>
        </motion.form>
        <motion.img initial={{y:200}} whileInView={{y:-20}} transition={{duration:1}} className="catalog" src="src/assets/Catalog.png"/>
      </section>
    )
}

export default Brochure;