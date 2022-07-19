import className from 'classnames';
import Image from 'next/image';

interface MenuItemProps {
  title: string;
  icon:
    | 'card'
    | 'messages'
    | 'overview'
    | 'rewards'
    | 'setting'
    | 'transactions'
    | 'logout';
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;

  const classItem = className({
    item: true,
    'mb-30': true,
    active,
  });

  return (
    <div className={classItem}>
      <div className='me-3'>
        <Image
          width={25}
          height={25}
          src={`/icon/ic-menu-${icon}.svg`}
          alt='icon-menu'
        />
      </div>

      <p className='item-title m-0'>
        <a href='' className='text-lg text-decoration-none'>
          {title}
        </a>
      </p>
    </div>
  );
}
