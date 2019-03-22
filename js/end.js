const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = (!mostRecentScore)?0:mostRecentScore;
const highScores = JSON.parse(localStorage.getItem('highScores'))||[];
username.addEventListener('keyup', ()=>{
  saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e) => {
  e.preventDefault();
  console.log(`clicked the save button!`);
  const score = {
    score: mostRecentScore,
    name: username.value
  };
  highScores.push(score);
  highScores.sort((first, second)=>second.score - first.score);
  highScores.splice(5);
  localStorage.setItem('highScores', JSON.stringify(highScores));
  window.location.assign('./index.html');
};