import { useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { UserContext } from '../../constexts/user.context';
import { CartContext } from '../../constexts/cart.context';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to={'/'}>
          <CrwnLogo className='logo'></CrwnLogo>
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to={'/shop'}>SHOP</Link>
          {
            currentUser
            ? ( <span className='nav-link' onClick={signOutHandler}>SIGN OUT</span> )
            : ( <Link className='nav-link' to={'/auth'}>SING IN</Link> )
          }
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;