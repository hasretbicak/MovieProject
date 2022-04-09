function Storage(){

}
// Filmi Storage'a Ekleme

Storage.prototype.addFilmToStorage = function(newFilm){

    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    localStorage.setItem("films", JSON.stringify(films));

}
 

// Storage'daki Filmleri Getir

Storage.prototype.getFilmsFromStorage = function(){

    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }
    else{ 
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;

}

// Seçilen Filmi Storage'dan Silme

Storage.prototype.deleteFilmFromStorage = function(filmTitle){

    let films = this.getFilmsFromStorage();

    films.forEach(function(film, index){     // Filmler arasında gezinme

        if(film.title === filmTitle){  
            films.splice(index,1);   //  objenin içinden 1 index silme
        }
        
    });

    localStorage.setItem("films", JSON.stringify(films));  // fili tekrar string hale getirme

}

// Bütün Filmleri Storage'dan Silme
 
Storage.prototype.clearAllFilmsFromStorage = function(){

    localStorage.removeItem("films");
} 