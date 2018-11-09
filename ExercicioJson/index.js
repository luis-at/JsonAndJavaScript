

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

    //ciclo para enquanto existir characters adicionar nova li com nome e gender
    for(j = 0; characters.length; j++ ){
        var character = document.createElement("li");
        charactersList.appendChild(character);
        j++;
    }    
}



