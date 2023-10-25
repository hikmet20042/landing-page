import {motion} from "framer-motion";

function Hero(){
    return (
        <div className="hero">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>

        <nav>
          <div className="hamburger">
            <img src="https://lh3.googleusercontent.com/pw/ADCreHeyphD9xTMgUc_GhsLFHsBjg7TOm5ztdpzEwkp5mu22elMvLfv75vNXidUxPDzZjf-_-7cx8Immp13DM9I-c0skqUg7_JIsCRlqFm11NR2vLzB6Ip6NExQtQqr_myQtmvdsGXi9am9aLDf0skRL9qA1gzrASXVLr_v83gpgm2pm0S1DBHDCOYr241lni9rLQojZBI6oChOACzyiIuQTAKF_wA5DpA7T0qiLgh6GE7jStvrCx6OYsF1vw5QRuvb0Q_fDGyEoHYL3l1R3RkQhRRp9UukjCKcbg6Fw4gwcbyhbQKqKg2EeDgV42kpZFdGVhfkXRrtB3rS4attKKro-akxKKY7upJ-0xvPkqu-vGJ5XgLxb1W7N9au8P7HbKuB5ayKCwwxaYFMC7IkKK8WwY1ImBOr88CmxJBWnc4FYkRIo8HJ1acSI6kYwlee41DRRcf2r13L9vdG4qGdl6UTPx_pMiWV_-C492OP8ftxOy1BSugZBWnVhIl3GVL7l0qtgtlunODL9yQ7UAURq6tI9Rca-l6xucZUyzANlVuEDPqnBz1gcxtnqeHw0P_gHLSS55LC8Lv7j3Fqtg7A5R7Jv015owR58_HK7Cg-CPAj93LRQg-yEP7DLLa-y-xZtfs59ODJPrz1SiLIOr7ILpsSK7U3BPnMGeXYg3nRQ6M7rRvw1_I9cPpu2Lwq8x6ieMZY8rzeVgOy9ujpWGg6M0mB6_TgctK2HIoI-U5AY1e8ibHjy3wDikrOVMq1JqyUaOLm9ubNaajs4E21U3EKNVSfGXLCwzybVNH0HDdOmLck8o924WzfJ1-MgQM4G5AmtfZ8uQ8XMee_4Xo8xVksMc3CEFtiCiFfIFX01fy7qJSx_wFaNkDd2dG-pXn7QfMtiqvx1dOvlpAOBrADjn1QzyeUpJBDyJ0WCVt51xheH9porHi0RPF3ih-unkPnOWJbuGS2BkG_mnlhPAkak3aVpBC8fpyoa5mGm3z0wtPEj=w512-h512-s-no?authuser=0" alt="hamburger-icon" /> Menu
          </div>
          <div className="logo">
            <img src="https://lh3.googleusercontent.com/pw/ADCreHcHPvhQgeDpeYbSqKPZ9gMIzWl6GsRxcoWNAoafiKk7Z01VtxHiH_DyXM9svn9Bjdq_G6ENmgMCUhX_6KGS8ol4nDtmQd-Jk8p0v4al-bDTjpmzKL9j18HGQCb3N74FOIyLqRDsqtu-sybYFc5bSff13WnxQOFZHDuq3xl8KsnBncOv0pB3D9xB5LNbvAW8RDG3b4FpWUaIzHA1DNft8BOL4WmZrNKuK6n7oFvr84WTa9rWSbUifpOwyX16CeLLHiwpBn30QevdCpj0eTwuvor4SqWO5CIQbhEif1VHEyYtx0ZaJ9VfxvX07zQvY9mkgldYtCUeRSvGM2eATYId6ASl95Y3tDnDRemhaKA9emEvinRRVZEp4jRuw0XlrnR9VelVkXxSedLTiJj_udn-5L4kcBE3prS3-gTxtP2FIX0Ybsf2zNkh2HY-U4Q_Doeg0OlnfBA11hU8gqMTbjLF7LAwOQU_TTTLArTth3KvnVE6Urmw9ptyebdegYcJass0UywDg2ehMNTDj0dF96mGiXtnNQVyPw5yxdOw_d2eNwpNqsef7o4d-BsVQH4Xb04Fe_P4SxBLTKvPPaAtsiW9_TGGIGdqpwm3lA1DzvfB99t8O2zlOKRiv0XUzqgArz8PSWASid1O9BhjZeGToNQWM4lPtfFttrz3IT-92-6HzU9VzqW07pBQKLdZ0iLxLLAn_ybWUdBthQ0mMYlChCJ8-EJZX-BKuK0olzPny81jdMt-CB2xpqGZtY0JU2pVKynKdeUG522EGKX2EDZFAUqnTbbzISnqS1VQ7X9vd2kHQYszVlC5C83sbkYgV2h6tc02fk_eegQyxv2DEPXgTdjTea0wDfc4q6Xt_Vf-l6ZmX1RW7QOgw1brfs26DmwjD0DQRSkHSelyjUBWONXbfz6t0NjwJjFRV5K3kTFmNQe3j1sfgduI5Gp8J8vlPuxgVSplYu52o-fd9szsjhBRiXnHXfbj75H04J8EbZae=w689-h689-s-no?authuser=0" alt="logo" />
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
            <img src="https://lh3.googleusercontent.com/pw/ADCreHfKoC6Vh2iUwd5nIR7jKpDzHXQzhoL-XYXnIap_Qpfui4la0JsIq02G_aC35nUu7ToAB8C1NqPOZ4on7sIFyr9NFIWLHjv7Nru4W2TaUHOPuHveFoiDBvh7esq_YNwDLKnF7jh3JndRoCwQf47ABXN1HpeReC76tbICct3lUBaWpAhwI0cakQ-0RuhPj4eZrsi-QQpMf630HMOyWJXIM4_JfO5VxvNr7GdfrD5hTj0efnZ1XZKIKTCgZyJyrribS7tYtduZaidH-YKwElPKZkSQ1DvqWOouvdbUt9Ft3wLXYv7CGDVEb0QX4oo65Y9tvqLCONc2CENqmendBlhkqFa-6H9hTpbkT_zlH9RxUnyBwPBZEUc4stq0aetlAbZNvgHiptBbdtdZ0eZDlaRQhHblzDJuV2Oiuo0u1PBIVXtYPuonO-v7REQQd8oF0cwdpffqv_AaYTS5fkbALUFpvYkIcNnOX-Gf-1fEla987Yb6ZbTKrklFbMN2f-fmyQejPvvrj0HiEDYkGzsqq9GKuLXtTbZizmMkTQJJfum3NbMyYF0dRmGFy33pkDf5kkEFyVjcjTbL_wAAVc5FhkaB1bApX82Dr1LAKxywnv6Bkmynu0tyJ6bfSbxeSPIAa3ZIFDJ_DBp06tRBdX6bhTKHqjf3tVD8q291mB_6Xpd3UPgV_ZqANcqpbal0HjCY-aL6Ix54enwwfLUyjCDwiFYyq0Uuo_KER38smiVTawFxVASoe1nuCdiRbsoNqG-Wwh0ogxS5W04ymdXkxcsfwgOuPxZQALmFL6JQHtzHvUIhzgRw7d6Y9kkXCeb_K2cZzsLAfmyVT8mBYy1StaOudG3IKv9UCzaa8yXDNcTJxD8VYgdR-ypoB26jVBbhZNw7lcnFvyR_XPXsZkC4tnYNzaxD8l51BBQiY3L80-uFxcyEzlqEsoGchfbn39NiOsyFtYgPTxz3MA7VLmnmktMiQ4bbnIC2dB_LFKOysscA=w612-h408-s-no?authuser=0" alt="welcome-image" />
          </motion.div>
        </section>
      </div>
    )
}

export default Hero;