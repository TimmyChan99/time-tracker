import DateRow from './components/DateRow';
import TrackerProvider from './TrackerProvider';

function App() {
  return (
    <TrackerProvider>
      <DateRow />
    </TrackerProvider>
  );
}

export default App;
