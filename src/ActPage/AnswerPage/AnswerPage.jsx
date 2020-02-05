import React from "react";
import Answer_Classical from "./images/Answer_Classical.png";
import Answer_OldFashion from "./images/Answer_OldFashion.png";
import Answer_Pop from "./images/Answer_Pop.png";
import Answer_Rock from "./images/Answer_Rock.png";
import "./style/AnswerPage.css";

class AnswerPage extends React.Component {
  render() {
    const point = this.props.totalPoint;
    let answer;

    if (point >= 3 && point <= 4) {
      answer = Answer_Classical;
    } else if (point >= 5 && point <= 7) {
      answer = Answer_OldFashion;
    } else if (point >= 8 && point <= 10) {
      answer = Answer_Pop;
    } else if (point >= 11 && point <= 12) {
      answer = Answer_Rock;
    }

    return (
      <div className="AnswerPage">
        <img src={answer} alt="Answer" className="bg_AnswerPage" />
      </div>
    );
  }
}

export default AnswerPage;
