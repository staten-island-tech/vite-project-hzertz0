const songs = [
  {
    name: "Tetris Theme - Коробе́йники",
    length: "1:24",
    image: "src/assets/tetris.png",
  },
  {
    name: "Imagine Dragon - Enemy",
    length: "3:34",
    image: "src/assets/enemy.png",
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
  {
    name: "ROSE & Bruno Mars - APT",
    length: "2:54",
    image: "src/assets/apt.png",
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
document.addEventListener("click", function (click) {
  if (click.target.classList.contains("button")) {
    const songname = click.target.dataset.name;
    const song = songs.find((song) => song.name === songname);
    const alreadyInQueue = queue.some(
      (queuedSong) => queuedSong.name === songname
    );

    if (song && !alreadyInQueue) {
      queue.push(song);
      document
        .querySelector(".songs")
        .insertAdjacentHTML(
          "afterbegin",
          `<p>${song.name} - ${song.length} Minutes</p>`
        );
    }
  }
});

document.querySelector(".openbtn").addEventListener("click", function () {
  const panel = document.querySelector(".panel");
  panel.classList.toggle("open");
});
