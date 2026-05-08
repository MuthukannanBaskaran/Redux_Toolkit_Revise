import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../features/counter/counterSlice";
import type { RootState } from "../app/store";

const Counter = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <span>{count}</span>
            </div>
            <div>
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </>
    );
};

export default Counter;