document.body.onload = addElement;

function addElement() {
  // create a new div element
  const newh1 = document.createElement("h1");

  // and give it some content
  const newContent = document.createTextNode(
    "Hi there my name is Kolade matanmi an a frontend engineer!"
  );
  setTimeout(() => {
    let secondLine = document.createTextNode("and welcome to my page");
  }, 2000);

  // add the text node to the newly created div
  newh1.appendChild(newContent);
  newh1.appendChild(secondLine);

  // add the newly created element and its content into the DOM
  const currentH1 = document.getElementById("h1");
  const secondH1 = document.getElementById("h1");
  document.body.insertBefore(newh1, currentH1);
}
