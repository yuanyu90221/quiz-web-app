const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = (!mostRecentScore)?0:mostRecentScore;
username.addEventListener('keyup', ()=>{
  saveScoreBtn.disabled = !username.value;
});
saveHighScore = (e) => {
  e.preventDefault();
  console.log(`clicked the save button!`);
};