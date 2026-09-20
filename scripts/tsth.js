
let cl = document.getElementsByClassName('card-link');

let maxHeight = 0;
let tallestElement = null;

for (let i = 0; i < cl.length; i++) {
  const height = cl[i].offsetHeight;

  if (height > maxHeight) {
    maxHeight = height;
    tallestElement = cl[i];
  }
}

for (let i = 0; i < cl.length; i++) {
    cl[i].style.height = maxHeight + "px";
}