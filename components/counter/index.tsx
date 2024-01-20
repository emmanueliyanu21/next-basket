// components/Counter.tsx
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../../redux/slice/counterSlice';
import { RootState } from '../../store/store';

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
