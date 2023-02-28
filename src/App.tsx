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
      <svg
        width="65"
        height="35"
        viewBox="0 0 65 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.32745 2.69386C3.36951 3.0753 2.28261 3.52894 1.37757 3.87292C0.550547 4.21954 0.515462 5.12751 1.29868 5.91491L12.2908 16.9365C12.6724 17.3436 13.2211 17.669 13.806 17.8348C14.391 18.0006 14.9595 17.992 15.3758 17.811C16.1483 17.4918 17.1461 17.0748 18.2275 16.6339C25.8457 13.5469 30.8263 16.5668 39.0839 23.663L50.4548 33.4028C50.8866 33.7732 51.4511 34.0444 52.0195 34.1546C52.5879 34.2647 53.1119 34.2044 53.472 33.9874L63.6868 27.8604C64.4115 27.4207 64.2848 26.4736 63.4019 25.7322C60.9919 23.6777 56.1995 19.5887 51.9007 15.8731C36.4079 2.4584 21.0955 -3.94895 4.32745 2.69386Z"
          fill="#2DA771"
        />
      </svg>

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
