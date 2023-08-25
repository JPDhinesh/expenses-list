import React, { useState } from 'react'
import ExpenseFilter from './ExpenseFilter'
import ExpenseList from './ExpenseList'
import './Expenses.css'

export default function Expenses(props) {
    const [filteredYear, setFilteredyear] = useState(2021)

    const filterChangeHandler = (selectedYear) => {
        setFilteredyear(selectedYear)
    }

    const filteredExpense = props.item.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    return (
        <div className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
            <ExpenseList item={filteredExpense} />
        </div>
    )
}
