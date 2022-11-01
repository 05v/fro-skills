const toBeClonedSection = document.getElementById("js--toBeCloned");
console.log(toBeClonedSection);

fetch("/data/trellies.json").then(
    function(response){
        return response.json();
    }
).then(
    function(data){

        // Fetch <main>
        const main = document.querySelector('main');

        // Adds <section> to <main>
        let toBeAddedSection = document.createElement('section');
        toBeAddedSection.classList.add('tasks');
        main.appendChild(toBeAddedSection);

        // Adds <header> to <section>
        let toBeAddedHeader = document.createElement('header');
        toBeAddedHeader.classList.add('tasks__header');
        toBeAddedSection.appendChild(toBeAddedHeader);

        // Adds <h2> to <header>
        // Changes <h2> text according to .json
        let toBeAddedH2 = document.createElement('h2');
        toBeAddedH2.classList.add('tasks__h2');
        toBeAddedH2.innerText = data.title;
        toBeAddedHeader.appendChild(toBeAddedH2);

        // Adds <div> to <section>
        let toBeAddedWrapper = document.createElement('div');
        toBeAddedWrapper.classList.add('tasks__headerWrapper');
        toBeAddedHeader.appendChild(toBeAddedWrapper);
        
        // Adds <i> to wrapper <div>
        let toBeAddedAuthorCircle = document.createElement('i');
        toBeAddedAuthorCircle.classList.add('tasks__authorCircle');
        toBeAddedWrapper.appendChild(toBeAddedAuthorCircle);

        // Adds <span> to circle <i>
        let toBeAddedAuthorText = document.createElement('span');
        toBeAddedAuthorText.classList.add('tasks__authorText');
        toBeAddedAuthorText.innerText = data.author;
        toBeAddedAuthorCircle.appendChild(toBeAddedAuthorText);

        // Adds <div> to wrapper <div>
        // Changes number length according to .json
        let toBeAddedNumber = document.createElement('div');
        toBeAddedNumber.classList.add('tasks__number');
        toBeAddedNumber.innerText = data.activities.length;
        toBeAddedWrapper.appendChild(toBeAddedNumber);

        // Adds <button> to wrapper <div>
        let toBeAddedButton = document.createElement('button');
        toBeAddedButton.classList.add('tasks__edit');
        toBeAddedButton.innerText = '...';
        toBeAddedWrapper.appendChild(toBeAddedButton);

        // Adds <ul> to <section>
        let toBeAddedUl = document.createElement('ul');
        toBeAddedUl.classList.add('tasks__list');
        toBeAddedSection.appendChild(toBeAddedUl);

        for(let i = 0; i < data.activities.length; i++){
            // Adds List item to UL
            let toBeAddedLi = document.createElement('li');
            toBeAddedLi.classList.add('tasks__listItem');
            toBeAddedUl.appendChild(toBeAddedLi);

            // Label added to List Item
            let toBeAddedLabel = document.createElement("label");
            toBeAddedLabel.classList.add("tasks__label")
            if (data.activities[i].extraClass !== null){
                toBeAddedLabel.classList.add("tasks__label--" + data.activities[i].extraClass)
            }
            toBeAddedLabel.innerText = data.activities[i].label;
            toBeAddedLi.appendChild(toBeAddedLabel);
       
            // Label added to List Item
            let toBeAddedP = document.createElement("p");
            toBeAddedP.innerText = data.activities[i].description;
            toBeAddedLi.appendChild(toBeAddedP);

        }
        

    }
);


// clone.children[1].children[0].children[0].innerText = data.activities[0].label;
// Description
// clone.children[1].children[0].children[1].innerText = data.activities[0].description;