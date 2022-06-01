import Player from "@vimeo/player";
import throttle from "lodash.throttle";

    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

const timeOnStart = localStorage.getItem("videoplayer-current-time");
if (timeOnStart) {
    player.setCurrentTime(timeOnStart)
}

player.on('timeupdate', throttle(updateTime, 1000));

function updateTime(data) {
    localStorage.setItem("videoplayer-current-time", Number.parseInt(data.seconds))
}