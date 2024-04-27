import { CircleLoader } from 'react-spinners';
export const Loader = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'rgba(0, 0, 0 , 0.8)',
      }}
    >
      <CircleLoader color="#3667d6" />
    </div>
  );
};