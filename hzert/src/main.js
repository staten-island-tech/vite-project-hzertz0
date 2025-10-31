const songs = [
    {
    name: "Grayton",
    length: "2:00",
    image: "src/assets/us.png"
    },
]

songs.forEach((song) => {
  document.querySelector(".container").insertAdjacentHTML(
    "afterbegin",
    `<div class="card">
            <h2>${song.name}</h2>
            <img src="${song.image}" />
            <p>Length: ${song.length}</p>
        </div>`
  );
});

document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
});
