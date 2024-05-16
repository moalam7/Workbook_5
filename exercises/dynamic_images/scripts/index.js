"use strict";
//data
// variable imageFiles gets declared and assigned an array []
// which contains objects representing an image file
let imageFiles = [
  {
    id: "1",
    path: "https://placehold.co/300x300",
    description: "placeholder 1",
  },
  {
    id: "2",
    path: "https://placehold.co/300x300",
    description: "placeholder 2",
  },
  {
    id: "3",
    path: "https://placehold.co/300x300",
    description: "placeholder 3",
  },
  {
    id: "4",
    path: "https://placehold.co/300x300",
    description: "placeholder 4",
  },
  {
    id: "5",
    path: "https://placehold.co/300x300",
    description: "placeholder 5",
  },
  {
    id: "6",
    path: "https://placehold.co/300x300",
    description: "placeholder 6",
  },
  {
    id: "7",
    path: "https://placehold.co/300x300",
    description: "placeholder 7",
  },
  {
    id: "8",
    path: "https://placehold.co/300x300",
    description: "placeholder 8",
  },
  {
    id: "9",
    path: "https://placehold.co/300x300",
    description: "placeholder 9",
  },
  {
    id: "10",
    path: "https://placehold.co/300x300",
    description: "placeholder 10",
  },
];


window.onload = function () {
  // HTML element variables
  const imageFileDropdown = document.querySelector("#imageFileDropdown");
  const addImageButton = document.querySelector("#addImageButton");
  const clearImagesButton = document.querySelector("#clearImagesButton");
  const imageContainerDiv = document.querySelector("#imageContainerDiv");

  // Function to load the image file dropdown
  function loadImageFileDropdown() {
    for (const imageFile of imageFiles) {
      let option = document.createElement("option");
      option.value = imageFile.id;
      option.innerText = imageFile.description;
      imageFileDropdown.appendChild(option);
    }
  }

  // Function to add an image
  function addImage() {
    const id = imageFileDropdown.value;
    const imageFile = imageFiles.find((imageFile) => imageFile.id == id);

    let image = document.createElement("img");
    image.src = imageFile.path;
    image.alt = imageFile.description;
    imageContainerDiv.appendChild(image);
  }

  // Function to clear images
  function clearImages() {
    imageContainerDiv.innerHTML = "";
  }

  // Event handling
  addImageButton.onclick = addImage;
  clearImagesButton.onclick = clearImages;

  // Initial loading
  loadImageFileDropdown();
};


// window.onload = function () { ... }: This code sets up an anonymous function to run when the HTML page is fully loaded. This ensures that all DOM elements are available for manipulation before JavaScript code executes.

// HTML element variables: These lines use document.querySelector() to select specific HTML elements by their IDs and store them in variables. These variables will be used to reference these elements later in the code.

// loadImageFileDropdown() function: This function dynamically populates the dropdown (<select>) element with options based on the imageFiles array. It creates an <option> element for each image file object in the array and appends it to the dropdown.

// addImage() function: This function is called when the "Add Image" button is clicked. It retrieves the selected image file from the dropdown, creates an <img> element with the corresponding src (image path) and alt (image description), and appends it to the imageContainerDiv.

// clearImages() function: This function is called when the "Clear Images" button is clicked. It removes all child elements (images) from the imageContainerDiv by setting its innerHTML to an empty string.

// Event handling: These lines assign event handlers to the "Add Image" and "Clear Images" buttons, specifying which functions should be called when these buttons are clicked.

// Initial loading: Finally, loadImageFileDropdown() is called once when the page initially loads to populate the dropdown with image options.
