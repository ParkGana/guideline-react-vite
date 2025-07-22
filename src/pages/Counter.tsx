import { minusNumber, plusNumber } from '@/redux/slices/counterSlice';
import type { RootState } from '@/redux/store';
import { useDispatch, useSelector } from 'react-redux';

const CounterPage = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-title text-center">COUNTER</p>
      <div className="flex items-center justify-center gap-3">
        <div
          className="border-2 border-gray-500 hover:bg-gray-200 px-2 cursor-pointer"
          onClick={() => dispatch(minusNumber(3))}
        >
          -3
        </div>
        <p className="text-xl font-bold">{count}</p>
        <div
          className="border-2 border-gray-500 hover:bg-gray-200 px-2 cursor-pointer"
          onClick={() => dispatch(plusNumber(3))}
        >
          +3
        </div>
      </div>
    </div>
  );
};

export default CounterPage;
