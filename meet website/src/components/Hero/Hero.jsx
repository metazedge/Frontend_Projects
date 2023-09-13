import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="left">
                <p className='sub-heading'>A THOUGHTFUL APPROACH TO MOBILE MEETINGS</p>
                <h1>Confidently <br />work from <br /> home
                    <img src="./home.png" alt="home" />
                </h1>
                <p>Meetings for desktop and mobile provides the tool <br /> to make every meeting a great one.</p>
                <button>Get started now</button>
                
            </div>
            <div className="right">
                <img src="./her.png" alt="hero image" />
            </div>
        </div>
        <div className="box">
        <img src="./box.png" alt="box image" />
                <span>See how it works 👇</span>
        </div>
    </div>
  )
}

export default Hero