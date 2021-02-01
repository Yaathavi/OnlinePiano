let keys = ["KeyA", "KeyS", "KeyD", "KeyF","KeyG","KeyH","KeyJ","KeyW","KeyE", "KeyT", "KeyY", "KeyU"]

document.addEventListener("keydown", function(event) {
    //if key that was pressed (event.code) is included in the keys array do this
    if (keys.includes(event.code)) {
        let audio = new Audio(`${event.key}.mp3`);
        audio.play();

        console.log(`The '${event.key}' key was pressed`);
    }
    else {
        console.log("Incorrect key press!")
    }
});

