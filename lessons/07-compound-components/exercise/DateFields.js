import React, { Fragment, useContext, createContext } from "react"

import { daysInMonth } from "app/utils"

const DateFieldsContext = createContext()
console.log(DateFieldsContext)

export default function DateFields({
  children,
  defaultValue,
  start,
  end,
  value: controlledValue,
  onChange
}) {
  const date = controlledValue || defaultValue
  const context = { date, onChange }
  console.log(context)
  // return <DateFieldsContext.Provider value={context} children={children} />
  return <DateFieldsContext.Provider value={{date, onChange} } children={children} />

}

export function DayField(props) {
  const { date, onChange } = useContext(DateFieldsContext)

  // const { date, onChange } = props
  // const { date, onChange } = useContext(DateFieldsContext)
  // console.log(useContext, "day field context")

  const month = date.getMonth()
  const year = date.getFullYear()
  const days = Array.from({ length: daysInMonth(month, year) })
  const value = date.getDate()
  // const handleChange = event => {
  //   const newDate = new Date(date.getTime())
  //   newDate.setDate(parseInt(event.target.value))
  //   onChange(newDate)
  // }


  // const difference = end - start + 1
  // const years = Array.from({ length: difference }).map(
  //   (_, index) => index + start
  // )
  const handleChange = event => {
    const newDate = new Date(date.getTime())
    newDate.setYear(parseInt(event.target.value), 1)
    onChange(newDate)
  }
  return (
    <select value={value} onChange={handleChange}{...props}>
      {days.map((_, index) => (
        <option key={index} value={index + 1}>
          {index < 9 ? "0" : ""}
          {index + 1}
        </option>
      ))}
    </select>
  )
}

export function MonthField(props) {
  // const { date, onChange } = props
  const { date, onChange } = useContext(DateFieldsContext)
  
  const month = date.getMonth()
  const handleChange = event => {
    const newDate = new Date(date.getTime())
    newDate.setMonth(parseInt(event.target.value))
    onChange(newDate)
  }

  return (
    <select value={month} onChange={handleChange}>
      <option value="0">01</option>
      <option value="1">02</option>
      <option value="2">03</option>
      <option value="3">04</option>
      <option value="4">05</option>
      <option value="5">06</option>
      <option value="6">07</option>
      <option value="7">08</option>
      <option value="8">09</option>
      <option value="9">10</option>
      <option value="10">11</option>
      <option value="11">12</option>
    </select>
  )
}

export function YearField({ start, end, ...rest }) {
  // const { date, onChange, start, end } = props
  const { date, onChange } = useContext(DateFieldsContext)

  
  const difference = end - start + 1
  const years = Array.from({ length: difference }).map(
    (_, index) => index + start
  )
  const handleChange = event => {
    const newDate = new Date(date.getTime())
    newDate.setYear(parseInt(event.target.value), 1)
    onChange(newDate)
  }

  return (
    <select value={date.getFullYear()} onChange={handleChange}>
      {years.map(year => (
        <option key={year}>{year}</option>
      ))}
    </select>
  )
}
