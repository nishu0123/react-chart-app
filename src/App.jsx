
import './App.css';
import Sidebar from './components/Sidebar.jsx';
import Card from './components/Card';
import Contact from './components/Contact'
import Linechart from './components/Linechart';
import Chart from './components/Chart'

import Footer from './components/Footer'




function App() {
  return (
    <div className="App">
      <div className='flex flex-row gap-8'>
        <div>
          <Sidebar />
        </div>
        <hr />
        <div >
          <Chart />
        </div>
      </div>
    
      

    </div>
  );
}

export default App;
