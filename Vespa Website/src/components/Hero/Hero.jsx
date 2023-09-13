import  './Hero.scss'
import {motion} from 'framer-motion'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="left">
                <motion.h1
                 initial={{x:"-2rem", opacity:0}}

                 animate={{x:0, opacity:1}}
                 transition={{duration:2, type:"spring"}}
                >Ride In Style</motion.h1>
                <p>Rent a Vespa at any VespaJoy location across Canada <br/>
                and enjoy unlimited kilometers
                </p>
                <button>
                    Rent a Vespa Now
                    <img src="./arrow.png" alt="arrow" />
                </button>
            </div>
            <motion.div className="right"
             initial={{x:"2rem", opacity:0}}
             animate={{x:0, opacity:1}}
             transition={{duration:2, type: "spring"}}
            >
                <img src="./vespa2.png" alt="vespa" />
            </motion.div>
        </div>
    </div>
  )
}

export default Hero