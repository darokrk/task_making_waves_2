document.addEventListener("DOMContentLoaded", () => {
  const showMore = document.querySelector(".show-more");

  showMore.addEventListener("click", () => {
    document.getElementById("hidden-list").classList.toggle("active");
  });
});
