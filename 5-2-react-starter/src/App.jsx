import './App.css';
import StudentCard from './assets/components/StudentCard';

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          <StudentCard name="Ali" id="S12345" department="Computer Science" />
          <StudentCard name="mm" id="S67890" department="Mechanical Engineering" />
        </div>
      </main>
    </div>
  );
}

export default App;
