import { useSelector } from 'react-redux';
import { selectorCars } from 'store/selectors/selectors';
export const App = () => {
const cars = useSelector(selectorCars);
console.log(cars)
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      Hello
    </div>
  );
};
