import React from "react";
import StartPage from "./StartPage";
import GamePage from "./GamePage";
import AnswerPage from "./AnswerPage";

class ActPage extends React.Component {
  state = {
    currentPage: "StartPage",
    totalPoint: 0,
    Data: {
      Q1: {
        Question:
          "過新年時你會選擇買下列哪一種主題的月曆掛在家裡陪你迎賓送客呢？",
        Answer: [
          {
            value: "異國風景",
            point: 3
          },
          {
            value: "美女明星",
            point: 2
          },
          {
            value: "可愛動物",
            point: 1
          },
          {
            value: "大師明畫",
            point: 4
          }
        ]
      },
      Q2: {
        Question: "去看電影買票之後，你是怎麼拿票的呢？",
        Answer: [
          {
            value: "把票放進口袋",
            point: 4
          },
          {
            value: "把票捲起來",
            point: 1
          },
          {
            value: "把票放進錢包內",
            point: 3
          },
          {
            value: "緊捏在手上",
            point: 2
          }
        ]
      },
      Q3: {
        Question: "每天出門你包包內一定會帶哪一樣物品呢？",
        Answer: [
          {
            value: "筆記本",
            point: 2
          },
          {
            value: "筆",
            point: 3
          },
          {
            value: "衛生紙",
            point: 1
          },
          {
            value: "水壺",
            point: 4
          }
        ]
      },
      Q4: {
        Question: "如果你突然有一個下午的空閒時間，你會選擇做什麼？",
        Answer: [
          {
            value: "好好在家睡一覺",
            point: 1
          },
          {
            value: "到戶外走走",
            point: 4
          },
          {
            value: "約好友到咖啡廳喝茶聊天",
            point: 3
          },
          {
            value: "看一部有意義的電影",
            point: 2
          }
        ]
      },
      Q5: {
        Question:
          "你正在坐船，周遭是一望無際的海洋，遠方突然有東西出現，你想那會是什麼？",
        Answer: [
          {
            value: "陸地",
            point: 1
          },
          {
            value: "另一艘船",
            point: 3
          },
          {
            value: "朝陽",
            point: 2
          },
          {
            value: "鯨魚",
            point: 4
          }
        ]
      },
      Q6: {
        Question:
          "你坐在鏡子前，正看著自己的時候，突然頭上出現天使般的光環，你覺得是什麼顏色的呢？",
        Answer: [
          {
            value: "紅色",
            point: 4
          },
          {
            value: "橘色",
            point: 2
          },
          {
            value: "水藍色",
            point: 3
          },
          {
            value: "綠色",
            point: 1
          }
        ]
      }
    }
  };

  //換頁
  changePage = page => {
    this.setState({
      currentPage: page
    });
  };

  addPoint = point => {
    const currentpoint = this.state.totalPoint;
    this.setState({
      totalPoint: parseInt(currentpoint) + parseInt(point)
    });
  };

  //隨機出題
  randomQuestion = () => {
    return "Q" + Math.floor(Math.random() * 6 + 1);
  };

  //預設題目
  setQuestions = () => {
    let myGame = [];
    let myQuestion = this.randomQuestion();
    let count = 0;

    while (count < 3) {
      if (!myGame.includes(myQuestion)) {
        myGame.push(myQuestion);
        count++;
      } else {
        myQuestion = this.randomQuestion();
      }
    }
    return myGame;
  };

  //取得題目資訊
  getQuestionData = () => {
    let myGame = this.setQuestions();
    return myGame.map(question => {
      return this.state.Data[question];
    });
  };

  render() {
    const currentPage = this.state.currentPage;
    let showPage;

    if (currentPage === "StartPage") {
      showPage = <StartPage changePage={this.changePage} />;
    } else if (currentPage === "GamePage") {
      showPage = (
        <GamePage
          questionList={this.getQuestionData()}
          addPoint={this.addPoint}
          changePage={this.changePage}
        />
      );
    } else if (currentPage === "AnswerPage") {
      showPage = <AnswerPage totalPoint={this.state.totalPoint} />;
    }
    return <div>{showPage}</div>;
  }
}

export default ActPage;
