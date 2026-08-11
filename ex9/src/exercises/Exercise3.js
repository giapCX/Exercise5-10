import { useState } from "react";

function Exercise3() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Counter: {count}</h2>

            <button onClick={() => setCount(count - 1)}>
                -
            </button>

            <button onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    );
}

export default Exercise3;