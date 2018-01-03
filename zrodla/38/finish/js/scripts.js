var article = document.querySelector("#article"),
    paragraphs = article.querySelectorAll("p");

// function changeColor(e) {

//     e.target.style.color = "#ff0000";

// }

// [].forEach.call(paragraphs, function(p) {

//     p.onclick = changeColor;

// });

function changeColor(e) {

    // console.log(this);

    if(e.target.nodeName === "P") {
        e.target.style.color = "#ff0000";
    }

}

article.onclick = changeColor;

function addPara() {

  var p = document.createElement("p");

  p.textContent = "Lorem ipsum dolor sit amet.";

  article.appendChild(p);

}