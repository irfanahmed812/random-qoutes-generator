function randomQuote() {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayData(data))
}

function displayData(data) {
    document.getElementById('quote-id').innerText = data.quote;
}
