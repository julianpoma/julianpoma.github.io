const bookNotesButton = document.querySelector("#book-notes-btn");
const projectsButton = document.querySelector("#projects-btn");

bookNotesButton.addEventListener("click", () => {
  const notes = document.getElementById("book-notes");
  toggle(notes);
});

projectsButton.addEventListener("click", () => {
  const projects = document.getElementById("projects-list");
  toggle(projects);
});

const toggle = (element) => {
  if (element.classList.contains("hidden")) {
    return element.classList.remove("hidden");
  }

  return element.classList.add("hidden");
};
