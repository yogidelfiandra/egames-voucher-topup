import Image from 'next/image';
import Link from 'next/link';

interface GameItemProps {
  thumbnail:
    | 'Thumbnail-1'
    | 'Thumbnail-2'
    | 'Thumbnail-3'
    | 'Thumbnail-4'
    | 'Thumbnail-5';
  title: string;
  category: string;
}

export default function GameItem(props: GameItemProps) {
  const { thumbnail, title, category } = props;

  return (
    <div className='featured-game-card position-relative'>
      <Link href='/detail'>
        <a>
          <div className='blur-sharp'>
            <img
              className='thumbnail'
              src={`/img/${thumbnail}.png`}
              width={205}
              height={270}
              alt=''
            />
          </div>
          <div className='cover position-absolute bottom-0 m-32'>
            <div className='d-flex flex-column h-100 justify-content-between text-decoration-none'>
              <div className='game-icon mx-auto'>
                <Image
                  width={54}
                  height={36}
                  src='/icon/console-game.svg'
                  alt='console-game'
                />
              </div>
              <div>
                <p className='fw-semibold text-white text-xl m-0'>{title}</p>
                <p className='fw-light text-white m-0'>{category}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
