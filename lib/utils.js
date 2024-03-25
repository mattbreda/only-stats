export const ScrollIntoView = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollTo({ behavior: "smooth", block: "start" });
  }
};

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
