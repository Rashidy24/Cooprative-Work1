window.addEventListener("blur", function() {
    ourTitle = "Is that all? 😞";
    this.document.title = ourTitle
})
window.addEventListener("focus", function() {
    ourTitle = "Let's build something 😉";
    this.document.title = ourTitle
})