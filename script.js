const movies = [
    {id: 1, img:"https://i.pinimg.com/1200x/22/38/5a/22385af6a4ffd4654dc5626d0c987cf7.jpg" , title: "Leo" , genre:"action", year:"2023", rating:" 8.2"},
    {id: 2, img:"https://i.pinimg.com/1200x/f1/d5/ea/f1d5ea79a8838c36862785e331bc3345.jpg" , title: "Vikram" , genre:"action", year:"2023", rating:"8.2"},
    {id: 3, img:"https://i.pinimg.com/1200x/a6/44/67/a64467b8b7608e98320ccc7e671ae7eb.jpg" , title: "Jailer" , genre:"action", year:"2023", rating:"7.9"},
    {id: 4, img:"https://i.pinimg.com/736x/3e/ce/3f/3ece3f51f78e888146c8b2b0715afab2.jpg" , title: "Good Bad Ugly" , genre:"action", year:"2025", rating:"7.1"},
    {id: 5, img:"https://i.pinimg.com/1200x/2e/dc/93/2edc93c456619d35e39884d2c0951884.jpg" , title: "Raayan" , genre:"action", year:"2025", rating:"7.8"},

    {id: 6, img:"https://i.pinimg.com/736x/e9/3c/ac/e93cac82ae7c94decad183551158627b.jpg" , title: "Dada", genre:"love", year:"2023", rating:"8.2"},
    {id: 7, img:"https://i.pinimg.com/736x/e3/89/b4/e389b43dc569e90da0588aaef6c672fc.jpg" , title: "Lover" , genre:"love", year:"2024", rating:"7.5"},
    {id: 8, img:"https://i.pinimg.com/1200x/14/c7/9b/14c79bde2d4f072f93af0514e05755e9.jpg" , title: "Good Night" , genre:"love", year:"2023", rating:"7.7"},
    {id: 9, img:"https://i.pinimg.com/736x/0d/8f/14/0d8f1428c7d0ff58f0fb45258c214bec.jpg" , title: "Oh My Kadavule" , genre:"love", year:"2020", rating:"8.1"},
    {id: 10, img:"https://i.pinimg.com/1200x/3f/ae/3f/3fae3f94e1b475762c718dd748fbee18.jpg" , title: "Thiruchitrambalam" , genre:"love", year:"2022", rating:"7.9"},
    
    {id: 11, img:"https://i.pinimg.com/736x/6b/ae/2c/6bae2c9a10a56e8e9a08655af22e0f6f.jpg", title:"Doctor", genre:"comedy", year:"2021", rating:"7.4"},
    {id: 12, img:"https://i.pinimg.com/736x/92/2d/80/922d803a67219917a7e75ac871701dff.jpg", title:"Dada", genre:"comedy", year:"2023", rating:"8.2"},
    {id: 13, img:"https://i.pinimg.com/1200x/6a/82/c5/6a82c5a9398a752eefd40cdc2de8c3fc.jpg", title:"Star", genre:"comedy", year:"2024", rating:"7.5"},
    {id: 14, img:"https://i.pinimg.com/736x/44/cf/bb/44cfbbee1d3de31cd470cd8204f07036.jpg", title:"Love Today", genre:"comedy", year:"2022", rating:"8.1"},

    {id:15, img:"https://i.pinimg.com/736x/8e/f2/bb/8ef2bb4bc00c039c9470d05641bfb84c.jpg", title:"Demonte Colony 2", genre:"ghost", year:"2024", rating:"7.2"},
    {id:16, img:"https://m.media-amazon.com/images/M/MV5BOTU3NWI4M2QtN2ViMS00ZDY2LTk0NzUtNDk4YTk2ZGFhYjNkXkEyXkFqcGc@._V1_.jpg", title:"Conjuring Kannappan", genre:"ghost", year:"2023", rating:"6.2"},
    {id:17, img:"https://i.pinimg.com/736x/bd/30/ac/bd30ace6d6c01e06445554cf41c9a9a4.jpg", title:"Aranmanai 4", genre:"ghost", year:"2024", rating:"6.8"},
    {id:18, img:"https://i.pinimg.com/1200x/5a/24/0d/5a240d9fa173fb04fb41adc899ca556b.jpg", title:"Pizza", genre:"ghost", year:"2015", rating:"8.2"},
];

const container = document.getElementById("movie-container");

function displayMovies(data) {
    if (data.length === 0) {
        container.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-film fa-3x text-secondary mb-3"></i>
                <h4 class="text-secondary">No Movie found!</h4>
                <button class="btn btn-warning mt-3" onclick="showall()">View All</button>
            </div>`;
        return;
    }

    container.innerHTML = data.map(movie => `
        <div class="col-6 col-md-4 col-lg-3 mb-4">
            <div class="card h-100 shadow-lg border-0 bg-dark text-white movie-card">
                <div class="position-relative overflow-hidden">
                    <img src="${movie.img}" class="card-img-top" alt="${movie.title}" style="height: 350px; object-fit: cover;">
                    <div class="rating-badge position-absolute top-0 end-0 m-2 px-2 py-1 bg-warning text-dark fw-bold rounded">
                        <i class="fas fa-star small"></i> ${movie.rating}
                    </div>
                </div>
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title text-warning fw-bold mb-1">${movie.title}</h6>
                    <p class="small text-secondary mb-3">${movie.genre.toUpperCase()} • ${movie.year}</p>
                    <button class="btn btn-outline-warning btn-sm mt-auto rounded-pill">Watch Now</button>
                </div>
            </div>
        </div>
    `).join('');
}

function showall(){
    displayMovies(movies);
}

function filterGenre(category) {
    const filtered = movies.filter(movie => movie.genre === category);
    displayMovies(filtered);
}
function filteryear(){
    const yearMovies  = movies.filter((movies) =>{
        return movies.year;
    });

    displayMovies(year);
}

function findTopRated() {
    const topRated = movies.filter(movies => parseFloat(m.rating) >= 8.0);
    displayMovies(topRated);
}


document.getElementById("searchInput").addEventListener("input", (e) => {
    const input = e.target.value.toLowerCase();
    const searched = movies.filter(movies => movies.title.toLowerCase().includes(input));
    displayMovies(searched);
});

window.onload = showall;