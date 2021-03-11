import './App.css';
import WeeklyView from "./components/WeeklyView/WeeklyView";

function App() {
  return (
    <div className="App">
      <main>
        <nav>

        </nav>
        <div id='SelectedDay'>

        </div>
        <div id='HourlyView'>

        </div>
        <div id='WeeklyView'>
          <WeeklyView/>
        </div>

      </main>
    </div>
  );
}

export default App;
