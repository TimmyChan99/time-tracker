import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import { useTracker } from '../TrackerProvider';

function DateRow() {
  const { tracker } = useTracker();
  const { totalHours } = tracker;

  return (
    <div>
      <DateSelector />
      <div>
        <span>start time</span>
        <TimeSelector time="startTime" />
      </div>
      <div>
        <span>end time</span>
        <TimeSelector time="endTime" />
      </div>
      <div>
        <span>total hours</span>
        <span>{totalHours}</span>
      </div>
    </div>
  );
}

export default DateRow;
