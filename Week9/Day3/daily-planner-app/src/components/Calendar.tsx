import type { ChangeEvent } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { setSelectedDay } from '../features/planner/plannerSlice'

function Calendar() {
  const dispatch = useAppDispatch()
  const selectedDay = useAppSelector((state) => state.planner.selectedDay)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSelectedDay(event.target.value))
  }

  return (
    <div className="calendar">
      <label htmlFor="day-picker">Select a day:</label>
      <input
        id="day-picker"
        type="date"
        value={selectedDay}
        onChange={handleChange}
      />
    </div>
  )
}

export default Calendar
