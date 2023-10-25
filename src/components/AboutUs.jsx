import {motion} from "framer-motion";
function AboutUs(){
    return (
        <section className="about-us">
        <motion.div initial={ {transform: "translateX(-300px)"}} whileInView={{transform:"translateX(0)"}} transition={{duration:"2"}} className="right-side">
          <img src="https://lh3.googleusercontent.com/pw/ADCreHfm56CiUGT-aVoJTzi6lAJI3AdoiGqCacS6V7CicmA5pkoGbpayB6Mttt3C2y6jkcmZXXU9SmtqUjglMC5Lcm1ENDsjE0mTGGzFZc5rnpp3SieYH1V5kwvsRxK126YQXw6nqTiR8q3_XF3nNXeM8N4v5bVr2e9qlaRWqpIq9JEHchbWH6lp9mORNaSUoxoVp7qQwp7OhDZrZ5qjK27bATnpqtGqpOxXBRxUs1sWpub3rNPu4cK9dkz3B-LHid5uWiNpWFFYAiy2ZqlnT5pWpcHNHQXUN2Um2HVui087HPsDfo70EdzG7mbxsLddWMpQIlv-xLAyRTjJvwSZWEA2J7u0iaHE1fOze5SdkSqJH-wkvop5ZBWdKLJ6pFaY9kYvyIccd5qt4U0upkELcr5ahnrsQaXaE753Q2MLSBNkKMVf4p1wM49Z4TglgdD8doBtNEwboA5Rz9Gl3qNYY7Ic8sRRFNscMvlYoUIKzw_hrBPL3D1Oj6rA0LxL8O2pTgVyvFw4Q_WvDdevxXUNzMTBlZhGBPDGvkCT9_AG2lmrafR9rFaT7ZMs0tNIBJJ3EKpfuUk1_rXyqejeLtXg8pMpB5L6HYK5ohdbVMMcXQeH1ICxqostDybpQ27teYaImg__QXabZx0ASHDsyFrl5CnwUnH4fOKCAdQydMKUZYqNTl5ea6lZnURWk5ShnlDN67muEIc2aSZBTZRIbl92F1oi2qdQlvOC2-ktUb5eBrWI3QRXYA8U3nUOb4wgO-y6TcaHzMEejpb5rR8NAawq7XIf8Tk_8rCczEr6zcYgrgJgCej1wlRo0vExRihKjjYkI1gZXFAdklukpPCR08l9qjQDXg4yDTeQeP0D8BT3VkKlWR0tfumJdQiC9MxnjnHSTgYg2bt1njgEUU63cSO8huGleF2j1gaWkagXkMfwIEUNuV5WS8iddXmsH-MROaV5IAWRxy65huSFL9nQghyn_haOFM2PHJD1kZVzwekS=w225-h225-s-no?authuser=0" className="images image01" />
          <img src="https://lh3.googleusercontent.com/pw/ADCreHceUes0OrzEcqwO5wPU2Ck8D-_BkB0EzqNrLTCRRbfMcjJ-mkAyvDfZcLief-g6eT7O79Pv0yhYSM794BnrbI657GXqU9utkcSl-qVmaTar7mThAZeMzMfoxStaZptMKa7pQAUkpF6jL4JtYvYx3miXyxkG3jYt33ANdROakjbJqosM1J8vYQ3BQ7iWGMzdKW1dwBv38J2s_TlyX4nXSImZJshygfMsYbuy2dtFvL-s-FPeMOeJtg4ZDoUgEyOcesnVxv5GwzK-iPuwl5SWXfoCuPFVWYbtPKEMJsRuodBICsh38rwrahwnPSdD0xGFrb9PDZavJFvPJS-AgTioxx6TgU7S80RKs9jnD5Gb57U8qZghHFxvYFJWMV6QrO6wwb3z2A0lT6II1-E14MfSzpJpDqcIclVoLt672CQB_nzgxA-Lbp7U6WJNSqDaNr981ISPWDHZGaTmm1eJ8AAYATHE79yJHzTUC3kCUy34_5f6kEELUMt4v7NoynPC6D7_ishGXFynHQIYOsh_TWzRu3WPE14l5_pyjd434YLXy2G99B6iYbfm2z0WAqL8-ZuVwlNvX7WLZmXwvPOuTIxjcbXaaQr0wCflEBBn8FW8mfNm-pitUJB1jbDSShnQUD_YnBYe3oeZgjUNIC-lyO9OEUNaXAZuVETN6F_C8BwXYWRg4zktX7xHFoewoS57Lsoc582Y33NuoQbobhVRINZcOotwzCw6mw2iZqklsUZN6kydupswtKotb8K95oZNbFuPWbx2QPrRDNA02sDGGo_Xq3yzLssmeFx6rX8o00QsIbIW-UDcAfN9coEWGqw-ScQG3RhlV0dP3LiiQ_yqAXfZXeq5ncdcqMInmwKP24O0ZN4yrQpB87gzFgJoL8Rc7SgnT9dWrmJCRowxzU2sXqVAFXD58o8iOu_DMbfycrTGQ2DmRNaZJzNJQX5vt9PH-U7vVPgz5jvDcEj54c4652qne8p8yX0Q9bsCcxpq=w225-h225-s-no?authuser=0" className="images image02" />
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