const queries = new URLSearchParams(window.location.search)
const selected = queries.get("selected")

document.getElementById('yourNumber').textContent = selected
