document.onkeydown = keydown;

function keydown(evt) {
  if (evt.metaKey && evt.keyCode === 82) {
    evt.preventDefault();
  }
}
