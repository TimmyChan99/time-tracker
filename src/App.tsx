import DateRow from './components/DateRow';
import { useTracker } from './TrackerProvider';

function App() {
  const { tracker, addTracker, trackerList } = useTracker();
  const trackers = trackerList?.map((item) => (
    <li key={item.id}>
      <DateRow tracker={item} />
    </li>
  ));
  const hanldleClick = () => {
    addTracker(tracker);
    console.log(trackerList);
  };

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
            <span>days</span>
          </p>
        </div>
        <div>
          <p>
            <span>Total Hours</span>
            <span>Hours</span>
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
