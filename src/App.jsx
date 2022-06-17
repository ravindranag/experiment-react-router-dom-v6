import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='container'>
      <h2>Sample App to explore React-Router-Dom v6</h2>
      <Outlet />
    </div>
  );
}
 
export default App;