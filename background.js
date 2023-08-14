document.onkeydown = keydown;

function keydown(evt) {
  if ((evt.metaKey || evt.ctrlKey) && evt.keyCode === 82) {
    evt.preventDefault();
  }
}
