function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("loading");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#instruction-input");
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.classList.add("loading");

  poemElement.innerHTML = `Generating poem about "${instructionInput.value}"...`;

  let apiKey = "25db17t7533c78o4da26332a44f6038e";
  let prompt = `User instruction: Generate a poem about ${instructionInput.value}`;
  let context =
    "You are a high perfect poem expert and love to write short poems. Your mission is to generate 4 lines poem. Make sure to follow the user instructions and separate each line with a <br />. Sign the poem at the end as <strong>AI Poem</strong>.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayPoem);
}

document
  .querySelector("#Poem-Generator")
  .addEventListener("submit", generatePoem);
