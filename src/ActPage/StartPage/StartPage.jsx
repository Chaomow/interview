import React from "react";
import bg_StartPage from "./images/bg_StartPage.jpg";
import btn_TestStart from "./images/btn_Gametart.png";
import "./style/StartPage.css";

/*開始頁面*/
class StartPage extends React.Component {
  startGame = () => {
    this.props.changePage("GamePage");
  };

  render() {
    return (
      <div className="StartPage">
        <img src={bg_StartPage} alt="Start Page" className="bg_StartPage" />
        <img
          onClick={this.startGame}
          src={btn_TestStart}
          alt="Start Game"
          className="btn_Gametart"
        />
      </div>
    );
  }
}

export default StartPage;
