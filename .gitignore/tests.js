//HTML Variable Selectors
const workBoxEl = document.getElementById('work-Box');


let workObjects = [
    {
        "title": "Refactor Accesibility",
        "href" : "https://viennaborowska.github.io/Refactor-Accesibility/",
        "img" : "./Assets/Images/screenreader.jpg",
        "description": "Refactoring code to increase accesibility for future users and developers.",
        "tags": "#CSS, #HTML, #Accesibility"
    }
]

function renderWorkCards() {

    workObjects.forEach(() => {
    const columnEl = document.createElement("div");
    columnEl.setAttribute("class", "column");

    const cardEl = document.createElement("div");
    cardEl.setAttribute("class", "card");

    const imgBoxEl = document.createElement("div");
    imgBoxEl.setAttribute("class", "card-image");

    const imageEl = document.createElement("figure");
    imageEl.setAttribute("class", "image is-4by3");

    const linkEl = document.createElement("a");
    linkEl.setAttribute("href", `${workObjects[i].href}`);

    const picture = document.createElement("img");
    picture.setAttribute("src", `${workObjects[i].img}`);

    linkEl.append(picture);
    imageEl.append(linkEl);
    imgBoxEl.append(imageEl);
    cardEl.append(imgBoxEl);

    


    const cardContentEl = document.createElement("div");
    cardContentEl.setAttribute("class", "card-content");

    const mediaEL = document.createElement("div");
    mediaEL.setAttribute("class", "media");

    const profilePicEl = document.createElement("div");
    profilePicEl.setAttribute("class", "media-left");

    const profilePicHolder = document.createElement("figure")
    profilePicHolder.setAttribute("class", "image is-48x48");

    const profilePic = document.createElement("img");
    profilePic.setAttribute("src", `./Assets/Images/VBPP.png`);

    const mediaContentEl = document.createElement("div");
    mediaContentEl.setAttribute("class", "media-content");

    const cardTitleEl = document.createElement("p");
    cardTitleEl.setAttribute("class", "title is-4");
    cardTitleEl.innerHTML(`${workObjects[i].title}`)

    const myNameEl = document.createElement("p");
    myNameEl.setAttribute("class", "subtitle is-6");
    myNameEl.innerHTML("Vienna Borowska");

    profilePicHolder.append(profilePic);
    profilePicEl.append(profilePicHolder);
    mediaContentEl.append(cardTitleEl, myNameEl)
    mediaEL.append(profilePicEl, cardTitleEl)

    const cardContent2 = document.createElement("div");
    cardContent2.setAttribute("class", "content");
    cardContent2.innerHTML(`${workObjects[i].description}`)
    
    const tagSplit = workObjects[i].tags.split(",")
    let tagEl = tagSplit.forEach(() => {
        const tagsEl = document.createElement("a");
        tagsEl.innerHTML(tagSplit[i]);
    const breakEl = document.createElement("br");

    cardContent2.append(tagEl, breakEl);

    columnEl.append(cardEl, cardContentEl);
    workBoxEl.append(columnEl);



    })
    
    });
};

renderWorkCards();