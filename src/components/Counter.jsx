import { useState} from "react";

 function Counter(props){
     console.log(props);

     const [counter, setcounter] = useState(1);

     const cal = (value) => {
         setcounter(counter + value);
     }
     return (
         <div>
             <div>counter: {counter}</div>

             <div>
                 <button onClick={() => {cal(1)}}>Increament</button>
                 <button onClick={() => {cal(-1)}}>Deccreament</button>
                 <button onClick={() => {cal(counter*1)}}>Double</button>
               
             </div>
         </div>
     )
 }
 export {Counter};