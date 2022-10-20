import { TbArmchair, BsUmbrella, RiBankCard2Line, ImSleepy, AiOutlineDown } from "react-icons/all";

import "../less/NavBar.less";
import UserCard from '../../Users/Components/UserCard';

export const Navbar = () => {
    return (
        <>
            <div className='title-page'>
                <h1>PUFI</h1>
            </div>
            <nav className='nav-bar-medium'>
                <div className='item-navbar'>
                    <TbArmchair></TbArmchair>
                    <strong>PUFI PUFF</strong>
                </div>
                <div className='item-navbar'>
                    <BsUmbrella></BsUmbrella>
                    <strong>PUFI RAIN</strong>
                </div>
                <div className='item-navbar'>
                    <RiBankCard2Line></RiBankCard2Line>
                    <strong>PUFI PUFF</strong>
                </div>
                <div className='item-navbar'>
                    <ImSleepy></ImSleepy>
                    <strong>PUFI PUFF</strong>
                </div>
            </nav>
            <div className='nav-session'>

                <div className="session-item left">
                    <div className="session-text">
                        MI CUENTA <AiOutlineDown></AiOutlineDown>

                        <div className="nav-user-cotainer">
                            <UserCard />
                        </div>
                    </div>
                </div>
                <div className="session-item">
                    MI COMPRA
                </div>
            </div>
        </>
    )
}
