import { FC } from 'react';
import { ClipLoader } from 'react-spinners';

interface LoaderProps {
  size?: number;
  color?: string;
  height?: string;
}

const Loader: FC<LoaderProps> = ({
  size = 50,
  color = '#2196F3',
  height = '100vh',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height,
      }}
    >
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default Loader;
