import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCurrentUser } from '../../store/user/user.selector';
import { selectIsCartOpen } from '../../store/cart/cart.selector';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { signOutUser } from '../../utils/firebase/firebase.utils.js';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';

import { 
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink
} from  './navigation.styles.jsx';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <CrwnLogo className='logo'></CrwnLogo>
        </LogoContainer>
        <NavLinks>
          <NavLink to={'/shop'}>SHOP</NavLink>
          {
            currentUser
            ? ( <NavLink as='span' onClick={signOutHandler}>SIGN OUT</NavLink> )
            : ( <NavLink to={'/auth'}>SING IN</NavLink> )
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;