import { NavLink } from 'react-router-dom';

const NavLinkItem = ({ children, path }: { children: any; path: string }) => (
  <li className='list-none'>
    <NavLink
      end
      to={path}
      className={({ isActive }) =>
        isActive ? 'text-blue-800' : 'text-gray-700'
      }
    >
      <p className='font-semibold text-lg'>{children}</p>
    </NavLink>
  </li>
);

const NavBar = () => {
  return (
    <nav>
      <div className='flex gap-10 justify-center bg-blue-300 py-3'>
        <NavLinkItem path='/'>Home</NavLinkItem>
        <NavLinkItem path='/about'>About</NavLinkItem>
      </div>
    </nav>
  );
};

export default NavBar;
