const Ball = new Ball(document.getElementId("Ball"));
const player1Paddle = new Paddle(document.getElementById("player1-paddle"));
const player2Paddle = new Paddle(document.getElementById("player2-paddle"));
const player1ScoreElem = document.getElementById("player1-score");
const player2ScoreElem = document.getElementById("player2-score");

let lastTiime
function update(time) {
	 if(lastTime != null){
	const delta = time - lastTime
	ball.update(delta, [player1Paddle.rect(), player2Paddle.rect()])
    player2Paddle.update(delta, ball.y)
    const hue = parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--hue")
    )

    document.documentElement.style.setProperty("--hue", hue + delta * 0.01)

    if (isLose()) handleLose()
  }

  lastTime = time
  window.requestAnimationFrame(update)
}

function isLose() {
  const rect = ball.rect()
  return rect.right >= window.innerWidth || rect.left <= 0
}

function handleLose() {
  const rect = ball.rect()
  if (rect.right >= window.innerWidth) {
    player1ScoreElem.textContent = parseInt(player1ScoreElem.textContent) + 1
  } else {
    player2ScoreElem.textContent = parseInt(player2ScoreElem.textContent) + 1
  }
  ball.reset()
  player2Paddle.reset()
}

document.addEventListener("mousemove", e => {
  player1Paddle.position = (e.y / window.innerHeight) * 100
})

window.requestAnimationFrame(update)
	/* These two lines of code allow the website to update/loop each time there is a movement on the screen */

	