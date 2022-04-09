function UI(){

}

UI.prototype.addFilmToUI = function(newFilm){
   
    /*  
        <tr>
        <td><img src="" class="img-fluid img-thumbnail"></td>
        <td></td>
        <td></td>
        <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> */
 
    const filmList = document.getElementById("films");
    
    filmList.innerHTML +=  `

        <tr>
           <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
           <td>${newFilm.title}</td>
           <td>${newFilm.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    
    `;
    
}

UI.prototype.clearInputs = function(element1, element2, element3){

    element1.value = "";
    element2.value = "";
    element3.value = "";

}

UI.prototype.displayMessage = function(message, type){

    const cardBody = document.querySelectorAll(".card-body")[0];

    // Alert divini oluştur

    const div = document.createElement("div");

    div.className = `alert alert-${type}` ; // alt+096 ile oluşturulur.
    div.textContent = message;

    cardBody.appendChild(div);

    setTimeout(function(){    // Msaj sadece 2 sn gösterilecek.
        div.remove();
    }, 2000);
}

UI.prototype.loadAllFilms = function(films){

    const filmList = document.getElementById("films");

    films.forEach(function(film){

        filmList.innerHTML +=  `

        <tr>
           <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
           <td>${film.title}</td>
           <td>${film.director}</td>
           <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
    
    
    `;

    });
}

UI.prototype.deleteFilmFromUI = function(element){

    element.parentElement.parentElement.remove();

}

// Bütün Filmleri Arayüzden Silme

UI.prototype.clearAllFilmsFromUI = function(){

    const filmList = document.getElementById("films");

    // filmList.innerHTML = "";   ->Yapabilirdik ama çok yavaş  old. tercih edilmedi.

    while(filmList.firstElementChild !== null){ 

        filmList.firstElementChild.remove();
    }
}

