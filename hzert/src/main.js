const songs = [
  {
    name: "Tetris Theme",
    artist: "Hirokazu Tanaka",
    length: "1:24",
    image: "tetris.png",
    genre: "Video Game",
  },
  {
    name: "Enemy",
    artist: "Imagine Dragon",
    length: "3:34",
    image: "enemy.png",
    genre: "Pop",
  },
  {
    name: "All I Want For Christmas Is You",
    artist: "Mariah Carey",
    length: "4:01",
    image: "christmas.png",
    genre: "Holiday",
  },
  {
    name: "Die with a Smile",
    artist: "Lady Gaga & Bruno Mars",
    length: "4:12",
    image: "die.png",
    genre: "Pop",
  },
  {
    name: "Sweden",
    artist: "C418",
    length: "3:36",
    image: "minecraft.png",
    genre: "Video Game",
  },
  {
    name: "Never Gonna Give You Up",
    artist: "Rick Astley",
    length: "3:32",
    image: "rick.png",
    genre: "Pop",
  },
  {
    name: "Star Spangled Banner",
    artist: "Francis Scott Key",
    length: "2:23",
    image: "america.png",
    genre: "Anthem",
  },
  {
    name: "APT",
    artist: "ROSE & Bruno Mars",
    length: "2:54",
    image: "apt.png",
    genre: "Pop",
  },
  {
    name: "bad guy",
    artist: "Billie Eilish",
    length: "3:14",
    image: "badguy.png",
    genre: "Pop",
  },
  {
    name: "Blinding Lights",
    artist: "The Weeknd",
    length: "3:20",
    image: "blindinglight.png",
    genre: "Pop",
  },
  {
    name: "Shape of You",
    artist: "Ed Sheeran",
    length: "3:53",
    image: "shapeofyou.png",
    genre: "Pop",
  },
  {
    name: "Poker Face",
    artist: "Lady Gaga",
    length: "3:57",
    image: "pokerface.png",
    genre: "Pop",
  },
  {
    name: "Billie Jean",
    artist: "Michael Jackson",
    length: "4:54",
    image: "billiejean.png",
    genre: "Pop",
  },
  {
    name: "Bohemian Rhapsody",
    artist: "Queen",
    length: "5:55",
    image: "bohemian.png",
    genre: "Rock",
  },
  {
    name: "Happy",
    artist: "Pharrell Williams",
    length: "3:53",
    image: "happy.png",
    genre: "Pop",
  },
  {
    name: "Somebody that I used to Know",
    artist: "Gotye & Kimbra",
    length: "4:04",
    image: "somebody.png",
    genre: "Pop",
  }
];

songs.forEach((song) => {
  document.querySelector(".songcontainer").insertAdjacentHTML(
  "afterbegin",
  `<div class="card" data-genre="${song.genre}">
      <img src="${song.image}" />
      <h2>${song.name}</h2>
      <h3>${song.artist}</h3>
      <p>Length: ${song.length}</p>
      <button class="button" data-name="${song.name}">Add to Queue</button>
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

const filter = document.querySelectorAll(".filterbtn")
filter.forEach((button) =>
  button.addEventListener("click", function (event) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      const songGenre = card.dataset.genre;
      if (songGenre === event.target.textContent || event.target.textContent === "All") {
        card.style.display = "";
      } else {
        card.style.display = "none";
      }
    });
  })
);

document.querySelector(".addbtn").addEventListener("click", function() {
  const songadd = document.querySelector(".songadd");
  songadd.classList.toggle("open");
});

const imageUpload = document.querySelector("#imageUpload");
const imagePreview = document.querySelector("#imagePreview");

imageUpload.addEventListener("input", function () {
  const imageUrl = imageUpload.value.trim();

  if (!imageUrl) return;
  imagePreview.style.backgroundImage = `url(${imageUrl})`;
});
