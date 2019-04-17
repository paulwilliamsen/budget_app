import React from 'react'

export default props => (<li>
    <p>{props.budget.name}</p>
    <p>Total Budget: {props.budget.total_budget}</p>
</li>

)