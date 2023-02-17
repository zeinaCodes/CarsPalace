const fileInput = document.getElementById("img-upload");
const imageContainer = document.getElementById("thumbnails-container");
const numOfFiles = document.getElementById("filesNum");
const flashMessage = document.getElementById("alert");
const closeBtn = document.getElementById('close-btn');


// function check_duplicate(file) {
//     var boolean = true;
//     if (images.length > 0) {
//         for (e = 0; e < images.length; e++) {
//             if (images[e].name == file.name) {
//                 image = false;
//                 break;
//             }
//         }
//     }
//     return boolean;
// }


function closeMsg(){
    flashMessage.classList.toggle('show');
    flashMessage.classList.toggle('hide');
}

function preview() {
    // limit files selected to 6
    let maxFiles = 6;
    if (fileInput.files.length > maxFiles) {
        fileInput.value = "";
        flashMessage.classList.toggle('hide');
        flashMessage.classList.toggle('show');
    }

    // display number of files selected
    imageContainer.innerHTML = "";
    numOfFiles.textContent = `${fileInput.files.length}
    Files Selected`;

    // create image element for every file and assign it's attributes
    for (i of fileInput.files) {
        let reader = new FileReader();
        let img = document.createElement("img");
        reader.onload = () => {
            img.setAttribute("src", reader.result);
            img.classList.add("thumbnail");
        }
        // append img element to image container div
        imageContainer.appendChild(img);
        reader.readAsDataURL(i);
    }

}


// Event listener
fileInput.addEventListener('change', preview);
closeBtn.addEventListener('click', closeMsg);
