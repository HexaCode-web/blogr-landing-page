const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const selected = document.createElement("div");
const selectedMenu = document.createElement("div");
selectedMenu.innerHTML = `
<a href="#"> Contact </a>
<a href="#">Newsletter </a>
<a href="#">LinkedIn</a>
`;
selectedMenu.classList.add("listItems");
selected.classList.add("focus");

list1.addEventListener("mouseover", () => {
  list1.appendChild(selected);
  selected.classList.remove("inactive");
  selectedMenu.classList.remove("inactive");
  list1.appendChild(selectedMenu);
});
list2.addEventListener("mouseover", () => {
  list2.appendChild(selected);
  selected.classList.remove("inactive");
  selectedMenu.classList.remove("inactive");
  list2.appendChild(selectedMenu);
});

list3.addEventListener("mouseover", () => {
  list3.appendChild(selected);
  selected.classList.remove("inactive");
  selectedMenu.classList.remove("inactive");
  list3.appendChild(selectedMenu);
});
document.addEventListener("scroll", () => {
  selected.classList.add("inactive");
  selectedMenu.classList.add("inactive");
});
