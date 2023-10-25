import {motion} from "framer-motion";
function AboutUs(){
    return (
        <section className="about-us">
        <motion.div initial={ {transform: "translateX(-300px)"}} whileInView={{transform:"translateX(0)"}} transition={{duration:"2"}} className="right-side">
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3x6x.8YFXXQpPaOGlYtQ_xGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0rzmnxduGHLjW2t40dv3TBhCGcBRpSm5uWw4SG0PWP_Eo6jGd1ILci6qA2CRu74XvLm9pfTzXqRRKmtc13tindiOp5isUklqoe5woIN3fNKYQ--" className="images image01" />
          <img src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc1mGMjlajFtRTlsxPn534U4GUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0oHTzaTrWRAp2G.dNEZtT9LwDAdFWccSohHfyR43pkERPeeIS0PZL2Bzb61XlYYzwXm9pfTzXqRRKmtc13tindi5ueM4b91Q5DrOhU4GKKkKZUkz1mvpNrCwoaK4QnzDhs-" className="images image02" />
          <p className="experience">
            <span>27</span> years experience
          </p>
        </motion.div>
        <div className="left-side" >
          <motion.div className="heading" initial={ {transform: "translateX(300px)"}} whileInView={{transform:"translateX(0)"}} transition={{duration:"2",transition:{delay:0.2}}}>
            <h4 className="title1">about us</h4>
            <h1 className="title2">reasons to choose</h1>
          </motion.div>
          <motion.div className="text-content" initial={ {transform: "translateX(500px)"}} whileInView={{transform:"translateX(0)"}} transition={{duration:"2"}} >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
              sapiente alias, eligendi mollitia voluptatibus corrupti ipsam
              placeat impedit asperiores obcaecati provident quas explicabo
              nostrum. Iure velit inventore pariatur mollitia explicabo ipsa
              perferendis quaerat ab molestiae asperiores rem enim similique
              quibusdam totam suscipit quos minus assumenda quisquam dolorem,
              tempora eaque expedita voluptates. Expedita delectus fuga deserunt
              quo impedit dicta corrupti, totam, recusandae facere dignissimos
              aliquam doloribus animi velit mollitia in eos nisi tempora vitae
              ullam illo assumenda! Provident et nisi nesciunt repudiandae
              praesentium aut consequuntur repellendus laboriosam rerum fugiat
              fugit, doloremque quae unde, animi temporibus facere inventore
              dolorem blanditiis, cupiditate ex!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
              repellat tempora sint. Beatae iste ipsum dicta maiores, nulla
              cumque! Delectus vero numquam nisi facere ex deleniti inventore
              corrupti, voluptatum enim.
            </p>
          </motion.div>
          <motion.div className="learn-more" initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:"1"}}>
            <a href="#">Learn More</a>
          </motion.div>
        </div>
      </section>
    )
}



export default AboutUs;