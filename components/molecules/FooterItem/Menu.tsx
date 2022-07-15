import Link from 'next/link';

interface MenuProps {
  href: string;
  text?: string;
}

export default function Menu(props: Partial<MenuProps>) {
  const { href = '/', text } = props;

  return (
    <li className='mb-6'>
      <Link href={href}>
        <a className='text-lg color-palette-1 text-decoration-none'>{text}</a>
      </Link>
    </li>
  );
}
