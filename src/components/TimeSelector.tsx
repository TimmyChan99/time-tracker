import { useTracker } from '../TrackerProvider';
import DownArrow from '../images/arrow_drop_down.svg';

function TimeSelector({
  timeType,
  hour: hourInput,
  id,
}: {
  timeType: string;
  hour: string;
  id: string;
}) {
  const { updateTracker } = useTracker();

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
    if (timeType === 'startTime')
      updateTracker('startTime', e.target.value, id);
    if (timeType === 'endTime') updateTracker('endTime', e.target.value, id);
  };

  return (
    <select
      required
      onChange={(e) => handleChange(e)}
      style={{ backgroundImage: `url(${DownArrow})` }}
    >
      {hourInput === '' ? (
        <option value="none" hidden>
          Select time
        </option>
      ) : (
        <option value={+hourInput} hidden>
          {hourInput}:00
        </option>
      )}
      {hours}
    </select>
  );
}

export default TimeSelector;
