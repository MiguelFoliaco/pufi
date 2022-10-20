import { AiOutlineCopyright,AiOutlineFacebook, AiFillInstagram, AiFillTwitterCircle, AiFillFacebook } from 'react-icons/ai';
import '../less/Footer.less';
import secure from "../assets/secure.svg";
import secure2 from "../assets/secure_2.png";

export const Footer = () => {
    return (
        <footer className='footer'>
            <div className="grid-item item1">
                <h1>PUFI <AiOutlineCopyright className='svg-copy'></AiOutlineCopyright></h1>
            </div>
            <div className="grid-item item2">
                <ul>
                    <li><a href="#PUFFI_RAIN">PUFFI RAIN</a></li>
                    <li><a href="#PUFFI_PUFF">PUFFI PUFF</a></li>
                    <li><a href="#PUFFI_CART">PUFFI CART</a></li>
                    <li><a href="#PUFFI_NAP">PUFFI NAP</a></li>
                </ul>
            </div>
            <div className="grid-item item3">
                <ul>
                    <li><a href="">CONTACTO</a></li>
                    <li><a href="">AYUDA</a></li>
                    <li><a href="">COMO COMPRAR</a></li>
                    <li><a href="">TERMINOS Y CONDICIONES</a></li>
                </ul>
            </div>
            <div className="grid-item item4">
                <h5>COMPRA 100% SEGURA</h5>
                <div className="imgs">
                    <img src={secure2} alt="secure" />
                    <img src={secure} alt="secure" />
                </div>
            </div>
            <div className="grid-item item5">
                <h5>SIGUENOS EN
                    <span>
                        <a href="https://www.twiter.com"><AiFillTwitterCircle className='twitter'></AiFillTwitterCircle></a>
                        <a href="https://www.facebook.com"><AiFillFacebook className='facebook'></AiFillFacebook></a>
                        <a href="https://www.instagram.com"><AiFillInstagram className='instagram'></AiFillInstagram></a>
                    </span>
                </h5>
            </div>
            <div className="grid-item-buttom item6">
                <p>Miguel Angel Foliaco Gomez &copy; | Todo los derechos reservados</p>
            </div>
        </footer>
    )
}
