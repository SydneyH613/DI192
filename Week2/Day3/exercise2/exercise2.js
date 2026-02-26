function myMove() {
  const box = document.getElementById("animate");
  let position = 0;

  const containerWidth = 400;
  const boxWidth = 50;
  const maxPosition = containerWidth - boxWidth;

  const interval = setInterval(frame, 1);

  function frame() {
    if (position >= maxPosition) {
      clearInterval(interval);
    } else {
      position++;
      box.style.left = position + "px";
    }
  }
}
