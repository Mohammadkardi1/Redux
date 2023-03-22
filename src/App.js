import  { useSelector, useDispatch } from "react-redux";
import { inc } from "./action/Action";



function App() {

  // access data from store reducer using useSelector
  const data = useSelector(state => state.counter.counter)


  const authState = useSelector(state => state.auth.isLog)
  console.log(authState)

  // Change data from store reducer using Dispatch
  // dispatch know what the store it should look in automatically without need to pass 
  // any parameter where it look for the provider above her in index.js
  const dispatchCounter = useDispatch()

  console.log(data)
  return (
    <div>
      <div>
        <h3>Counter </h3>
        <p>{data}</p>
        {/* هون بس دز اكشن بل ديس باتش */}
        <button onClick={() => dispatchCounter({type:"increase"})}>Increase</button>
        <button onClick={() => dispatchCounter({type:"decrease"})}>Decrease</button>
        <button onClick={() => dispatchCounter({type:"reset"})}>Reset</button>
      </div>
      <div>
        <h3>Authentication </h3>
        <p>{authState === true ? "yes" : "no"}</p>
        <button onClick={() => dispatchCounter({type:"isLogin"})}>Log In</button>
        <button onClick={() => dispatchCounter({type:"NoLogin"})}>Log Out</button>
      </div>
    </div>
  );
}

export default App;
