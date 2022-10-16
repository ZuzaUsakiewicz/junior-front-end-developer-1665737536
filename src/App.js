import "./App.css";
import BusinessContextsTab from "./components/BusinessContextsTab";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <TasksList />
      <BusinessContextsTab />
    </div>
  );
}

export default App;
