const cursor = document.querySelector(".custom-cursor");

function mouseMove(event) {
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
}

document.addEventListener("mousemove", mouseMove);
