import React from 'react';
import QuestionData from '../../helpers/data/questionData';
import AnswerCard from '../../components/Cards/AnswerCard';
import QuestionCard from '../../components/Cards/QuestionCard';
import AppModal from '../../components/AppModal';
import AddCardForm from '../../components/Forms/AddCardForm';

export default class FlashCard extends React.Component {
  state = {
    flashcards: [],
    currentCard: {},
    asnwer: false,
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    if (!this.state.answer) {
      QuestionData.getQuestions().then((response) => {
        this.setState({
          flashcards: response,
          currentCard: response[0],
        });
      });
    } else {
      const { flashcards } = this.state;
      const nextQuestion = flashcards.indexOf(this.state.currentCard) + 1;
      this.setState({
        answer: false,
        currentCard: flashcards[nextQuestion] || flashcards[0],
      });
    }
  }

  showAnswerToQuestion = (e) => {
    e.preventDefault();
    this.setState({
      answer: true,
    });
  }

  render() {
    const { answer, currentCard } = this.state;
    const showQuestion = () => <QuestionCard key={currentCard.firebaseKey} card={currentCard} showAnswer={this.showAnswerToQuestion} />;
    const showAnswer = () => <AnswerCard key={currentCard.firebaseKey} card={currentCard} showNextQuestion={this.loadData} />;
    return (
        <>
        <AppModal title={'Add Flashcard'} buttonLabel={'Add Flashcard'}>
          <AddCardForm onUpdate={this.loadData}/>
        </AppModal>
        <div className="flash-card d-flex flex-wrap justify-content-center">
          { answer ? showAnswer() : showQuestion() }
        </div>
        </>
    );
  }
}
