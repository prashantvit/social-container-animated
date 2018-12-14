export const visibleLength = 20;
const width = 250;
const timer = {
  open: 50,
  close: 10
};
const margin = 10;
export const createSocialElement = () => {
  const social = document.createElement("div");
  social.className = "social";
  social.style.width = `${width}px`;
  social.style.left = `${window.innerWidth - visibleLength}px`;
  document.body.appendChild(social);
  return social;
};
export const openSocial = social => {
  const { open } = timer;
  clearInterval(window.closeInterval);
  window.openInterval = window.setInterval(() => {
    if (parseInt(social.style.left) <= window.innerWidth - width + margin) {
      clearInterval(window.openInterval);
    }
    social.style.left = `${parseInt(social.style.left) - margin}px`;
  }, open);
};
export const closeSocial = social => {
  const { close } = timer;
  clearInterval(window.openInterval);
  window.closeInterval = window.setInterval(() => {
    if (parseInt(social.style.left) >= window.innerWidth - 3 * margin) {
      clearInterval(window.closeInterval);
    }
    social.style.left = `${parseInt(social.style.left) + margin}px`;
  }, close);
};
