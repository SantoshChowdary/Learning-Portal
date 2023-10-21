import React, { useState, useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { updateSelectedDate } from '../../../../../store/slices/scheduleSlice';
import { useDispatch } from 'react-redux';
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
  const dateRef : any = useRef(null)
  const dispatch = useDispatch()


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
    setSelectedDate(date);
    setTransform(transform - 100)
    // console.log("child",dateRef.current.getBoundingClientRect())
    // console.log("parent", dateRef.current.parentElement.getBoundingClientRect())
    
    dispatch(updateSelectedDate(date.toLocaleDateString()))
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
              ref={dateRef}
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