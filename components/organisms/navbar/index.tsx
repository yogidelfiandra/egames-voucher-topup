import Image from 'next/image';
import Auth from './auth';
import Menu from './menu';
import ToogleMenu from './ToogleMenu';

export default function Navbar() {
  return (
    <section>
      <nav className='navbar navbar-expand-lg navbar-light bg-light bg-white pt-lg-40 pb-lg-40 pt-30 pb-50'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='/'>
            <Image width={60} height={60} src='/icon/logo.svg' alt='' />
          </a>
          <ToogleMenu />
          <div className='collapse navbar-collapse' id='navbarNav'>
            <ul className='navbar-nav ms-auto text-lg gap-lg-0 gap-2'>
              <Menu title='Home' active />
              <Menu title='Games' href='/games' />
              <Menu title='Rewards' href='/rewards' />
              <Menu title='Discover' href='/discover' />
              <Menu title='Global Rank' href='/global-rank' />
              <Auth />
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}
