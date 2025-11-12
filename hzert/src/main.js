const songs = [
  {
    name: "Tetris Theme - Коробе́йники",
    length: "1:24",
    image: "src/assets/tetris.png",
  },
  {
    name: "All I Want For Christmas Is You",
    length: "4:01",
    image: "src/assets/christmas.png",
  },
  {
    name: "Die with a Smile",
    length: "4:12",
    image: "src/assets/die.png",
  },
  {
    name: "Sweden",
    length: "3:36",
    image: "src/assets/minecraft.png",
  },
  {
    name: "Never Gonna Give You Up",
    length: "3:32",
    image: "src/assets/rick.png",
  },
  {
    name: "U.S. National Anthem",
    length: "2:23",
    image: "src/assets/america.png",
  },
  {
    name: "Undertale - Megalovania",
    length: "2:36",
    image: "src/assets/sans.png",
  },
];

songs.forEach((song) => {
  document.querySelector(".songcontainer").insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
            <img src="${song.image}" />
            <h2>${song.name}</h2>
            <p>Length: ${song.length}</p>
            <button class ="button" data-name="${song.name}"> Add to Queue</button>
    </div>`
  );
});

document.querySelector(".modebtn").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});

const queue = [];
document.querySelector(".button").addEventListener("click", function () {
    const songname = click.target.dataset.name;
    const song = songs.find((song) => song.name === songname);
    if (song){
      queue.push(song);
    }
})

document.querySelector(".openbtn").addEventListener("click", function () {

})

