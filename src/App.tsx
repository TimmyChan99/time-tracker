import DateRow from './components/DateRow';
import { useTracker } from './TrackerProvider';

function App() {
  const { addTracker, trackerList } = useTracker();
  const trackers = trackerList?.map((item) => (
    <li key={item.id}>
      <DateRow tracker={item} />
    </li>
  ));

  const hanldleClick = () => {
    addTracker();
  };

  const totalHours = trackerList.reduce((acc, item) => {
    return acc + item.totalHours;
  }, 0);

  return (
    <main>
      <button type="button" onClick={hanldleClick}>
        Add
      </button>
      <ul>{trackers.length === 0 ? 'no trakers' : trackers}</ul>
      <footer>
        <div>
          <p>
            <span>Total Day</span>
            <span>{trackers.length} days</span>
          </p>
        </div>
        <div>
          <p>
            <span>Total Hours</span>
            <span>{totalHours} Hours</span>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
