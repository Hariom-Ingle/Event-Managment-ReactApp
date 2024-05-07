import React, { useState, useEffect } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [openNav, setOpenNav] = useState(false); // State for mobile navigation
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const closeNavOnResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };
    window.addEventListener('resize', closeNavOnResize);
    return () => {
      window.removeEventListener('resize', closeNavOnResize);
    };
  }, []);

  const navItems = [
    {
      name: 'Home',
      slug: '/',
      active: true,
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus,
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus,
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus,
    },
    {
      name: 'Add Post',
      slug: '/add-post',
      active: authStatus,
    },
  ];

  return (
    <header className='sticky top-0 z-10 bg-white border-b border-gray-200'>
      <Container>
        <nav className='flex items-center justify-between px-4 py-2 lg:px-8 lg:py-4'>
          <div className='flex items-center'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <div className='hidden lg:block'>
            <ul className='flex gap-6'>
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => navigate(item.slug)}
                        className='px-3 py-2 text-sm text-gray-600 hover:text-gray-900'
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
               {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
          <div className='flex items-center lg:hidden'>
            <button
              className='focus:outline-none'
              onClick={toggleNav}
              aria-label='Toggle mobile navigation'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {openNav ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>
        {openNav && (
          <div className='lg:hidden'>
            <ul className='flex flex-col gap-2 mt-2'>
              {navItems.map(
                (item) =>
                  item.active && (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          navigate(item.slug);
                          setOpenNav(false);
                        }}
                        className='block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-900'
                      >
                        {item.name}
                      </button>
                    </li>
                  )
              )}
              {authStatus && (
                <li>
                  <LogoutBtn />
                </li>
              )}
            </ul>
          </div>
        )}
      </Container>
    </header>
  );
}

export default Header;
