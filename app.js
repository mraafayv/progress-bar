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
    if (input.value !== '') {
        analyzeBtn.removeAttribute('disabled');
        analyzeBtn.style.opacity = 1;
    }
});


//Disables the analyze button
input.addEventListener('keyup', () => {
    if (input.value == '') {
        analyzeBtn.setAttribute('disabled', '');
        analyzeBtn.style.opacity = 0.5;
    }
});

//Disables the analyze button on click
analyzeBtn.addEventListener('click', () => {
    if (input.value !== '') {
        analyzeBtn.setAttribute('disabled', '');
        input.setAttribute('disabled', '');
        analyzeBtn.style.opacity = 0.5;
        input.style.opacity = 0.5;
    }
})



// Displays the Content
analyzeBtn.addEventListener('click', displayContent);


function displayContent() {
    let contentBody = document.querySelector('.content-body');
    if(contentBody.hasChildNodes()){
        contentBody.innerHTML = '';
    }
    analyzeBtn.innerText = '';
    let loader = document.createElement('div');
    analyzeBtn.append(loader);
    loader.className = 'loader';
    loader.style.display = 'block';
    let labels = document.createElement('div');
    labels.className = "labels";
    let totalDuration = 0;


    for (let i = 0; i < arr.length; i++) {
        totalDuration += arr[i].Time * 1000;
        let section = document.createElement('section');
        let circle = document.createElement('div');
        circle.className = "circle";





        let label = document.createElement('p');
        let percentValue = document.createElement('span');
        let percentSymbol = document.createElement('span');
        percentValue.innerText = 0;
        percentValue.className = "percentage";
        percentSymbol.className = "symbol";
        percentSymbol.innerText = "%";
        label.innerText = arr[i].Name + " ... ";

        label.append(percentValue);
        label.append(percentSymbol);

        section.appendChild(circle);
        section.appendChild(label);
        labels.appendChild(section);

        contentBody.appendChild(labels);


    }

    timer(arr);
    setTimeout(enable, totalDuration);
}

function enable() {
    analyzeBtn.removeAttribute('disabled');
    input.removeAttribute('disabled');
    analyzeBtn.innerText = 'Analyze';
    input.value = '';
    analyzeBtn.style.opacity = 1;
    input.style.opacity = 1;
}




function timer(arr) {

    let delay = 0;
    for (let j = 0; j < arr.length; j++) {

        console.log("delay", delay + "s");
        setTimeout(displayPercent, delay * 1000, j);
        delay += arr[j].Time;
    }

}





function displayPercent(i) {
    let loop;
    const ele = [...document.querySelector('.labels').children];
    const circle = ele[i].firstChild;
    let percentValue = ele[i].children[1].children[0];
    let percentSymbol = ele[i].children[1].children[1];

    if (i < arr.length) {
        console.log("i before setInterval", i);
        let percentage = ele[i].lastChild.children[0];
        let intervalDuration = arr[i].Time / arr[i].Divisions;
        let delay = intervalDuration * 1000;
        let per = (intervalDuration / arr[i].Time) * 100;

        loop = setInterval(() => {
            if (per <= 100) {
                percentage.innerText = per;
                per += per;
            }
            else {
                per = 100;
                percentage.innerText = per;
                circle.style.backgroundColor = 'rgb(0, 121, 202)';
                circle.style.transition = 'linear 1s';
                percentSymbol.style.display = 'none';
                percentValue.innerHTML = `<i class="fa-solid fa-check"></i>`;
                percentValue.style.fontSize = '16px';
                // percentValue.style.transition = 'linear 1s';
                clearInterval(loop);
                console.log("i after setInterval", i);
            }

            console.log(per);
        }, delay)

    }




}








