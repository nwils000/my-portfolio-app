export default function CursorAnimation() {
  const movable = document.querySelectorAll(".name__wrapper > .hover-this");
  const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const div = this.querySelector(".home__name");
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 80,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    div.style.transform = `translate(${xMove}px, ${yMove}px)`;
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  movable.forEach((b) => b.addEventListener("mousemove", animateit));
  window.addEventListener("mousemove", editCursor);
}
