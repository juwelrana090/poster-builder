
var $dropper = document.querySelector('.dropper');

$dropper.ondragover = function (e) {
    e.dataTransfer.dropEffect = 'copy';
    e.preventDefault();
    this.classList.remove('border-gray-300');
    this.classList.add('border-gray-600');
};
$dropper.ondragleave = function (e) {
    e.preventDefault();
    this.classList.remove('border-gray-600');
    this.classList.add('border-gray-300');
};

$dropper.ondrop = function (e) {
    e.preventDefault();
    this.classList.remove('border-gray-600');
    this.classList.add('border-gray-300');
    var files = e.dataTransfer.files;

    console.log("files", files)

    const type = files[0].type;

    if (type == "image/jpg" || type == "image/jpeg" || type == "image/gif" || type == "image/png") {

    } else {
        alert("Invalid File, Allow SVG, PNG, JPG or GIF");
        // console.log("Invalid File");
    }
};


const ImageUpload = () => {
    // console.log(event.target.files[0].type)
    const type = event.target.files[0].type;

    if (type == "image/jpg" || type == "image/jpeg" || type == "image/gif" || type == "image/png") {

    } else {
        alert("Invalid File, Allow SVG, PNG, JPG or GIF");
        // console.log("Invalid File");
    }


}