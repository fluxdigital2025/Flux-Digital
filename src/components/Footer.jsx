import { socialImgs } from "@/constants/page";

 
const Footer = () => {
  return (

    



    <footer className="footer bg-black text-white ">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} FLUX Digital. All rights reserved.
          </p>
        </div>
      </div>
    </footer>


  );
};

export default Footer;



