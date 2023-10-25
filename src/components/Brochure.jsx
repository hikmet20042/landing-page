import {motion} from "framer-motion";

function Brochure(){
    return(
        <section className="brochure">
        <div className="heading">
          <motion.h1 initial={{y:100}} whileInView={{y:0}} transition={{duration:1}}>Brochure with details</motion.h1>
          <motion.ul initial={{y:100}} whileInView={{y:0}} transition={{duration:1}}>
            <li><img src="https://icecube-eu-307.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3u7si.Z1xZ.H.llnxIZDIfGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0pqOJ7ucHA_EtwMuJGSSgMFBv4f6gCbqZLA2qIseVIayXohLSXtJbA3f9ifPP3C5dDm9pfTzXqRRKmtc13tindi6L_vV0FwmPIHCExhpu8GhHiI3cgeUPIKfynSC3a6v.E-"/>Lifestyle</li>
            <li><img src="https://icecube-eu-307.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3u7si.Z1xZ.H.llnxIZDIfGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0pqOJ7ucHA_EtwMuJGSSgMFBv4f6gCbqZLA2qIseVIayXohLSXtJbA3f9ifPP3C5dDm9pfTzXqRRKmtc13tindi6L_vV0FwmPIHCExhpu8GhHiI3cgeUPIKfynSC3a6v.E-"/>Gallery</li>
            <li><img src="https://icecube-eu-307.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3u7si.Z1xZ.H.llnxIZDIfGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0pqOJ7ucHA_EtwMuJGSSgMFBv4f6gCbqZLA2qIseVIayXohLSXtJbA3f9ifPP3C5dDm9pfTzXqRRKmtc13tindi6L_vV0FwmPIHCExhpu8GhHiI3cgeUPIKfynSC3a6v.E-"/>Masterplan</li>
            <li><img src="https://icecube-eu-307.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3u7si.Z1xZ.H.llnxIZDIfGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0pqOJ7ucHA_EtwMuJGSSgMFBv4f6gCbqZLA2qIseVIayXohLSXtJbA3f9ifPP3C5dDm9pfTzXqRRKmtc13tindi6L_vV0FwmPIHCExhpu8GhHiI3cgeUPIKfynSC3a6v.E-"/>Floor plans</li>
          </motion.ul>
        </div>
        <motion.form initial={{y:100}} whileInView={{y:0}} transition={{duration:1}}>
          <h1>Fill in the form</h1>
          <input type="text" placeholder="Your name"/>
          <input type="email" placeholder="Your e-mail"/>
          
          <button>Download</button>
        </motion.form>
        <motion.img initial={{y:200}} whileInView={{y:-20}} transition={{duration:1}} className="catalog" src="https://ice-eu-108964.icedrive.io/download?p=HsE.Avkgho139bzq5c6mYOu3jX21mTSgptDX2GVoQc3TcyX2iydifk7QDLGq4J2FGUx7sKuXuBvnN0o3.i0uLUrjRLoJG.Iccg8Bw1mvE0o..fbO9kt1_Xze9wLV.P._Q_Zsuev7FdzPFDt0Grf7ETU7npuGQoSmluLb_rIzzWTm9pfTzXqRRKmtc13tindirjLxpGeai25hfRQYS4gB493YZ1hBH.ld1sbMd96lrnY-"/>
      </section>
    )
}

export default Brochure;