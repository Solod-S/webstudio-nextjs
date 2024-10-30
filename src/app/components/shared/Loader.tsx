import { FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: FC<LoaderProps> = ({ size = 50, color = '#2196F3' }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
