interface RowProps {
  label: string;
  value: string | number;
  classNames?: string;
}

export default function Row(props: Partial<RowProps>) {
  const { label, value, classNames } = props;

  return (
    <p className='text-lg color-palette-1 mb-20'>
      {label} <span className={`purchase-details ${classNames}`}>{value}</span>
    </p>
  );
}
