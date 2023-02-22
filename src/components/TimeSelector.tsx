import { useState } from 'react';

function TimeSelector() {
  const [time, setTime] = useState(0);
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
    setTime(+e.target.value);
  };

  return (
    <select required onChange={(e) => handleChange(e)}>
      <option value="none" hidden>
        Select time
      </option>
      {hours}
    </select>
  );
}

export default TimeSelector;
