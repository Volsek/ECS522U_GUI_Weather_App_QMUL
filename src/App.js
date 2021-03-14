import './App.css';
import WeeklyView from "./components/WeeklyView/WeeklyView";
import HourlyView from "./components/HourlyView/HourlyView";
function App() {
  return (
    <div className="App">
      <main>
        <nav>

        </nav>
        <div id='SelectedDay'>

        </div>
        <div id='HourlyView'>
          <HourlyView />
        </div>
        <div id='WeeklyView'>
          <WeeklyView/>
        </div>

      </main>
    </div>
  );
}

export default App;
