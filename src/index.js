function generatePoem(event) {
  event.preventDefault();
  new Typewriter("#poem", {
    strings: "Do not go gentle into that good night,",
    autoStart: true,
    delay: 100,
    cursor: "",
  });
}
let poemGenerator = document.querySelector("#Poem-Generator");
poemGenerator.addEventListener("submit", generatePoem);
