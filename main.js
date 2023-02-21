(function() {

    const latto = document.getElementsByClassName('latto');
    const score = document.getElementById('score');
    const sound = document.getElementById('sound');
    const arena = document.querySelector('.arena');

    let speed = 8;
    let rotate = 10;
    let isPlay = false;
    let scoreValue =0;


    arena.onclick = function () {

        if(isPlay) {
            rotate = 10;
            scoreValue = 0;
            updatePositon();
            sound.pause();
        } else {
            sound.play();
        }

        isPlay = !isPlay;
    }

    function updateScore() {
        score.innerHTML= `Score : ${scoreValue}`;
    }

    function updatePositon() {
        latto[0].style.cssText= `transform: translate(40px, 0) rotate(${rotate}deg);`
        latto[1].style.cssText= `transform: translate(-40px, 0) rotate(-${rotate}deg);`

    }

    function updateGame() {
       if (isPlay) {
          rotate += speed;
          scoreValue += 1;
          updatePositon();
          updateScore();
       }
    }

    // initial call function
    updatePositon();
    setInterval(updateGame, 10);

} ())