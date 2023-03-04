import { useEffect } from 'react';
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';
import { Tracker, useTracker } from '../TrackerProvider';
import {
  DateRowContainer,
  TimeContainer,
  TotalContainer,
} from '../styles/main.style';

function DateRow({ tracker }: { tracker: Tracker }) {
  const { updateTracker, addTrackerToFirebase } = useTracker();

  // Calculate total hours
  const totalHours = () => {
    const startHour = +tracker.startTime;
    const endHour = +tracker.endTime;
    const total = endHour - startHour;
    if (total < 0) {
      updateTracker('totalHours', total + 24, tracker.id);
      addTrackerToFirebase({ ...tracker, totalHours: total + 24 });
      return;
    }
    updateTracker('totalHours', total, tracker.id);
    addTrackerToFirebase({ ...tracker, totalHours: total });
  };

  useEffect(() => {
    if (tracker.startTime === '' || tracker.endTime === '') return;
    totalHours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tracker.startTime, tracker.endTime]);

  return (
    <DateRowContainer>
      <DateSelector tracker={tracker} />
      <TimeContainer>
        <h5>start time</h5>
        <TimeSelector
          timeType="startTime"
          hour={tracker.startTime}
          id={tracker.id}
        />
      </TimeContainer>
      <TimeContainer>
        <h5>end time</h5>
        <TimeSelector
          timeType="endTime"
          hour={tracker.endTime}
          id={tracker.id}
        />
      </TimeContainer>
      <TotalContainer>
        <h5>Total Number of hours</h5>
        <span>{tracker.totalHours} Hours</span>
      </TotalContainer>
    </DateRowContainer>
  );
}

export default DateRow;
