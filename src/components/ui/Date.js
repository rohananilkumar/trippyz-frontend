import React,{useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.module.css'

const Date = () => {
  
  const [selectedDate,setSelectedDate] =useState(null)
  return (
    <div>
      <DatePicker selected={selectedDate} 
      onChange={date => setSelectedDate(date)}/>
    </div>
  )
}

export default Date
