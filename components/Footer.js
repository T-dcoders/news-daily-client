import Stylesheet from '../styles/Footer.module.css';
import Image from 'next/image';
import facebook from '../assets/facebook.png';
import youtube from '../assets/youtube.png';
import twitter from '../assets/twitter.png';
import pinterest from '../assets/pinterest.png';
import instagram from '../assets/instagram.png';
import uparrow from '../assets/up-arrow.png';


const Footer = () => {

    const gotoTop =()=>{
        window.scrollTo({
            top:0,
            behavior:'smooth',
        });
    }

    return ( 
      <div className="">
        <div className={Stylesheet.footerhead}>
            <div><h1  className={Stylesheet.logo}>News Daily</h1></div>
            <div>

              <div className='mb-2'><h1 className={Stylesheet.follow}> Follow Us</h1></div>

            <div className="flex "> 

                <div className="mr-4"><a target="_blank" href=""><Image  width='30px' height='30px' src={facebook} alt="facebook" /></a></div>
                <div className="mr-4"><a target="_blank" href=""><Image  width='30px' height='30px' src={youtube} alt="facebook" /></a></div>
                <div className="mr-4"><a target="_blank" href=""><Image  width='30px' height='30px' src={twitter} alt="facebook" /></a></div>
                <div className="mr-4"><a target="_blank" href=""><Image  width='30px' height='30px' src={pinterest} alt="facebook" /></a></div>
                <div className="mr-4"><a target="_blank" href=""><Image  width='30px' height='30px' src={instagram} alt="facebook" /></a></div>

                
              
             
              </div>

            </div>
        </div>

        <div className=" p-10 bg-gray-900 text-neutral-content ">
            <div className="footer font-bold text-gray-500 ">
  <div>
    <a className="hover:text-white">ABOUT US</a> 
    <a className="hover:text-white">CONTACT US</a>
    <a className="hover:text-white">SMS SUBSCRIPTION</a>
    <a className="hover:text-white">APPS</a> 
  </div> 
  <div>
    
    <a className="hover:text-white">COMMENT POLICY</a>
    <a className="hover:text-white">RSS</a>
    <a className="hover:text-white">NEWSLETTER</a>
    <a className="hover:text-white">ADVERTISEMENT</a>
  </div> 
  <div>
    <a className="hover:text-white">SITEMAP</a> 
    <a className="hover:text-white">PRIVACY POLICY</a> 
    <a className="hover:text-white">CONFERENCE HALL</a>
    <a className="hover:text-white">ARCHIVES</a>
   
 
  </div>
  </div>

  <hr className='mt-10 mb-2' />
<h1><span className='font-bold'> © 2022 newsdaily.com | Powered by: Team D-coders </span></h1>
<p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, tempora officiis. 
    Adipisci sit omnis quibusdam perspiciatis suscipit, quisquam recusandae saepe. 
    Ea, cupiditate est esse adipisci ipsa fuga delectus. Fuga, repudiandae!</p>
    
    <button onClick={gotoTop}  className={Stylesheet.uparrow}><Image  width='50px' height='50px' src={uparrow} alt="up" /></button>
</div>
 
      </div>
     );
}
 
export default Footer;