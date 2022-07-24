import cx from 'classnames';
import Link from 'next/link';

interface TableTransactionProps {
  image: 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4';
  title: string;
  category: 'Desktop' | 'Mobile';
  item: number;
  price: number;
  statusTransaction: 'Pending' | 'Success' | 'Failed';
}

export default function TableTransaction(props: TableTransactionProps) {
  const { image, title, category, item, price, statusTransaction } = props;

  const statusClass = cx({
    'float-start icon-status': true,
    pending: statusTransaction === 'Pending',
    success: statusTransaction === 'Success',
    failed: statusTransaction === 'Failed',
  });

  return (
    <tr data-category='pending' className='align-middle'>
      <th scope='row'>
        <img
          className='float-start me-3 mb-lg-0 mb-3'
          src={`/img/${image}.png`}
          width={80}
          height={60}
          alt={`image-${image}`}
        />
        <div className='game-title-header'>
          <p className='game-title fw-medium text-start color-palette-1 m-0'>
            {title}
          </p>
          <p className='text-xs fw-normal text-start color-palette-2 m-0'>
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className='fw-medium color-palette-1 m-0'>{item} Gold</p>
      </td>
      <td>
        <p className='fw-medium color-palette-1 m-0'>{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className='fw-medium text-start color-palette-1 m-0 position-relative'>
            {statusTransaction}
          </p>
        </div>
      </td>
      <td>
        <Link href='/member/transactions/detail'>
          <a className='btn btn-status rounded-pill text-sm'>Details</a>
        </Link>
      </td>
    </tr>
  );
}
