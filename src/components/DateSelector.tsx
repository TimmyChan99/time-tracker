import { ChangeEvent, useState } from 'react';

type DateType = {
  date: string;
  day: string;
};

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
  const day = dateInput.toLocaleString('default', { weekday: 'long' });
  return { dateString, day };
};

function DateSelector() {
  const [date, setDate] = useState<DateType>({
    date: '',
    day: '',
  });

  // Collect date and day from input
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { dateString, day } = setDateandDay(e.target.value);
    setDate({ date: dateString, day });
  };

  // Navigate to next and previous dates
  const handleDateNavigation = (action: string) => {
    const currentDate = new Date(date.date);
    const navigate = action === 'next' ? 1 : -1;
    currentDate.setDate(currentDate.getDate() + navigate);
    const { dateString, day } = setDateandDay(currentDate.toString());
    setDate({ date: dateString, day });
  };

  return (
    <div>
      <button type="button" onClick={() => handleDateNavigation('prev')}>
        prev
      </button>
      <input
        type="date"
        name="date"
        value={dateConverter(date.date)}
        onChange={(e) => handleDateChange(e)}
        required
      />
      <button type="button" onClick={() => handleDateNavigation('next')}>
        next
      </button>
      <div>{date.date}</div>
      <div>{date.day}</div>
    </div>
  );
}

export default DateSelector;
