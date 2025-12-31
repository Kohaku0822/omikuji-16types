import { results, calculateTypeCode } from '../data/results';
import './ResultPage.css';

export default function ResultPage({ scores, onReset }) {
  const typeCode = calculateTypeCode(scores);
  const result = results[typeCode];

  // X(Twitter)シェア用テキスト
  const shareText = `16タイプおみくじの結果: ${result.title} (${typeCode})\n\n${result.yearTip}`;

  const handleShare = () => {
    const tweetText = encodeURIComponent(shareText);
    const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="result-page">
      <div className="result-container">
        <div className="result-header">
          <h1 className="result-label">あなたのタイプは...</h1>
          <div className="type-code">{typeCode}</div>
          <h2 className="type-title">{result.title}</h2>
        </div>

        <div className="result-content">
          <div className="description-section">
            <h3>タイプの特徴</h3>
            {result.description.map((desc, index) => (
              <p key={index} className="description-text">
                {desc}
              </p>
            ))}
          </div>

          <div className="tip-section">
            <h3>🎍 今年の一言</h3>
            <p className="year-tip">{result.yearTip}</p>
          </div>

          <div className="lucky-section">
            <h3>✨ {result.lucky}</h3>
          </div>

          <div className="scores-section">
            <h3>あなたの軸スコア</h3>
            <div className="scores-grid">
              <div className="score-item">
                <span className="score-label">社交性</span>
                <div className="score-bar">
                  <span className="score-left">L</span>
                  <div className="score-track">
                    <div
                      className="score-indicator"
                      style={{
                        left: `${((scores.LQ + 4) / 8) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="score-right">Q</span>
                </div>
              </div>

              <div className="score-item">
                <span className="score-label">思考の向き</span>
                <div className="score-bar">
                  <span className="score-left">R</span>
                  <div className="score-track">
                    <div
                      className="score-indicator"
                      style={{
                        left: `${((scores.RD + 4) / 8) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="score-right">D</span>
                </div>
              </div>

              <div className="score-item">
                <span className="score-label">判断基準</span>
                <div className="score-bar">
                  <span className="score-left">C</span>
                  <div className="score-track">
                    <div
                      className="score-indicator"
                      style={{
                        left: `${((scores.CH + 4) / 8) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="score-right">H</span>
                </div>
              </div>

              <div className="score-item">
                <span className="score-label">行動スタイル</span>
                <div className="score-bar">
                  <span className="score-left">P</span>
                  <div className="score-track">
                    <div
                      className="score-indicator"
                      style={{
                        left: `${((scores.PF + 4) / 8) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="score-right">F</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="result-actions">
          <button className="share-button" onClick={handleShare}>
            📤 結果をシェア
          </button>
          <button className="restart-button" onClick={onReset}>
            🔄 もう一度診断する
          </button>
        </div>

        <p className="disclaimer">
          ※ MBTIとは一切関係ありません。正月のノリです。
        </p>
      </div>
    </div>
  );
}
