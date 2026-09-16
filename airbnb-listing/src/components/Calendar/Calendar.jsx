import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Calendar.css';

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year, month) {
  return new Date(year, month, 1).getDay();
}

export default function Calendar() {
  const initialStart = new Date(2026, 9, 18); // Oct 18, 2026
  const initialEnd = new Date(2026, 9, 23);   // Oct 23, 2026

  const [selectedStart, setSelectedStart] = useState(initialStart);
  const [selectedEnd, setSelectedEnd] = useState(initialEnd);
  const [baseMonth, setBaseMonth] = useState(new Date(2026, 9, 1)); // October 2026
  const [selectingEnd, setSelectingEnd] = useState(false);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const month1 = { year: baseMonth.getFullYear(), month: baseMonth.getMonth() };
  const nextMonthDate = new Date(baseMonth.getFullYear(), baseMonth.getMonth() + 1, 1);
  const month2 = { year: nextMonthDate.getFullYear(), month: nextMonthDate.getMonth() };

  const nights = useMemo(() => {
    if (selectedStart && selectedEnd) {
      return Math.round((selectedEnd - selectedStart) / (1000 * 60 * 60 * 24));
    }
    return 0;
  }, [selectedStart, selectedEnd]);

  const handlePrevMonth = () => {
    setBaseMonth(new Date(baseMonth.getFullYear(), baseMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setBaseMonth(new Date(baseMonth.getFullYear(), baseMonth.getMonth() + 1, 1));
  };

  const handleDateClick = (year, month, day) => {
    const clicked = new Date(year, month, day);
    if (clicked < today) return;

    if (!selectingEnd || !selectedStart) {
      setSelectedStart(clicked);
      setSelectedEnd(null);
      setSelectingEnd(true);
    } else {
      if (clicked <= selectedStart) {
        setSelectedStart(clicked);
        setSelectedEnd(null);
      } else {
        setSelectedEnd(clicked);
        setSelectingEnd(false);
      }
    }
  };

  const handleClearDates = () => {
    setSelectedStart(null);
    setSelectedEnd(null);
    setSelectingEnd(false);
  };

  const isSelected = (year, month, day) => {
    const d = new Date(year, month, day);
    return (selectedStart && d.getTime() === selectedStart.getTime()) ||
           (selectedEnd && d.getTime() === selectedEnd.getTime());
  };

  const isInRange = (year, month, day) => {
    if (!selectedStart || !selectedEnd) return false;
    const d = new Date(year, month, day);
    return d > selectedStart && d < selectedEnd;
  };

  const isDisabled = (year, month, day) => {
    const d = new Date(year, month, day);
    return d < today;
  };

  const formatDateRange = () => {
    if (!selectedStart) return '';
    const opts = { day: 'numeric', month: 'short', year: 'numeric' };
    const start = selectedStart.toLocaleDateString('en-GB', opts);
    if (!selectedEnd) return start;
    const end = selectedEnd.toLocaleDateString('en-GB', opts);
    return `${start} - ${end}`;
  };

  const renderMonth = ({ year, month }) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfWeek(year, month);
    const cells = [];

    // Empty cells before first day
    for (let i = 0; i < firstDay; i++) {
      cells.push(<div className="cal-cell cal-empty" key={`empty-${i}`} />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const selected = isSelected(year, month, day);
      const inRange = isInRange(year, month, day);
      const disabled = isDisabled(year, month, day);
      const isStart = selectedStart && new Date(year, month, day).getTime() === selectedStart.getTime();
      const isEnd = selectedEnd && new Date(year, month, day).getTime() === selectedEnd.getTime();

      cells.push(
        <button
          className={[
            'cal-cell',
            'cal-day',
            selected ? 'cal-selected' : '',
            inRange ? 'cal-in-range' : '',
            disabled ? 'cal-disabled' : '',
            isStart ? 'cal-range-start' : '',
            isEnd ? 'cal-range-end' : '',
          ].filter(Boolean).join(' ')}
          key={day}
          onClick={() => !disabled && handleDateClick(year, month, day)}
          disabled={disabled}
          type="button"
          aria-label={`${MONTH_NAMES[month]} ${day}, ${year}`}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="cal-month">
        <h3 className="cal-month-title">
          {MONTH_NAMES[month]} {year}
        </h3>
        <div className="cal-weekdays">
          {DAYS.map((d, i) => (
            <div className="cal-weekday" key={i}>{d}</div>
          ))}
        </div>
        <div className="cal-grid">{cells}</div>
      </div>
    );
  };

  return (
    <section className="calendar-section" id="calendar" aria-label="Calendar">
      <div className="cal-header">
        <div>
          <h2 className="cal-title">{nights} nights in Candolim</h2>
          <p className="cal-subtitle">{formatDateRange()}</p>
        </div>
      </div>
      <div className="cal-months-container">
        <button
          className="cal-nav-btn cal-nav-prev"
          onClick={handlePrevMonth}
          type="button"
          aria-label="Previous month"
        >
          <ChevronLeft size={16} />
        </button>
        <div className="cal-months">
          {renderMonth(month1)}
          {renderMonth(month2)}
        </div>
        <button
          className="cal-nav-btn cal-nav-next"
          onClick={handleNextMonth}
          type="button"
          aria-label="Next month"
        >
          <ChevronRight size={16} />
        </button>
      </div>
      <div className="cal-footer">
        <button className="cal-clear-btn" type="button" onClick={handleClearDates}>
          Clear dates
        </button>
      </div>
    </section>
  );
}
