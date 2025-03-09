const cssVar = (variable) =>
  getComputedStyle(document.documentElement).getPropertyValue(variable).trim();

let vantaEffect;
document.addEventListener("DOMContentLoaded", () => {
  vantaEffect = VANTA.TRUNK({
    el: "#vanta-bg",
    mouseControls: false,
    touchControls: false,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1,
    scaleMobile: 1.0,
    spacing: 1,
    chaos: 5.7,
    backgroundColor: 0x000,
    color: parseInt(cssVar("--sphere-color").substring(1), 16),
  });
});
window.addEventListener("resize", () => {
  vantaEffect.resize();
});
