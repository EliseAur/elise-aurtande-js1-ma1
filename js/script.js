// elise-aurtande-js1-ma1
// Course: JavaScript 1, Module 1, Module assignment 1

// Question 1:

const cat = {
    complain: function () {
        console.log("Meow!");
    },
};

cat.complain();

// Question 2:

const heading = document.querySelector("h3");
heading.innerHTML = "Updated heading";

// Question 3:

heading.style.fontSize = "2em";

// Question 4:

heading.className = "subheading";

// Question 5:

const paragraphs = document.querySelectorAll("p");

for (i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
}

// Question 6:

const resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = `<p>New paragraph</p>`;
resultsContainer.style.backgroundColor = "yellow";

// Question 7:

const cats = [
    {
        name: "Blob",
        age: 10,
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21,
    },
];

function catList(list) {
    for (let i = 0; i < list.length; i++) {
        let catName = list[i].name;
        console.log(catName);
    }
}

catList(cats);

// Question 8:

function createCats(cats) {
    let html = "";

    for (let i = 0; i < cats.length; i++) {
        let catAge = "Age unknown";
        let catName = cats[i].name;

        if (cats[i].age) {
            catAge = cats[i].age;
        }

        html += `<div>
                    <h5>${catName}</h5>
                    <p>${catAge}</p>
                </div>`;
    }

    return html;
}

const newHtml = createCats(cats);
const catContainer = document.querySelector(".cat-container");
catContainer.innerHTML = newHtml;
