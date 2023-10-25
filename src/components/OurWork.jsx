import {motion} from "framer-motion"

function OurWork(){
    return (
        <section className="our-work">
        <div className="heading">
          <h4>our work</h4>
          <h1>Check our super awesome portfolio</h1>
        </div>
        <div className="persons">
          <div className="person person-1">
            <div className="left-side">
              <motion.img src="https://lh3.googleusercontent.com/pw/ADCreHdbtOl52NZSFdmd3FgnRSy_L3N6j9VJgybxDw22ofbKb9A9q61eCqQapMV3TqlyU7b5tKNxVILqGzfKklDsn8AHhp68GOcdxLbQSgr_I1IrXdJXD9tJudxqjjHBXDPQk3Nw_eTLjtYNJgq1F-9-r8hRqXlxpsAz2bzi9Fk-sSdWKwfa1KELqyK7Ihd6ha4kuljpB0tujagNVpNy4V_VyUqzutael7QP1N-42DyEVsTWOZWW_kZs7VVa7b0F9zGGgUh3hY4BCbUSS4IaFf3lAWqiSFa7hYF9hO2jNkxlh0DhZeK7l_Rc8uBNkfO4IGcH781WCmHGsQDjBXXm2U4dlHosMsbyJxpXlBZzNDAGp_Le-bQKhrIskcuz0QfIcgg6F0DhVmvIe7vocyGf8C0B5790bIUCW-oBqC_4Df55jDEju6LSBFIZMmPvZu8OmwojtiDqQEM6SDMKLJAYwlFPLGfwyXfkSAOJ1Y_galFqnJm6lFTT0F6q9i3YtwvoUbTa_eBNcBSwWoO0Qag4hgL9GN90GsqNtAJbJkovXOSC8HUO9Q-lTa9VGSAXBjqiFEwy8UgDSLHUOQ6R5GFaH7g1_n5P__57FpJU9_EuwJO9KMG3X4uEk5bmh3JubiSZ-qydtUY5FsTYeeei7gLfTcbZGdmnwbYTDw1Ngpv2tK-MX_R-Z1IWZEWSy0fTxa-MbhLqar5Ha93sRWV9d49h4SpVmnS1cZOUH6dwHAQRGGd2WBauvvE_0IHoA9TwoJUUDYV9R72hnWxqafepSVAVUe0lugYhrZqyDSlEKeQW1NAMJQa-SObqsSRPYxO1aPmpt3l4xtnq1__0q_4RbLCB_xHy8s_0yWira3wQw9snA6PEq5nQ2TZ19Xa8x4Vh4tcXhhwQ91KZwPZISGXsrz-_l_ccqVCLQ9SHsLny9RuxipUywktchWW8zleRzC20icdmlNbPMYX9G3TMCcIveNUtsweUjplk9cEK-cNEPjfl=w525-h689-s-no?authuser=0" initial={{x:300}} whileInView = {{x:0}} transition={{duration:"2"}} />
              <div className="frame frame-1"></div>
            </div>
            <div className="right-side">
              <motion.div className="number">01</motion.div>
              <motion.div className="full-name" initial={{y:-50}} whileInView={{y:0}} transition={{duration:0.7}}>Sarrah Williams</motion.div>
              <motion.div className="about">
                <motion.div className="text-content"  initial={{y:-50}} whileInView={{y:0}} transition={{duration:0.7}}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eum doloremque totam rerum natus placeat. Exercitationem
                    voluptatem expedita eligendi tempora voluptatum .
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate?
                  </p>
                </motion.div>
                <div className="social-media">
                  <ul>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
          <div className="person person-2">
            
            <div className="left-side">
              <motion.div className="number" >02</motion.div>
              <motion.div className="full-name" initial={{y:-50}} whileInView={{y:0}} transition={{duration:0.7}}>Sarrah Williams</motion.div>
              <div className="about">
                <motion.div className="text-content" initial={{y:-50}} whileInView={{y:0}} transition={{duration:0.7}}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eum doloremque totam rerum natus placeat. Exercitationem
                    voluptatem expedita eligendi tempora voluptatum .
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate?
                  </p>
                </motion.div>
                <div className="social-media">
                  <ul>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="right-side">
              <motion.img initial={{x:-300}} whileInView = {{x:0}} transition={{duration:"2"}}  src="https://lh3.googleusercontent.com/pw/ADCreHdbtOl52NZSFdmd3FgnRSy_L3N6j9VJgybxDw22ofbKb9A9q61eCqQapMV3TqlyU7b5tKNxVILqGzfKklDsn8AHhp68GOcdxLbQSgr_I1IrXdJXD9tJudxqjjHBXDPQk3Nw_eTLjtYNJgq1F-9-r8hRqXlxpsAz2bzi9Fk-sSdWKwfa1KELqyK7Ihd6ha4kuljpB0tujagNVpNy4V_VyUqzutael7QP1N-42DyEVsTWOZWW_kZs7VVa7b0F9zGGgUh3hY4BCbUSS4IaFf3lAWqiSFa7hYF9hO2jNkxlh0DhZeK7l_Rc8uBNkfO4IGcH781WCmHGsQDjBXXm2U4dlHosMsbyJxpXlBZzNDAGp_Le-bQKhrIskcuz0QfIcgg6F0DhVmvIe7vocyGf8C0B5790bIUCW-oBqC_4Df55jDEju6LSBFIZMmPvZu8OmwojtiDqQEM6SDMKLJAYwlFPLGfwyXfkSAOJ1Y_galFqnJm6lFTT0F6q9i3YtwvoUbTa_eBNcBSwWoO0Qag4hgL9GN90GsqNtAJbJkovXOSC8HUO9Q-lTa9VGSAXBjqiFEwy8UgDSLHUOQ6R5GFaH7g1_n5P__57FpJU9_EuwJO9KMG3X4uEk5bmh3JubiSZ-qydtUY5FsTYeeei7gLfTcbZGdmnwbYTDw1Ngpv2tK-MX_R-Z1IWZEWSy0fTxa-MbhLqar5Ha93sRWV9d49h4SpVmnS1cZOUH6dwHAQRGGd2WBauvvE_0IHoA9TwoJUUDYV9R72hnWxqafepSVAVUe0lugYhrZqyDSlEKeQW1NAMJQa-SObqsSRPYxO1aPmpt3l4xtnq1__0q_4RbLCB_xHy8s_0yWira3wQw9snA6PEq5nQ2TZ19Xa8x4Vh4tcXhhwQ91KZwPZISGXsrz-_l_ccqVCLQ9SHsLny9RuxipUywktchWW8zleRzC20icdmlNbPMYX9G3TMCcIveNUtsweUjplk9cEK-cNEPjfl=w525-h689-s-no?authuser=0" />
              <div className="frame frame-1"></div>
            </div>
          </div>
          <div className="person person-3">
            <div className="left-side">
              <motion.img src="https://lh3.googleusercontent.com/pw/ADCreHdbtOl52NZSFdmd3FgnRSy_L3N6j9VJgybxDw22ofbKb9A9q61eCqQapMV3TqlyU7b5tKNxVILqGzfKklDsn8AHhp68GOcdxLbQSgr_I1IrXdJXD9tJudxqjjHBXDPQk3Nw_eTLjtYNJgq1F-9-r8hRqXlxpsAz2bzi9Fk-sSdWKwfa1KELqyK7Ihd6ha4kuljpB0tujagNVpNy4V_VyUqzutael7QP1N-42DyEVsTWOZWW_kZs7VVa7b0F9zGGgUh3hY4BCbUSS4IaFf3lAWqiSFa7hYF9hO2jNkxlh0DhZeK7l_Rc8uBNkfO4IGcH781WCmHGsQDjBXXm2U4dlHosMsbyJxpXlBZzNDAGp_Le-bQKhrIskcuz0QfIcgg6F0DhVmvIe7vocyGf8C0B5790bIUCW-oBqC_4Df55jDEju6LSBFIZMmPvZu8OmwojtiDqQEM6SDMKLJAYwlFPLGfwyXfkSAOJ1Y_galFqnJm6lFTT0F6q9i3YtwvoUbTa_eBNcBSwWoO0Qag4hgL9GN90GsqNtAJbJkovXOSC8HUO9Q-lTa9VGSAXBjqiFEwy8UgDSLHUOQ6R5GFaH7g1_n5P__57FpJU9_EuwJO9KMG3X4uEk5bmh3JubiSZ-qydtUY5FsTYeeei7gLfTcbZGdmnwbYTDw1Ngpv2tK-MX_R-Z1IWZEWSy0fTxa-MbhLqar5Ha93sRWV9d49h4SpVmnS1cZOUH6dwHAQRGGd2WBauvvE_0IHoA9TwoJUUDYV9R72hnWxqafepSVAVUe0lugYhrZqyDSlEKeQW1NAMJQa-SObqsSRPYxO1aPmpt3l4xtnq1__0q_4RbLCB_xHy8s_0yWira3wQw9snA6PEq5nQ2TZ19Xa8x4Vh4tcXhhwQ91KZwPZISGXsrz-_l_ccqVCLQ9SHsLny9RuxipUywktchWW8zleRzC20icdmlNbPMYX9G3TMCcIveNUtsweUjplk9cEK-cNEPjfl=w525-h689-s-no?authuser=0" initial={{x:300}} whileInView = {{x:0}} transition={{duration:"2"}} />
              <div className="frame frame-1"></div>
            </div>
            <div className="right-side">
              <motion.div className="number" >03</motion.div>
              <motion.div className="full-name" initial={{y:-50}} whileInView={{y:0}} transition={{duration:0.7}}>Sarrah Williams</motion.div>
              <motion.div className="about">
                <motion.div className="text-content"  initial={{y:-50}} whileInView={{y:0}} transition={{duration:0.7}}>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eum doloremque totam rerum natus placeat. Exercitationem
                    voluptatem expedita eligendi tempora voluptatum .
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptate?
                  </p>
                </motion.div>
                <div className="social-media">
                  <ul>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Behance />
                      </a>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    )
}

