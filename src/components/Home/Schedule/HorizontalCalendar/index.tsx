import React, { useState, useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';
import { updateSelectedDate } from '../../../../store/slices/scheduleSlice';
import { useDispatch } from 'react-redux';
import CompletionCircle from '../../../../utilities/completionCircle';
import './index.css'


const generateDates = () => {
    const currentDate = new Date("08-10-2023");
    const dateArray = [];
    for (let i = 0; i < 1000; i++) {
      dateArray.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dateArray;
};


const HorizontalCalendar = () => {
  const [dates, setDates] = useState(generateDates())
  const [selectedDate, setSelectedDate] = useState( new Date() )
  const [transform, setTransform] = useState(0) 
  const dateRef: any = useRef(null)
  const dispatch = useDispatch()

  // const generateFutureDate = () => {
  //   if ((dates[dates.length -1].getFullYear() < 2010) || dates[dates.length -1].getFullYear() >= 2030){
       
  //   } else {
  //     const currentDate = new Date(dates[dates.length-2].getDate() + 1);
  //     const dateArray = [];
  //     for (let i = 0; i < 50; i++) {
  //       dateArray.push(new Date(currentDate));
  //       currentDate.setDate(currentDate.getDate() + 1);
  //     }
  //     const newDatesArr = [ ...dates, ...dateArray];
  //     setDates(newDatesArr)
  //     }
    
  // }


  const handleLeftArrowClick = () => {
    setTransform(transform + 200)
  };

  const handleRightArrowClick = () => {
    setTransform(transform - 200)
  };

  const handleDayClick = (date : any, index: number) => {
    setSelectedDate(date);
    dispatch(updateSelectedDate(date.toLocaleDateString()))
    
    const dRef = document.getElementById(index.toString())
    // console.log(dateRef.current.scrollIntoView())
    dRef?.scrollIntoView({
      behavior: "smooth",
      inline: "center"
    })
  };

  

  return (
    <div className="horizontal-calendar">
      <div className="arrow left-arrow" onClick={handleLeftArrowClick}>< AiFillCaretLeft /></div>
      <div className='calendar-menu-wrapper'>
        <div className="calendar-container" style={{transform : `translate3d(${transform}px, 0px, 0px )`}}>
          {dates.map((date :any, index:number) => (
            <button
              key={uuidv4()}
              id={index.toString()}
              className="day"
              ref={dateRef}
              onClick={() => handleDayClick(date, index)}
              disabled={date.getDay() === 0}
            > 
              <div className="day-name">{date.toLocaleDateString('en-US', { weekday: 'short' })}</div>
              <div className={`date ${date === selectedDate ? 'selected' : ''}`}>
                  <p>{date.getDate()}</p>
                  {
                    (date.getDay()>0) &&
                      <div className="schedule-completion-circle">
                        <CompletionCircle availability_status={ "" ? "LOCKED" : ""} completion_percentage={100} />
                      </div>
                  }
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