const imagenes= document.querySelectorAll('.img-galeia')
const imagenesLight =document.querySelector('.agregar-iamgen')
const contenedorLight = document.querySelector('.imagen -light')

console.log(imagenes)
console.log(contenedorLight)


imagenes.forEach(imagen =>{
	imagen.addEventListener('click',()=>{
		aparecerImagen(imagen.getAttribute('src'))
	})
})
 contenedorLight.addEventListener('click' , (e)=>{
 	if (e.target!== imagenesLight){
 		contenedorLight.classList.toggle('show')
	imagenesLight.classList.toggle('showImage')
	}
 })

const aparecerImagen=(imagen)=>{
	imagenesLight.src=imagen;
	contenedorLight.classList.toggle('show')
	imagenesLight.classList.toggle('showImage')
}