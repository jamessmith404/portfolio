import { IconBaseProps } from 'react-icons';
import Image from 'next/image';

const BangkitIcon = (props: IconBaseProps) => {
  const size = parseInt(props.size?.toString() || '48');
  return (
    <div
      style={{
        width: size,
        height: size,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: '#181A2A', // fallback bg
      }}
    >
      <div
        style={{
          width: size,
          height: size,
          borderRadius: '50%',
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#181A2A',
        }}
      >
        <Image
          src="/images/bangkit.jpg"
          alt="Meeting.ai"
          width={size}
          height={size}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            display: 'block',
          }}
        />
      </div>
    </div>
  );
};

export default BangkitIcon;
