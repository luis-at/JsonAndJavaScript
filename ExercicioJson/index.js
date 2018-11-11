

var mainTitle = document.getElementById("title");
mainTitle.innerHTML = initialState.title ;


document.getElementsByClassName("type")[0].innerHTML = initialState.sections[0].type;


// função para criar um container
function createContaner(initialState){
    var container = document.createElement("div");
    container.setAttribute('class', 'container');
    document.body.appendChild(container);
    

    //var elSections = createSection();
}

function createSection(sections){
    var i,
    for(i = 0; i <= sections.length; i++){
        if(sections[i].type == "cartoon"){
            createCartoon(sections[i]);
        }else if(sections[i].type == "data"){
            createData(sections[i]);
        }
    }
}

function createCartoon(section){
    var j;
    var type = document.createElement("p");
    var title = document.createElement("h2");
    var description = document.createElement("p");
    var charactersList = document.createElement("ul");

    //put context inside type
    var type = document.createElement("p");
    type.innerHTML = initialState.section.type;
    //put context inside title
    title.innerHTML = initialState.sections.title;
    //put text inside description
    description.innerHTML = initialState.section.description;

    //ciclo para enquanto existir characters adicionar nova li com nome e gender
    for(j = 0; characters.length; j++ ){
        var character = document.createElement("li");
        charactersList.appendChild(character);
        name = document.createElement("strong");
        gender = document.createElement("strong");
        character.appendChild(name);
        character.appendChild(gender);
        name.innerHTML = initialState.section.characters[j].name;
        gender.innerHTML = initialState.section.characters[j].gender;
    }    
}

//make changes for data ** TODO
function createData(section){
    var j;
    var type = document.createElement("p");
    var title = document.createElement("h2");
    var description = document.createElement("p");
    var charactersList = document.createElement("ul");

    //put context inside type
    var type = document.createElement("p");
    type.innerHTML = initialState.section.type;
    //put context inside title
    title.innerHTML = initialState.section.title;
    //put text inside description
    description.innerHTML = initialState.section.description;

    //ciclo para enquanto existir characters adicionar nova li com nome e gender
    for(j = 0; characters.length; j++ ){
        var character = document.createElement("li");
        charactersList.appendChild(character);
        name = document.createElement("strong");
        gender = document.createElement("strong");
        character.appendChild(name);
        character.appendChild(gender);
        name.innerHTML = initialState.section.characters[j].name;
        gender.innerHTML = initialState.section.characters[j].gender;
    }    
}

