
const updateTitle = () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl font-bold antialiased">${title}</h1>`;
}

const updateTitleLeft = () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl font-bold antialiased">${title}</h1>`;
    let ShowHeading = document.getElementById("ShowHeading");
    
    ShowHeading.classList.remove('text-center');
    ShowHeading.classList.remove('text-right');
    ShowHeading.classList.add('text-left');
}

const updateTitleCenter = () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl font-bold antialiased">${title}</h1>`;
    let ShowHeading = document.getElementById("ShowHeading");
    ShowHeading.classList.remove('text-left');
    ShowHeading.classList.remove('text-right');
    ShowHeading.classList.add('text-center');
}

const updateTitleRight= () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl font-bold antialiased">${title}</h1>`;
    let ShowHeading = document.getElementById("ShowHeading");
    ShowHeading.classList.remove('text-left');
    ShowHeading.classList.remove('text-center');
    ShowHeading.classList.add('text-right');
}

const updateTitleBlue = () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl text-blue-600 font-bold antialiased">${title}</h1>`;
    let ShowHeading = document.getElementById("ShowHeading");
    ShowHeading.classList.remove('text-black');
    ShowHeading.classList.remove('text-green-600');
    ShowHeading.classList.add('text-blue-600');
}

const updateTitleBlack = () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl font-bold antialiased">${title}</h1>`;
    let ShowHeading = document.getElementById("ShowHeading");
    ShowHeading.classList.remove('text-blue-600');
    ShowHeading.classList.remove('text-green-600');
    ShowHeading.classList.add('text-black');
}

const updateTitleGreen= () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl font-bold antialiased">${title}</h1>`;
    let ShowHeading = document.getElementById("ShowHeading");
    ShowHeading.classList.remove('text-black');
    ShowHeading.classList.remove('text-blue-600');
    ShowHeading.classList.add('text-green-600');
}


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