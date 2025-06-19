/* let sum = document.querySelector("#sum");
let rest = document.querySelector("#rest");
let parrafo = document.querySelector("#parrafo");
let contador = 0;
sum.addEventListener("click", function() {
    contador++;
    parrafo.textContent = contador;
});

rest.addEventListener("click", function() {
    contador--;
    parrafo.textContent = contador;
});
 */
let asd = document.querySelector("#asd");
let img = document.querySelector("#imagen");
let lowPower = true

asd.addEventListener("click", function () {
    lowPower = !lowPower
    if (lowPower) {
        asd.textContent = "lowPower"
        img.setAttribute (
            "src",
            "https://www.hola.com/horizon/original_aspect_ratio/6af6bd9c7295-star-peque-z.jpg"
        );

    } else {
        asd.textContent = "medium power";
        img.setAttribute(
            "src",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsKj3_QSMM1k-A9yJ0mU9PA5DKhd02-d3WtQ&s"
        )
    } 
})



