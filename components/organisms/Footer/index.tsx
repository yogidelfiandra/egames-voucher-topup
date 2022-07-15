import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';

export default function Footer() {
  return (
    <section className='footer pt-50'>
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 text-lg-start text-center'>
              <a href='/#' className='mb-30'>
                <Image src='/icon/logo.svg' width={60} height={60} alt='' />
              </a>
              <p className='mt-30 text-lg color-palette-1 mb-30'>
                Egames membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className='mt-30 text-lg color-palette-1 mb-30'>
                Copyright 2022. All Rights Reserved.
              </p>
            </div>
            <div className='col-lg-8 mt-lg-0 mt-20'>
              <div className='row gap-sm-0'>
                <div className='col-md-4 col-6 mb-lg-0 mb-25'>
                  <FooterItem
                    title='Company'
                    href1='/#'
                    href2='/#'
                    href3='/#'
                    href4='/#'
                    text1='About Us'
                    text2='Press Release'
                    text3='Terms of Use'
                    text4='Privacy & Policy'
                  />
                </div>
                <div className='col-md-4 col-6 mb-lg-0 mb-25'>
                  <FooterItem
                    title='Support'
                    href1='/#'
                    href2='/#'
                    href3='/#'
                    href4='/#'
                    text1='Refund Policy'
                    text2='Unlock Rewards'
                    text3='Live Chatting'
                  />
                </div>
                <div className='col-md-4 col-12 mt-lg-0 mt-md-0 mt-25'>
                  <FooterItem
                    title='Connect'
                    href1='mailto: admin@egames.com'
                    href2='mailto: team@egames.org'
                    href3='http://maps.google.com/?q=Kota Padang, Sumatera Barat'
                    href4='tel: 02322559096'
                    text1='admin@egames.com'
                    text2='team@egames.org'
                    text3='Padang, Sumatera Barat'
                    text4='023 - 2255 - 9096'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
