const input = document.querySelector('input');
const btnSearch = document.querySelector('button');
const definitionBox = document.querySelector('p');

btnSearch.addEventListener('click', function () {
  const searchWord = fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`
  )
    .then((response) => response.json())
    .then(
      (data) =>
        (definitionBox.textContent =
          data[0].meanings[0].definitions[0].definition)
    );
});
