// Question 1 
const cat = {
    complain: catComplain()
};

function catComplain() {
    console.log("Meow!")
};




// Question 2
const heading = document.querySelector("h3");

heading.innerHTML = `Updated heading`;




// Question 3
heading.style.fontSize = "2em";




// Question 4
heading.classList = "subheading";




// Question 5
const paragraphs = document.querySelectorAll("p")

for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.color = "red";
};




// Question 6
let newParagraph = "";

const resultsContainer = document.querySelector(".results");

newParagraph = `<p style="background-color:yellow">New Paragraph</p>`;

resultsContainer.innerHTML = newParagraph;




// Question 7
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

function catNamesList(list) {

    for (let i = 0; i < cats.length; i++) {
        let catNames = cats[i].name
        console.log(catNames);
    };
};

catNamesList(cats);




// Question 8

const catContainer = document.querySelector(".cat-container");

console.log(catContainer);

let html = "";

for (let i = 0; i < cats.length; i++) {

    let catsName = cats[i].name;
    let catsAge = cats[i].age;
    
    let displayAge = "Age unknown";

    if (catsAge) {
        displayAge = catsAge;
    } else {
        catsAge = displayAge;
    }

    html += `<div>
            <h5>${catsName}<h5>
            <p>${catsAge}</p>
            </div>
            `;

}

catContainer.innerHTML = html;


/*
////////THIS IS A TRY WITH A FUNCTION, BUT DID NOT SUCCEED:
function createCats(cats) {
    
    let html = "";
    
    for (let i = 0; i < cats.length; i++) {
        
        let catsName = cats[i].name;
        let catsAge = cats[i].age;
        
        let displayAge = "Age unknown";
    
        if (catsAge) {
            displayAge = catsAge;
        } else {
            catsAge = displayAge;
        }
    
        html += `<div>
                <h5>${catsName}<h5>
                <p>${catsAge}</p>
                </div>
                `;
    
        // console.log(html);
        return html;
    }
}

catContainer.innerHTML = createCats(cats);
*/