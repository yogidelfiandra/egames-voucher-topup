interface ReachItemProps {
  classItem: string;
  reach: string;
  desc: string;
}

export default function ReachItem(props: ReachItemProps) {
  const { classItem, reach, desc } = props;
  return (
    <div className={`me-lg-35${classItem}`}>
      <p className='text-4xl text-lg-start text-center color-palette-1 fw-bold m-0'>
        {reach}
      </p>
      <p className='text-lg text-lg-start text-center color-palette-2 m-0'>
        {desc}
      </p>
    </div>
  );
}
