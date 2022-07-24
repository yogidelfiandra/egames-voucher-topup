import cx from 'classnames';
import Link from 'next/link';

interface ButtonTabProps {
  title: string;
  active: boolean;
  href: string;
}

export default function ButtonTab(props: ButtonTabProps) {
  const { title, active, href } = props;

  const buttonClass = cx({
    'btn btn-status rounded-pill text-sm me-3': true,
    'btn-active': active,
  });
  return (
    <Link href={href}>
      <a data-filter='*' className={buttonClass}>
        {title}
      </a>
    </Link>
  );
}
