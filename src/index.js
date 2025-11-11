function displayPoem(response) {
  console.log("Poem generated");
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
  let apiKey = "25db17t7533c78o4da26332a44f6038e";
  let prompt = `User instruction: Generate a poem about ${instructionInput.value}`;
  let context =
    "You are a high perfect poem expert and love to write short poems. Your mission is to generate 4 lines poem. Make sure to follow the user instructions and seperate each lines with a <br />. Sign the at the end of poem `AI Poem` and put it in the <strong> element";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  console.log(`Generating Poem`);
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}
let poemGenerator = document.querySelector("#Poem-Generator");
poemGenerator.addEventListener("submit", generatePoem);
