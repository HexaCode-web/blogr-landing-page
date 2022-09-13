const list1 = document.querySelector("#list1");
const list2 = document.querySelector("#list2");
const list3 = document.querySelector("#list3");
const menuBTN = document.querySelector("#menuBtn");
const mobMenu = document.querySelector("#mobMenu");
const nav = document.querySelector("#nav");
const right = document.querySelector("#right");
const selected = document.createElement("div");
const selectedMenu1 = document.createElement("div");
const selectedMenu2 = document.createElement("div");
const selectedMenu3 = document.createElement("div");
const arr = [selectedMenu1, selectedMenu2, selectedMenu3];
const width = window.innerWidth;
let clicks = 0;
for (i = 0; i < 3; i++) {
  arr[i].innerHTML = `
<a href="#"> Contact </a>
<a href="#">Newsletter </a>
<a href="#">LinkedIn</a>
`;
  arr[i].classList.add("listItems");
  arr[i].classList.add("inactive");
}
selected.classList.add("focus");
if (width < 450) {
  menuBTN.style.display = "block";
  mobMenu.appendChild(list1);
  mobMenu.appendChild(list2);
  mobMenu.appendChild(list3);
  mobMenu.appendChild(right);
  list1.addEventListener("click", () => {
    list1.appendChild(selected);
    selected.classList.remove("inactive");
    selectedMenu3.classList.add("inactive");
    selectedMenu2.classList.add("inactive");
    selectedMenu1.classList.toggle("inactive");
    list1.appendChild(selectedMenu1);
  });
  list2.addEventListener("click", () => {
    list2.appendChild(selected);
    selected.classList.remove("inactive");
    selectedMenu3.classList.add("inactive");
    selectedMenu2.classList.toggle("inactive");
    selectedMenu1.classList.add("inactive");
    list2.appendChild(selectedMenu2);
  });

  list3.addEventListener("click", () => {
    list3.appendChild(selected);
    selected.classList.remove("inactive");
    selectedMenu3.classList.toggle("inactive");
    selectedMenu2.classList.add("inactive");
    selectedMenu1.classList.add("inactive");
    list3.appendChild(selectedMenu3);
  });
} else {
  list1.addEventListener("mouseover", () => {
    list1.appendChild(selected);
    selected.classList.remove("active");
    selectedMenu1.classList.remove("inactive");
    selectedMenu2.classList.add("inactive");
    selectedMenu3.classList.add("inactive");
    list1.appendChild(selectedMenu1);
  });
  list2.addEventListener("mouseover", () => {
    list2.appendChild(selected);
    selected.classList.remove("inactive");
    selectedMenu2.classList.remove("inactive");
    selectedMenu1.classList.add("inactive");
    selectedMenu3.classList.add("inactive");
    list2.appendChild(selectedMenu2);
  });

  list3.addEventListener("mouseover", () => {
    list3.appendChild(selected);
    selected.classList.remove("inactive");
    selectedMenu3.classList.remove("inactive");
    selectedMenu2.classList.add("inactive");
    selectedMenu1.classList.add("inactive");
    list3.appendChild(selectedMenu3);
  });

  nav.appendChild(list1);
  nav.appendChild(list2);
  nav.appendChild(list3);
  document.addEventListener("scroll", () => {
    selectedMenu3.classList.add("inactive");
    selectedMenu2.classList.add("inactive");
    selectedMenu1.classList.add("inactive");
  });
}
menuBTN.addEventListener("click", () => {
  clicks++;
  if (clicks % 2 === 1) {
    mobMenu.style.display = "flex";
  } else {
    mobMenu.style.display = "none";
  }
});
