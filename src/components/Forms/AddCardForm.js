import React, { Component } from 'react';
import questionData from '../../helpers/data/questionData';

class AddCardForm extends Component {
  state = {
    firebaseKey: this.props.card?.firebaseKey || '',
    answer: this.props.card?.answer || '',
    question: this.props.card?.question || '',
  }

  componentDidMount() {
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    questionData.addQuestion(this.state).then(() => {
      this.props.onUpdate();
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type='text'
          name='question'
          value={this.state.question}
          onChange={this.handleChange}
          placeholder='Question'
          className='form-control form-control-lg m-1'
          required
        />
        <input
          type='text'
          name='answer'
          value={this.state.answer}
          onChange={this.handleChange}
          placeholder='Answer'
          className='form-control form-control-lg m-1'
          required
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default AddCardForm;
