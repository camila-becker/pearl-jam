const showLyric = document.getElementById("letra");
const button = document.getElementById("button");

button.addEventListener('click', getLyrics);

async function getLyrics(){
    const result = await fetch("https://api.lyrics.ovh/v1/Pearl Jam/Yellow LedBetter");
    const resultJson = await result.json();
    console.log(resultJson);
    showLyric.innerText = resultJson.lyrics;
}