localStorage.setItem("length", Number(0));

const HeadingShowHandle = () => {
    const heading = document.getElementById("SetHeading");
    heading.classList.remove('hidden');
    heading.classList.add('block');

    const headingButton = document.getElementById("headingButton");
    headingButton.classList.add('hidden');

    let length = Number(localStorage.getItem("length"));
    localStorage.setItem("length", Number(length + 1));
    let newLength = Number(localStorage.getItem("length"));
    if(newLength == 2){
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.add('hidden');
    }else{
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.remove('hidden');
        ItemsSelect.classList.add('block');
    }
}

const HeadingHiddenHandle = () => {
    const heading = document.getElementById("SetHeading");
    heading.classList.remove('block');
    heading.classList.add('hidden');

    const headingButton = document.getElementById("headingButton");
    headingButton.classList.remove('hidden');
    headingButton.classList.add('block');

    let length = Number(localStorage.getItem("length"));
    localStorage.setItem("length", Number(length - 1));
    let newLength = Number(localStorage.getItem("length"));
    if(newLength == 2){
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.add('hidden');
    }else{
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.remove('hidden');
        ItemsSelect.classList.add('block');
    }
}

const ImageShowHandle = () => {
    const image = document.getElementById("SetImage");
    image.classList.remove('hidden');
    image.classList.add('block');

    const imageButton = document.getElementById("imageButton");
    imageButton.classList.add('hidden');
    
    let length = Number(localStorage.getItem("length"));
    localStorage.setItem("length", Number(length + 1));
    let newLength = Number(localStorage.getItem("length"));

    if(newLength == 2){
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.add('hidden');
    }else{
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.remove('hidden');
        ItemsSelect.classList.add('block');
    }
}
const ImageHiddenHandle = () => {
    const image = document.getElementById("SetImage");
    image.classList.remove('block');
    image.classList.add('hidden');

    const imageButton = document.getElementById("imageButton");
    imageButton.classList.remove('hidden');
    imageButton.classList.add('block');
    
    let length = Number(localStorage.getItem("length"));
    localStorage.setItem("length", Number(length - 1));
    let newLength = Number(localStorage.getItem("length"));

    if(newLength == 2){
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.add('hidden');
    }else{
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.remove('hidden');
        ItemsSelect.classList.add('block');
    }
}
const DscShowHandle = () => {
    const description = document.getElementById("SetDescription");
    description.classList.remove('hidden');
    description.classList.add('block');

    const dscButton = document.getElementById("dscButton");
    dscButton.classList.add('hidden');

    let length = Number(localStorage.getItem("length"));
    localStorage.setItem("length", Number(length + 1));
    let newLength = Number(localStorage.getItem("length"));

    if(newLength == 2){
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.add('hidden');
    }else{
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.remove('hidden');
        ItemsSelect.classList.add('block');
    }

}
const DscHiddenHandle = () => {
    const description = document.getElementById("SetDescription");
    description.classList.remove('block');
    description.classList.add('hidden');

    const dscButton = document.getElementById("dscButton");
    dscButton.classList.remove('hidden');
    dscButton.classList.add('block');

    let length = Number(localStorage.getItem("length"));
    localStorage.setItem("length", Number(length - 1));
    let newLength = Number(localStorage.getItem("length"));
    if(newLength == 2){
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.add('hidden');
    }else{
        const ItemsSelect = document.getElementById("ItemsSelect");
        ItemsSelect.classList.remove('hidden');
        ItemsSelect.classList.add('block');
    }
}



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

const updateTitleRight = () => {
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

const updateTitleGreen = () => {
    let title = document.getElementById("title").value;
    document.getElementById("ShowHeading").innerHTML = `<h1 class="text-5xl font-bold antialiased">${title}</h1>`;
    let ShowHeading = document.getElementById("ShowHeading");
    ShowHeading.classList.remove('text-black');
    ShowHeading.classList.remove('text-blue-600');
    ShowHeading.classList.add('text-green-600');
}


const getBase64 = (file) => {
    var reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async function () {
        // console.log('getBase64', reader.result)
        document.getElementById("ShowImage").innerHTML = `<img class="w-full" src="${reader.result}" />`;
    }

    reader.onerror = function (error) {
        console.log('Error: ', error)
    }
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
    var file = e.dataTransfer.files[0];

    console.log("file", file)

    const type = file.type;

    if (type == "image/jpg" || type == "image/jpeg" || type == "image/gif" || type == "image/png") {
        getBase64(file)
    } else {
        alert("Invalid File, Allow SVG, PNG, JPG or GIF");
    }
};


const ImageUpload = () => {
    // console.log(event.target.files[0].type)
    var file = event.target.files[0];
    const type = file.type;

    if (type == "image/jpg" || type == "image/jpeg" || type == "image/gif" || type == "image/png") {
        getBase64(file)
    } else {
        alert("Invalid File, Allow SVG, PNG, JPG or GIF");
        // console.log("Invalid File");
    }
}

const updateDescription = () => {
    let description = document.getElementById("description").value;
    document.getElementById("ShowDescription").innerHTML = `<p class="text-base antialiased">${description}</p>`;
}

const downloadDiv = () => {
    let download = document.getElementById("download");

    htmltoimage.toPng(download)
        .then(function (dataUrl) {
            // console.log('dataUrl', dataUrl);

            const link = document.createElement("a");
            link.download = "poster.png";
            link.href = dataUrl;
            link.click();

        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        })



}
