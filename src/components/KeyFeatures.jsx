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
            <img src="https://lh3.googleusercontent.com/pw/ADCreHd_OCoxaVtGgpb6FH1QotbR9VQqzbnVp7hNoyOIFst8fDNPCkE8u5Y_0ta2MyfoT208UObTS6SrxpaADUXlhPchsESP3J8iQNM6F6pnDt4FRtoEkRpw7qaivcUnOYUYaq_n7zno65_l_1D7Enkt4fzaRqnPNuaJwcFX64uXFJTzh26g_GL65H9GJ2OwFWey_XJfUCi2e5zDuUclC33-P6lbnXPqU1bAwCrdXDaVHmIV4BzTljV0pjAiD8I6MMPIl6CU5kuPAcMODnxOSkCuNd_qvfjiR1KmyEVd63dpxaKviPk2wVatR0jnRTAQOU5jNQ8ycgzq7WCQusHtWdxiNAZti3hqae5RMp3tw8Didn5be05lTJqNuMHkdqWm-kpn83i4TuCDVtsWWZqbTJYJH1jU17zIQxpbjiwFMCURCBRw0sQGKOF48xcxDpx0vy3OSuikvEBTHJWzOCvTbS_mgH3cLgzN28tW558_55Jvcb-d_GqLQlqz2-PBxb-CF9x3zgTzhwrG4JihuThWHOptmonZUdyY7IIthRClkXVC5gW494hPnwWPSsU_9z0761VwojXXbyfmAVpslqvwSYge30uhq1xGEwHDeg5syah8H20ic7pl1yHZO-bA_DoG-PvYnSfC5toe2RTWvbX4qVJM8ksFr25zZc48uP4AitBUyrS_e5g0VSyEwAIGNwvlQwRaOkipd_lrQsA-vBRFLnoyjB4dvKIjTqhPzHCqP_obSGhs9I4yj97RDhUbAL9fHlpMuv9QskUT2jBySOdWFj_e66edPROYxwYFt5-C30XxA-y0SeJfn8nrFrMt2bG7G4kDYODIfufT3gpAyrP1b6SuWdtyKYzbJI_xAYr2zyc6S2cPJ58ugVDRzThAHW3G-wOcsS2CvPkYKU3uZCRfBQTvAvDrLFDTb9PCc2CPioOoKmZ1EOPgjCmrPL4mO4UwggXYsW-W5jiixMERcqiwIwKRgcY1RVImx9WZAqKK=w512-h512-s-no?authuser=0" alt="feature1" />
            swimming pools
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default KeyFeatures;
