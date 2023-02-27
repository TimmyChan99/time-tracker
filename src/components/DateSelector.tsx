import { ChangeEvent, useState } from 'react';
import { useTracker } from '../TrackerProvider';

// yyyy-mm-dd format
const dateConverter = (date: string) => {
  const dateInput = new Date(date);
  const day =
    dateInput.getDate() > 9 ? dateInput.getDate() : `0${dateInput.getDate()}`;
  const month =
    dateInput.getMonth() + 1 > 9
      ? dateInput.getMonth() + 1
      : `0${dateInput.getMonth() + 1}`;
  const year = dateInput.getFullYear();
  return `${year}-${month}-${day}`;
};

// Set date and day from input. Example => date format: 21 February 2023, day format: Wednesday
const setDateandDay = (date: string) => {
  const dateInput = new Date(date);
  const dateString = dateInput.toLocaleDateString('en-GB', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const dayString = dateInput.toLocaleString('default', { weekday: 'long' });
  return { dateString, dayString };
};

// DateSelector component
function DateSelector({
  date,
  day,
  id,
}: {
  date: string;
  day: string;
  id: string;
}) {
  const { updateTracker } = useTracker();

  // Collect date and day from input
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { dateString, dayString } = setDateandDay(e.target.value);
    updateTracker('date', dateString, id);
    updateTracker('day', dayString, id);
  };

  // Navigate to next and previous dates
  const handleDateNavigation = (action: string) => {
    const currentDate = new Date(date);
    const navigate = action === 'next' ? 1 : -1;
    currentDate.setDate(currentDate.getDate() + navigate);
    const { dateString, dayString } = setDateandDay(currentDate.toString());
    updateTracker('date', dateString, id);
    updateTracker('day', dayString, id);
  };

  return (
    <div>
      <button type="button" onClick={() => handleDateNavigation('prev')}>
        prev
      </button>
      <input
        type="date"
        name="date"
        value={dateConverter(date)}
        onChange={(e) => handleDateChange(e)}
        required
      />
      <button type="button" onClick={() => handleDateNavigation('next')}>
        next
      </button>
      <div>{date}</div>
      <div>{day}</div>
    </div>
  );
}

export default DateSelector;
