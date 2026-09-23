const minInput = document.getElementById("min");
const maxInput = document.getElementById("max");
const generateButton = document.getElementById("generateButton");
const result = document.getElementById("result");

generateButton.addEventListener("click", function () {

    const min = Number(minInput.value);
    const max = Number(maxInput.value);

    if (min >= max) {
        result.textContent = "❌";
        alert("Число 'Від' повинно бути меншим за число 'До'!");
        return;
    }

    const randomNumber = Math.floor(
        Math.random() * (max - min + 1)
    ) + min;

    result.textContent = randomNumber;
});