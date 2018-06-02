import React from 'react';

export default class App extends React.Component {

  // your Javascript goes here
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '',
      output: ''
    };
    //event bind for onChange/onClick 
    this.handleChange = this.handleChange.bind(this);
    this.calculate = this.calculate.bind(this)
  };

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  calculate(e) {//use mortgage rate formula, set ouput
    e.preventDefault();
    let p = this.state.balance;
    let r = ((this.state.rate / 100) / 12);
    let n = this.state.term * 12;
    let m = (p * r * (Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)).toFixed(2);

    this.setState({
      output: `$${m} is your payment.`
    });
  }

  render() {
    return (//horizontal form 
      <div className='container'>
        <form class='form-horizontal' onChange={this.handleChange}>
          <div class='form-group' name='title'>
            <label><h3>Mortgage Calculator</h3></label>
          </div>
          <div class='form-group' name='input1'>
            <label>Loan Balance</label>
            <input name='balance' type='number' class='form-control' value={this.state.balance} onChange={this.handleChange} />
          </div>
          <div class='form-group' name='input2'>
            <label>{'Interest Rate (%)'}</label>
            <input name='rate' type='number' step='0.01' class='form-control' value={this.state.rate} onChange={this.handleChange} />
          </div>
          <div class='form-group' name='droplist'>
            <label>{'Loan Term (years)'}</label>
            <select name='term' value={this.state.term}>
              <option value='15'>15</option>
              <option value='30'>30</option>
            </select>
          </div>
          <div class='form-group' name='output'>
            <button name='submit' type='submit' class='btn btn-default' onClick={this.calculate}>Calculate</button>
            <div id='output' name='output' onChange={this.handleChange}>
              {this.state.output}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

