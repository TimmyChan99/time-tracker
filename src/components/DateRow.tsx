import { useState } from 'react';
import DateSelector from './DateSelector';
import TimeSelector from './TimeSelector';

type Tracker = {
  date: string;
  startTime: string;
  endTime: string;
  totalHours: number;
  day: string;
};

const tracker = {
  date: '',
  startTime: '',
  endTime: '',
  totalHours: 0,
  day: '',
};

function DateRow() {
  const [traker, setTraker] = useState<Tracker>(tracker);

  return (
    <div>
      <DateSelector />
      <div>
        <span>start time</span>
        <TimeSelector />
      </div>
      <div>
        <span>end time</span>
        <TimeSelector />
      </div>
      <div>
        <span>total hours</span>
        <span>{tracker.totalHours}</span>
      </div>
    </div>
  );
}

export default DateRow;
