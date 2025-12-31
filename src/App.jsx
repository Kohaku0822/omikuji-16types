import { useState } from 'react';
import QuestionPage from './components/QuestionPage';
import ResultPage from './components/ResultPage';
import './App.css';

function App() {
  const [page, setPage] = useState('start'); // 'start', 'question', 'result'
  const [scores, setScores] = useState(null);

  const handleStart = () => {
    setPage('question');
  };

  const handleComplete = (calculatedScores) => {
    setScores(calculatedScores);
    setPage('result');
  };

  const handleReset = () => {
    setScores(null);
    setPage('start');
  };

  if (page === 'result') {
    return <ResultPage scores={scores} onReset={handleReset} />;
  }

  if (page === 'question') {
    return <QuestionPage onComplete={handleComplete} />;
  }

  // スタート画面
  return (
    <div className="start-page">
      <div className="start-container">
        <h1 className="start-title">
          <span className="title-main">16タイプ</span>
          <span className="title-sub">おみくじ</span>
        </h1>

        <div className="start-description">
          <p>8つの質問に答えて、あなたのタイプを診断!</p>
          <p className="start-note">※ MBTIとは一切関係ありません</p>
        </div>

        <button className="start-button" onClick={handleStart}>
          🎍 診断を始める
        </button>

        <div className="axes-info">
          <h3>4つの軸</h3>
          <div className="axes-grid">
            <div className="axis-item">
              <span className="axis-label">社交性</span>
              <div className="axis-pair">
                <span>L (Loud)</span>
                <span>/</span>
                <span>Q (Quiet)</span>
              </div>
            </div>
            <div className="axis-item">
              <span className="axis-label">思考の向き</span>
              <div className="axis-pair">
                <span>R (Real)</span>
                <span>/</span>
                <span>D (Dream)</span>
              </div>
            </div>
            <div className="axis-item">
              <span className="axis-label">判断基準</span>
              <div className="axis-pair">
                <span>C (Cool)</span>
                <span>/</span>
                <span>H (Heart)</span>
              </div>
            </div>
            <div className="axis-item">
              <span className="axis-label">行動スタイル</span>
              <div className="axis-pair">
                <span>P (Plan)</span>
                <span>/</span>
                <span>F (Flow)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
