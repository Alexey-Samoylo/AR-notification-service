/* eslint-disable no-unused-vars */
import { useContext } from 'react';
import logo from '../../assets/image/logo.png'
import ContentContext from '../../Context/ContentContext';
import Notification from '../content/notification/notofication';
import PaymentInquiry from '../content/payment inquiry/payment inquiry';
import './header.css'

function Header () {

    const {content, setContent} = useContext(ContentContext);

    const onClick1 = () => {
        console.log('button1')
        setContent(<Notification />)
    };

    const onClick2 = () => {
        console.log('button2')
        setContent(<PaymentInquiry/>)
    };

    return (
        <div id="header">
            <div name="LeftHeader">
                <img src={logo} alt="logo" />
                <div>AR notification service</div>
            </div>
            <div name="Button">
                <div typeof='button' onClick={onClick1}>Notification</div>
                <div typeof='button' onClick={onClick2}>Payment inquiry</div>
            </div>
        </div>
    );

}

export default Header;