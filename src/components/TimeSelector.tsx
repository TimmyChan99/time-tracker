import { useTracker } from '../TrackerProvider';

function TimeSelector({ time }: { time: string }) {
  const { tracker, updateTracker } = useTracker();
  const { startTime } = tracker;

  const hours = [...Array(24).keys()].map((i) => {
    const hour = i < 13 ? i : i - 12;
    const meridiem = i < 12 ? 'AM' : 'PM';
    return (
      <option key={i} value={i}>
        {hour}:00 {meridiem}
      </option>
    );
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (time === 'startTime') updateTracker('startTime', e.target.value);
    if (time === 'endTime') updateTracker('endTime', e.target.value);
  };

  return (
    <select required onChange={(e) => handleChange(e)}>
      {startTime === '' ? (
        <option value="none" hidden>
          Select time
        </option>
      ) : (
        <option value={+startTime} hidden>
          {startTime}:00
        </option>
      )}
      {hours}
    </select>
  );
}

export default TimeSelector;
