// 8つの質問データ
// axis: どの軸に関する質問か (LQ, RD, CH, PF)
// reverse: trueの場合、スコアを反転する(右側の文字に寄せる)
export const questions = [
  {
    id: 1,
    text: '人が集まる場に行くと、元気が出る',
    axis: 'LQ',
    reverse: false,  // Lが正
  },
  {
    id: 2,
    text: 'ひとりの時間がないとしんどくなる',
    axis: 'LQ',
    reverse: true,   // Qが正(逆向き)
  },
  {
    id: 3,
    text: '物事は「今どうするか」を考えることが多い',
    axis: 'RD',
    reverse: false,  // Rが正
  },
  {
    id: 4,
    text: '先のことや理想の展開を想像するのが好き',
    axis: 'RD',
    reverse: true,   // Dが正
  },
  {
    id: 5,
    text: '決断するときは、感情よりも筋が通っているかを重視する',
    axis: 'CH',
    reverse: false,  // Cが正
  },
  {
    id: 6,
    text: '自分や人の気持ちを優先して選択することが多い',
    axis: 'CH',
    reverse: true,   // Hが正
  },
  {
    id: 7,
    text: '予定が決まっていると安心する',
    axis: 'PF',
    reverse: false,  // Pが正
  },
  {
    id: 8,
    text: 'その場のノリや気分で動くのが楽しい',
    axis: 'PF',
    reverse: true,   // Fが正
  },
];

// 回答の選択肢
export const answerOptions = [
  { label: 'とてもあてはまる', score: 2 },
  { label: 'わりとあてはまる', score: 1 },
  { label: 'どちらともいえない', score: 0 },
  { label: 'あまりあてはまらない', score: -1 },
  { label: '全くあてはまらない', score: -2 },
];
