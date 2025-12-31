import { useState } from 'react';
import { questions, answerOptions } from '../data/questions';
import './QuestionPage.css';

export default function QuestionPage({ onComplete }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({});

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isAnswered = answers[currentQuestion.id] !== undefined;

  const handleAnswer = (score) => {
    const newAnswers = {
      ...answers,
      [currentQuestion.id]: score,
    };
    setAnswers(newAnswers);

    // 最後の質問なら結果を計算して完了
    if (currentQuestionIndex === questions.length - 1) {
      calculateAndSubmit(newAnswers);
    } else {
      // 次の質問へ
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    }
  };

  const calculateAndSubmit = (finalAnswers) => {
    // 各軸のスコアを初期化
    const scores = {
      LQ: 0,
      RD: 0,
      CH: 0,
      PF: 0,
    };

    // 各質問の回答を集計
    questions.forEach((question) => {
      const answerScore = finalAnswers[question.id] || 0;
      const score = question.reverse ? -answerScore : answerScore;
      scores[question.axis] += score;
    });

    onComplete(scores);
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  return (
    <div className="question-page">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-container">
        <div className="question-number">
          質問 {currentQuestionIndex + 1} / {questions.length}
        </div>

        <h2 className="question-text">{currentQuestion.text}</h2>

        <div className="answer-options">
          {answerOptions.map((option, index) => (
            <button
              key={index}
              className={`answer-button ${
                answers[currentQuestion.id] === option.score ? 'selected' : ''
              }`}
              onClick={() => handleAnswer(option.score)}
            >
              {option.label}
            </button>
          ))}
        </div>

        {currentQuestionIndex > 0 && (
          <button className="back-button" onClick={handleBack}>
            ← 前の質問に戻る
          </button>
        )}
      </div>
    </div>
  );
}
