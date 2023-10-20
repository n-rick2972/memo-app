const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

showNotes = () => {
  notesContainer.innerHTML = localStorage.getItem("notes");
};
showNotes();

updateStorage = () => {
  localStorage.setItem("notes", notesContainer.innerHTML);
};

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");

  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.className = "delete";
  img.src = "trash.svg";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((note) => {
      note.onkeyup = () => {
        updateStorage();
      };
    });
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    document.execCommand("insertLineBreak");
    e.preventDefault();
  }
});
