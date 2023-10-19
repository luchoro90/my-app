import './styles.css';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <div className="nav-principal">
            <div className='menu-logo'>
                <img alt='Logo' src={'./logo-none.png'} width={'100px'}/>
            </div>
            <div className='menu-principal'>
                <ul>
                    <li><button className='button-menu'> Quienes somos</button></li>
                    <li><button className='button-menu'> Impresiones 3D</button></li>
                    <li><button className='button-menu'> Nosotros</button></li>
                    <CartWidget />
                </ul>
            </div>
        </div>
    );
};


export default NavBar;