function Behance() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="32px"
      height="32px"
    >
      <path d="M 1 6.75 L 1 25.25 L 9.9375 25.25 C 10.765625 25.25 16.46875 25.082031 16.46875 19.875 C 16.46875 16.621094 14.230469 15.515625 13.09375 15.1875 C 13.929688 14.792969 15.59375 13.855469 15.59375 11.34375 C 15.59375 9.945313 15.394531 6.75 9.6875 6.75 Z M 21.375 8.46875 L 21.375 10.15625 L 28.28125 10.15625 L 28.28125 8.46875 Z M 5.0625 9.90625 L 8.875 9.90625 C 9.234375 9.90625 11.65625 9.714844 11.65625 12.03125 C 11.65625 14.011719 9.90625 14.21875 9.1875 14.21875 L 5.0625 14.21875 Z M 25 11.6875 C 19.777344 11.6875 18.6875 16.222656 18.6875 18.1875 C 18.6875 24.019531 23.46875 24.6875 25 24.6875 C 29.128906 24.6875 30.300781 22.015625 30.78125 20.53125 L 27.78125 20.53125 C 27.664063 20.914063 26.789063 22.15625 25.125 22.15625 C 22.335938 22.15625 22.09375 19.976563 22.09375 19 L 30.96875 19 C 31.148438 15.625 29.671875 11.6875 25 11.6875 Z M 24.90625 14.21875 C 25.738281 14.21875 26.410156 14.460938 26.8125 14.90625 C 27.214844 15.355469 27.511719 16.011719 27.59375 16.875 L 22.09375 16.875 C 22.109375 16.636719 22.164063 16.363281 22.25 16.0625 C 22.335938 15.753906 22.46875 15.460938 22.6875 15.1875 C 22.90625 14.917969 23.210938 14.683594 23.5625 14.5 C 23.921875 14.3125 24.367188 14.21875 24.90625 14.21875 Z M 5.0625 17 L 9.46875 17 C 10.34375 17 12.40625 17.136719 12.40625 19.65625 C 12.40625 22.097656 9.808594 22.09375 9.40625 22.09375 L 5.0625 22.09375 Z" />
    </svg>
  );
}

export default OurWork;