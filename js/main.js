// Enter your JavaScript for the solution here...
const image = document.querySelector(".meme-display img");
const placeHolderSrc = image.src
const topText = document.querySelector('p.top-text');
const bottomText = document.querySelector('p.bottom-text');
const form = document.querySelector("form.meme-form");
const memeImageDropdown = document.getElementById("meme-image");
const topTextInput = document.getElementById("meme-top-text");
const bottomTextInput = document.getElementById("meme-bottom-text");
const errorDiv = document.querySelector('.sidebar .error');

const resetPreview = () => {
    errorDiv.innerHTML = "";
    image.src = placeHolderSrc;
    topText.innerHTML = '';
    bottomText.innerHTML = '';
}

memeImageDropdown.addEventListener("change", (evt) => {
    const memeImage = memeImageDropdown.value;
    if (memeImage === "") {
        resetPreview();
        return;
    }
    image.src = "img/" + memeImage + ".png";
})

form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    resetPreview();

    const memeImage = memeImageDropdown.value;
    if (memeImage === "") {
        errorDiv.innerHTML = "Please Select an Image";
        return;
    }

    if (topTextInput.value === '') {
        errorDiv.innerHTML = "Please Type a Top Caption";
        return;
    }

    if (bottomTextInput.value === '') {
        errorDiv.innerHTML = "Please Type a Bottom Caption";
        return;
    }

    image.src = "img/" + memeImage + ".png";

    topText.innerHTML = topTextInput.value;
    bottomText.innerHTML = bottomTextInput.value;
});

form.addEventListener('reset', (evt) => {
    resetPreview();
})