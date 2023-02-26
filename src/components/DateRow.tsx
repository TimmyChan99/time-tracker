import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import { Tracker } from '../TrackerProvider';

function DateRow({ tracker }: { tracker: Tracker }) {
  // Calculate total hours
  const totalHours = () => {
    const startHour = +tracker.startTime;
    const endHour = +tracker.endTime;
    const total = endHour - startHour;
    if (total < 0) return <span>{total + 24}</span>;
    return <span>{total}</span>;
  };

  return (
    <div>
      <DateSelector date={tracker.date} day={tracker.day} id={tracker.id} />
      <div>
        <span>start time</span>
        <TimeSelector
          timeType="startTime"
          hour={tracker.startTime}
          id={tracker.id}
        />
      </div>
      <div>
        <span>end time</span>
        <TimeSelector
          timeType="endTime"
          hour={tracker.endTime}
          id={tracker.id}
        />
      </div>
      <div>
        <span>total hours</span>
        {totalHours ? totalHours() : <span>0</span>}
      </div>
    </div>
  );
}

export default DateRow;
