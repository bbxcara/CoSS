document.addEventListener('DOMContentLoaded', () => {
  const glow = document.querySelector('.cursor-glow');
  if (!glow) return;

  let x = 0, y = 0;

  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
  });

  // Smooth animation loop
  function tick() {
    glow.style.transform = `translate(${x}px, ${y}px)`; // CSS already has -50%,-50%
    requestAnimationFrame(tick);
  }
  tick();
});