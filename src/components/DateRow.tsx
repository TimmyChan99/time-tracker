import { useEffect } from 'react';
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import { Tracker, useTracker } from '../TrackerProvider';

function DateRow({ tracker }: { tracker: Tracker }) {
  const { updateTracker } = useTracker();

  // Calculate total hours
  const totalHours = () => {
    const startHour = +tracker.startTime;
    const endHour = +tracker.endTime;
    const total = endHour - startHour;
    if (total < 0) {
      updateTracker('totalHours', total + 24, tracker.id);
    }
    updateTracker('totalHours', total, tracker.id);
    return tracker.totalHours;
  };

  useEffect(() => {
    if (tracker.startTime === '' || tracker.endTime === '') return;
    totalHours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracker.startTime, tracker.endTime]);

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
        <span>{tracker.totalHours}</span>
      </div>
    </div>
  );
}

export default DateRow;
