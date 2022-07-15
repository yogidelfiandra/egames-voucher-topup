import Menu from './Menu';

interface FooterItemProps {
  title: string;
  href1: string;
  href2: string;
  href3: string;
  href4: string;
  text1: string;
  text2: string;
  text3: string;
  text4?: string;
}

export default function FooterItem(props: Partial<FooterItemProps>) {
  const {
    title,
    href1 = '/',
    href2 = '/',
    href3 = '/',
    href4 = '/',
    text1,
    text2,
    text3,
    text4,
  } = props;
  return (
    <>
      <p className='text-lg fw-semibold color-palette-1 mb-12'>{title}</p>
      <ul className='list-unstyled'>
        <Menu href={href1} text={text1} />
        <Menu href={href2} text={text2} />
        <Menu href={href3} text={text3} />
        <Menu href={href4} text={text4} />
      </ul>
    </>
  );
}
