/* JS Exercises
EX11) Write a function to add a new link into the navbar */
function addNewLinkToNavbar() {
  const navbar = document.querySelector("nav.nav")
  const link = document.createElement("a")
  link.classList.add("p-2", "text-muted")
  link.href = "#"
  link.innerText = "Another Link"

  navbar.appendChild(link)
}

/* addNewLinkToNavbar() */

/* EX12) Write a function to change the color of the main title */
function changeColorOfH1() {
  const h1 = document.querySelector("div.jumbotron div.col-md-6 h1")
  h1.style.color = "green"
}

/* changeColorOfH1() */

/* EX13) Write a function to change the background of the jumbotron */
function changeJumbotronBackground() {
  const jumbotron = document.querySelector("div.jumbotron")
  jumbotron.style.backgroundImage =
    "url('https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg')"
}

/* changeJumbotronBackground() */

/* EX14) Write a function to remove all the links under "Elsewhere" */
function removeAllLinksUnderElsewhere() {
  const secondOrderedList = document.querySelector("aside div:last-of-type ol")
  secondOrderedList.innerHTML = ""
}

/* removeAllLinksUnderElsewhere() */

/* EX15) Write a function to change the column size for heading in jumbotron */
function changeColumnSizeJumbotron() {
  const headingDiv = document.querySelector(".jumbotron div")
  headingDiv.classList.remove("col-md-6")
  headingDiv.classList.add("col-md-10")
}

/* changeColumnSizeJumbotron() */

/* EX16) Write a function to remove the "Search" magnifying glass icon */
function removeMagnifyingGlass() {
  const link = document.querySelector("header div:nth-child(3) a")
  link.innerHTML = ""
}

/* removeMagnifyingGlass() */

/* EX17) Write a function to trim just the first 50 characters in the first paragraph for each blog post */

/* EX18) Write a function and attach it to the "Newer" button, to add new Blog Post (just div and title) */
/* EX19) Write a function and attach it to the "Older" button, to remove the last Blog Post */
/* EX20) Write an alert with the name of the author every time the user hover with the mouse over an author name */
