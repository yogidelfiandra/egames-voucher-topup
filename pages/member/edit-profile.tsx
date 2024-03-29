import Image from 'next/image';
import Input from '../../components/atoms/Input';
import SideBar from '../../components/organisms/SideBar';

export default function EditProfile() {
  return (
    <section className='edit-profile overflow-auto'>
      <SideBar activeMenu='setting' />
      <main className='main-wrapper'>
        <div className='ps-lg-0'>
          <h2 className='text-4xl fw-bold color-palette-1 mb-30'>Settings</h2>
          <div className='bg-card pt-30 ps-30 pe-30 pb-30'>
            <form action=''>
              <div className='photo d-flex'>
                <div className='position-relative me-20'>
                  <img
                    src='/img/avatar-1.png'
                    width='90'
                    height='90'
                    className='avatar img-fluid'
                  />
                  <div className='avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center'>
                    <Image
                      width={24}
                      height={24}
                      src='/icon/ic-trash.svg'
                      alt='icon-trash'
                    />
                  </div>
                </div>
                <div className='image-upload'>
                  <label htmlFor='avatar'>
                    <Image
                      width={90}
                      height={90}
                      src='/icon/upload.svg'
                      alt='icon-upload'
                    />
                  </label>
                  <input
                    id='avatar'
                    type='file'
                    name='avatar'
                    accept='image/png, image/jpeg'
                  />
                </div>
              </div>
              <div className='pt-30'>
                <Input label='Full Name' type='text' id='name' />
              </div>
              <div className='pt-30'>
                <Input label='Email Address' type='email' id='email' />
              </div>
              <div className='pt-30'>
                <Input label='Phone' type='tel' id='phone' />
              </div>
              <div className='button-group d-flex flex-column pt-50'>
                <button
                  type='submit'
                  className='btn btn-save fw-medium text-lg text-white rounded-pill'
                  role='button'
                >
                  Save My Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </section>
  );
}
