import React from "react";
import bg_Q1 from "./images/bg_Q1.png";
import bg_Q2 from "./images/bg_Q2.png";
import bg_Q3 from "./images/bg_Q3.png";
import selected from "./images/selected.png";
import unselected from "./images/unselected.png";
import btn_submit from "./images/btn_submit.png";
import "./style/GametPage.css";

/*測驗頁面*/
class GamePage extends React.Component {
  state = {
    Game: this.props.questionList,
    bgSrc: [bg_Q1, bg_Q2, bg_Q3],
    selectedAnswer: 0, //所選擇的答案分數
    Answered: 0 //已做答題數
  };

  onChangeSelect = (point, event) => {
    this.setState({ selectedAnswer: point });
  };

  onClick = () => {
    const currentSelected = this.state.selectedAnswer; //選擇的答案
    const currentAnswered = this.state.Answered; //已回答的題數

    if (!currentSelected) {
      alert("請先選擇答案");
    } else {
      this.props.addPoint(currentSelected);
      this.setState({
        selectedAnswer: 0,
        Answered: currentAnswered + 1
      });
      if (currentAnswered === 2) this.props.changePage("AnswerPage");
    }
  };

  render() {
    const index = this.state.Answered;
    const bgSrc = this.state.bgSrc[index];
    const currentQuestion = this.state.Game[index];
    const currentSelected = this.state.selectedAnswer;
    let questionDivs;

    if (index < 3) {
      //組合選項
      const answerDivs = currentQuestion.Answer.map(answer => {
        return (
          <div
            className="optionAnswer"
            key={answer.point}
            onClick={this.onChangeSelect.bind(this, answer.point)}
          >
            <img
              src={currentSelected === answer.point ? selected : unselected}
              alt={answer.value}
              className="optionSelector"
            />
            <label className="optionValue">{answer.value}</label>
          </div>
        );
      });

      //組合頁面
      questionDivs = (
        <div>
          {/*背景圖片*/}
          <img
            src={bgSrc}
            alt={currentQuestion.Question}
            className="bg_GmaePage"
          />
          {/*問題題目*/}
          <div className="GameQuestion">{currentQuestion.Question}</div>
          {/*問題選項*/}
          <div className="AnswerList">{answerDivs}</div>
          {/*送出*/}
          <img
            onClick={this.onClick}
            src={btn_submit}
            alt="Submit"
            className="btn_submit"
          />
        </div>
      );
    }
    return <div className="GametPage">{questionDivs}</div>;
  }
}

export default GamePage;
