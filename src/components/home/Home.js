
// import Navbar from '../navbar/Navbar'
import Img from '../../images/home.png'
import Register from '../../images/register.png'
import Payment from '../../images/pay1.png'
import Send from '../../images/send.png'
import contactimg from '../../images/contact.png'
import './home.css'
const Home = () => {
  return (
    <>
      {/* <Navbar /> */}

      <div className="section1">
        <div className="main-container">
          <span className="quick-transfer">Quick Transfer </span>
          <span className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, <br></br>molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam <br></br>blanditiis harum quisquam eius sed odit
            fugiat iusto fuga <br></br>praesentium optio, eaque rerum!
          </span>
        </div>
        <img className="home-image" src={Img} />
      </div>
      {/* section 2 */}

      <div className="section2">

        <div className='color-block'>
          <div>
            <h2 className='how-works'>How It Works</h2>
          </div>

          <div className='how-it-works'>

            <div className="work-1">
              <h2>Register</h2>
              <img className="register-2-removebg-p" src={Register} />
              <p>Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
            </div>

            <div className="work-2">
              <h2>Make Your Payment</h2>
              <img className="pay-removebg-preview" src={Payment} />
              <p>Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
            </div>

            <div className="work-3">
              <h2>Money is send Out</h2>
              <img className="sendout-removebg-pre" src={Send} />
              <p>Lorem ipsum dolor sit amet<br></br> consectetur adipisicing elit.</p>
            </div>
          </div>

        </div>
      </div>

      <div className='section3'>
        
        <div className='container-form'>
          <form>
            <div className="username">
              <input className="form__input" id="firstName" type="text" placeholder="Name" />
            </div>

            <div className="email">
              <input type="email" id="email" className="form__input" placeholder="Email" />
            </div>

            <div>
              <input type="textarea" className='textarea' id="message" name="message" placeholder="Write message.." />
              <br></br>
              <input  className='submit' type="submit" value="Submit" />
            </div>
          </form>

        </div>

        <div className='contactus'>
          <h1>Contact Us</h1>
        <img className="contactimg" src={contactimg} />

        </div>

      </div>
    </>
  )
}

export default Home