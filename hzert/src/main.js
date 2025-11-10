const songs = [
    {
    name: "Tetris Theme - Коробе́йники",
    length: "1:24",
    image: "src/assets/tetris.png"
    },
    
]

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
