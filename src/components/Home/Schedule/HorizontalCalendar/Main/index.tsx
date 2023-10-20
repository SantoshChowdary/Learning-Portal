import React, { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import './index.css'


const generateDates = () => {
    const currentDate = new Date();
    const dateArray = [];
    for (let i = 0; i < 300; i++) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
};


const HorizontalCalendar = () => {
  const [dates, setDates] = useState(generateDates())
  const [selectedDate, setSelectedDate] = useState(null)
  const [transform, setTransform] = useState(0)

  console.log(dates.length)

  const generateFutureDate = () => {
    if ((dates[dates.length -1].getFullYear() < 1970) || dates[dates.length -1].getFullYear() >= 2030){
      return null
    }
    const currentDate = new Date(dates[dates.length-1].getDate() + 1);
    const dateArray = [];
    for (let i = 0; i < 10; i++) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    const newDatesArr = [ ...dates, ...dateArray];
    setDates(newDatesArr)
  }


  const handleLeftArrowClick = () => {
    setTransform(transform + 200)
    // generatePastDates()
  };

  const handleRightArrowClick = () => {
    setTransform(transform - 200)
    generateFutureDate()
  };

  const handleDayClick = (date : any, index: number) => {
    console.log(date)
    setSelectedDate(date);
    setTransform(transform - 500)
  
  };

  return (
    <div className="horizontal-calendar">
      <div className="arrow left-arrow" onClick={handleLeftArrowClick}>< AiFillCaretLeft /></div>
      <div className='calendar-menu-wrapper'>
        <div className="calendar-container" style={{transform : `translate3d(${transform}px, 0px, 0px )`}}>
          {dates.map((date :any, index:number) => (
            <button
              key={uuidv4()}
              className="day"
              
              onClick={() => handleDayClick(date, index)}
              disabled={date.getDay() === 0}
            >
              <div className="day-name">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className={`date ${date === selectedDate ? 'selected' : ''}`}>
                  <p>{date.getDate()}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <div className="arrow right-arrow" onClick={handleRightArrowClick}><AiFillCaretRight /></div>
    </div>
  );
};

export default HorizontalCalendar;