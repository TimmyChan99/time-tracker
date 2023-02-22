import { ChangeEvent, useState } from 'react';

type DateType = {
  date: string;
  day: string;
};

// yyyy-mm-dd format
const dateConverter = (date: string) => {
  const dateInput = new Date(date);
  const day =
    dateInput.getDay() > 9 ? dateInput.getDay() : `0${dateInput.getDay()}`;
  const month =
    dateInput.getMonth() + 1 > 9
      ? dateInput.getMonth() + 1
      : `0${dateInput.getMonth() + 1}`;
  const year = dateInput.getFullYear();
  return `${year}-${month}-${day}`;
};

function DateSelector() {
  const [date, setDate] = useState<DateType>({
    date: '',
    day: '',
  });
  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateInput = new Date(e.target.value);
    const dateString = dateInput.toLocaleDateString('en-GB', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    const day = dateInput.toLocaleString('default', { weekday: 'long' });
    setDate({ date: dateString, day });
  };
  return (
    <div>
      <input
        type="date"
        name="date"
        value={dateConverter(date.date)}
        onChange={(e) => handleDateChange(e)}
        required
      />
      <button
        type="button"
        onClick={() => {
          console.log('clicked');
        }}
      >
        next
      </button>
      <div>{date.date}</div>
      <div>{date.day}</div>
    </div>
  );
}

export default DateSelector;
