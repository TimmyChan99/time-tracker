import { useState } from 'react';
import DateSelector from './DateSelector';

type Tracker = {
  date: string;
  startTime: string;
  endTime: string;
  totalHours: string;
  day: string;
};

function DateRow() {
  const tracker = {
    date: '',
    startTime: '',
    endTime: '',
    totalHours: '',
    day: '',
  };
  const [traker, setTraker] = useState<Tracker>(tracker);

  return (
    <ul>
      <li>
        <DateSelector />
      </li>
    </ul>
  );
}

export default DateRow;
