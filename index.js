const selectedImageEl = document.getElementById("selected_photo")
let imageArray = Array.from(document.getElementsByClassName("my-photo"))

const nextBtn = document.getElementById("next_photo") 
const prevBtn = document.getElementById("prev_photo")

imageArray.forEach(photo => {
    photo.addEventListener("click", e => {
    //    console.log(photo.src)
        let imageSrc = photo.src.replace("-thumbnail", "")
        console.log(imageSrc)
        selectedImageEl.src = imageSrc
        selectedImageEl.style.display = "block"
    })
})




let carouselArray = imageArray.map(photo => photo.src.replace("-thumbnail", ""))



nextBtn.addEventListener("click", e => {
    let current_pos = carouselArray.indexOf(selectedImageEl.src)
    console.log(current_pos)

    if (current_pos<carouselArray.length-1){
        current_pos = current_pos+1
        selectedImageEl.src = carouselArray[current_pos]
    } else {
        let current_pos = 0
        selectedImageEl.src = carouselArray[current_pos]
    }
})

prevBtn.addEventListener("click", e => {
    let current_pos = carouselArray.indexOf(selectedImageEl.src)
    console.log(current_pos)

    if (current_pos>0){
        current_pos = current_pos-1
        selectedImageEl.src = carouselArray[current_pos]
    } else {
        let current_pos = 3
        selectedImageEl.src = carouselArray[current_pos]
    }
})