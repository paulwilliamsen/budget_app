import React, { Component } from 'react'
import BudgetList from './BudgetList'
import BudgetForm from './BudgetForm'
import superagent from 'superagent'

export default class Main extends Component {

  constructor(props) {
    super(props)
    this.state = {
      budgets: []
    }
  }

  componentDidMount() {

    const url = 'http://localhost:8000/api/v1/budgets/'

    superagent
      .get(url)
      .set('Authorization', `Token ${this.props.token}`)
      .then(response => {
        this.setState({
            budgets: response.body
        })
      })
  }

  render() {
    return <section>
      <h1>Main</h1>
      <BudgetList budgets={this.state.budgets} />
      <BudgetForm token={this.props.token} />
    </section>
  }
}