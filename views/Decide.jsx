import { useState } from "react";
import {useNavigate} from "react-router-dom";

 function Decide() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

  return (
    <div>
<h1>A little Pokemon game</h1>
<button onclick={()=>setCount((count) => count + 1)}> count is {count}
</button>
<p>If the counter is even, go to home, if it'S odd, go to pokemon</p>
<button onclick={() => {
    count % 2 === 0 ? navigate("/") : navigate("/pokemon");
}}>
GO
</button>
</div>
  )
}


export default Decide