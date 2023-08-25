import React from 'react'
import './ExpenseFilter.css'

export default function ExpenseFilter(props) {
    const dropdownHandler = (event) => {
        props.onChangeFilter(event.target.value)
    }
    return (
        <div className='expense-filter'>
            <label>FILTER BY YEAR</label>
            <select value={props.selected} onChange={dropdownHandler}>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
            </select>
        </div>
    )
}
