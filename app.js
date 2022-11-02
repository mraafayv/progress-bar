const arr = [
    { Name: "Crawling Web", Time: 5, Divisions: 5 },
    { Name: "Scraping Content", Time: 10, Divisions: 5 },
    { Name: "Semantic Modeling", Time: 5, Divisions: 4 },
    { Name: "NLP", Time: 8, Divisions: 5 },
    { Name: "Competitive Analysis", Time: 5, Divisions: 4 }
];


let input = document.getElementById('input-box');
let analyzeBtn = document.getElementById('analyze');


//Enables the analyze button
input.addEventListener('keydown', () => {
    if(input.value !== ''){
        analyzeBtn.removeAttribute('disabled');
        analyzeBtn.style.opacity = 1;
    }
});


//Disables the analyze button
input.addEventListener('keyup', () => {
    if(input.value == ''){
        analyzeBtn.setAttribute('disabled', '');
        analyzeBtn.style.opacity = 0.5;
    }
});

//Disables the analyze button on click
analyzeBtn.addEventListener('click', () => {
    if(input.value !== ''){
        analyzeBtn.setAttribute('disabled', '');
        input.setAttribute('disabled', '');
        analyzeBtn.style.opacity = 0.5;
        input.style.opacity = 0.5;
    }
})
    



// Displays the Content
analyzeBtn.addEventListener('click', displayContent);


function displayContent() {
    let labels = document.createElement('div');
    labels.className = "labels";

    for (let i = 0; i < arr.length; i++) {

        console.log(arr[i].Name);
        let contentBody = document.querySelector('.content-body');

        let section = document.createElement('section');
        let circle = document.createElement('div');
        circle.className = "circle";

        
        
        
        
        let label = document.createElement('p');
        let span = document.createElement('span');
        span.innerText = "0%"
        label.innerText = arr[i].Name + " ... ";
        
        label.append(span);
        
        section.appendChild(circle);
        section.appendChild(label);
        labels.appendChild(section);

        contentBody.appendChild(labels);


    }
}













