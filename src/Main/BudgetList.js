import React from 'react'
import BudgetDetail from './BudgetDetail'

export default props => (
    <ul>
        {props.budgets.map(budget => (
            <li key={budget.id}>
                {budget.name}
                </li>
        ))}
    </ul>
)