import React from 'react'
import BudgetList from './BudgetList'
import BudgetForm from './BudgetForm'
import superagent from 'superagent'

export default class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            budgets: []
        }
    }


    componentDidMount () {

        const url = 'http:/localhost:8000/api/v1/budgets/'

        superagent
            .get(url)
            .set('authorization', `Token ${this.props.token}`)
            .then()

    }

    render() {
        return <section>
            <h1>Main</h1>
            <BudgetList budgets={this.state.budgets}/>
            <BudgetForm />
        </section>
    }
}