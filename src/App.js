import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/nav/nav.jsx'
import SidebarICon from "./components/SidebarICon/SidebarICon.jsx";
import TopCard from "./components/TopCard/TopCard";
import Chart from "./components/chart.jsx";
import Clint from './components/clint1/clint.jsx';
import Form from './components/form/form.jsx'
import Student from './components/student/student.jsx'

function App() {
  return (
    <BrowserRouter>
    <Nav />
      <div className="App h-100 bg-success w-100">
        <div className="sidebar bg-body">
          <SidebarICon />
        </div>
        <div className="dashboard bg-light">
          <Routes>
            <Route
              path="React-Dashboard-1"
              element={
                <>
                  <TopCard />
                  <div className="ChartAndOrders p-3 justify-content-between">
                    <Chart />
                    <Clint/>
                  </div>
                </>
              }
            />
            <Route path="form" element={<Form />} />
            <Route path="student" element={<Student />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
