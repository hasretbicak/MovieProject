const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url"); 
const cardbody = document.querySelectorAll(".card-body")[1];
const clear = document.querySelector("#clear-films");

// UI Objesini Oluşturma

const ui = new UI();

// Storage Objesi Oluşturma

const storage = new Storage();

// Tüm Eventleri Yükleme

eventListeners();

function eventListeners(){

    form.addEventListener("submit", addFilm);  // formdaki submit eventine basıldığında

    document.addEventListener("DOMContentLoaded", function(){   // document başladığında 


        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);

    });

    cardbody.addEventListener("click", deleteFilm);   // cardbodye click eventine basıldığında

    clear.addEventListener("click", clearAllFilms);
}


//Film Ekleme 

function addFilm(e){

    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title ==="" || director ==="" || url ===""){

        //Hata
        ui.displayMessage("Tüm Alanları Doldurun!", "danger");
    }
    else{
        //Yeni Film
        const newFilm = new Film(title, director, url);

        ui.addFilmToUI(newFilm);  // Filmi Arayüze Ekleme

        storage.addFilmToStorage(newFilm);  // Filmi Storage'a Ekleme

        ui.displayMessage("Film Başarıyla Eklendi...", "success");
    }



    ui.clearInputs(titleElement, directorElement, urlElement);   // ekledikten sonra inputların içerisini silme

    e.preventDefault();
}

// Seçilen Filmi Silme

function deleteFilm(e){

    if(e.target.id === "delete-film"){

        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);

        ui.displayMessage("Film Başarıyla Silindi..", "success");
    }

}

// Bütün Filmleri Silme

function clearAllFilms(e){

    if(confirm("Bütün Filmleri Silmek İstediğinizden Emin misiniz?")){

        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage(); 
    }

}

    
