
const modal = document.querySelector(".modal");
console.log(".botao-trailer");
const video = document.getElementById("video");
const botaoTrailer = document.querySelector('.botao-trailer');
console.log(video.src);
const linkDovideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
    alternarModal();
video.setAttribute("src",linkDovideo);
})





const botaoFecharModal = document.querySelector(".fechar-modal");



    botaoFecharModal.addEventListener("click", () => {
        alternarModal();
        video.setAttribute("src", "");
        
    });



    
