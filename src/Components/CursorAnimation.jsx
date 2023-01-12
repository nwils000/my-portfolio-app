import { useEffect } from "react";

export default function CursorAnimation() {
  const link = document.querySelectorAll(".name__wrapper > .hover-this");
  const cursor = document.querySelector(".cursor");

  const animateit = function (e) {
    const div = this.querySelector(".home__name");
    console.log(div);
    const { offsetX: x, offsetY: y } = e,
      { offsetWidth: width, offsetHeight: height } = this,
      move = 25,
      xMove = (x / width) * (move * 2) - move,
      yMove = (y / height) * (move * 2) - move;

    div.style.transform = `translate(${xMove}px, ${yMove}px)`;

    if (e.type === "mouseout") div.style.transform = "";
  };

  const editCursor = (e) => {
    const { clientX: x, clientY: y } = e;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  };

  link.forEach((b) => b.addEventListener("mousemove", animateit));
  link.forEach((b) => b.addEventListener("mouseout", animateit));
  window.addEventListener("mousemove", editCursor);
}
