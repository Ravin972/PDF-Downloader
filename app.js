// Get the file input element and upload button
const fileInput = document.querySelector('input[type="file"]');
const uploadButton = document.querySelector("#upload-btn");

// Get the download button
const downloadButton = document.querySelector("#download-btn");

// Listen for changes to the file input
fileInput.addEventListener("change", (event) => {
  const file = event.target.files[0];

  // Store the file in localStorage
  localStorage.setItem("pdf", JSON.stringify(file));

  // Display the uploaded file
  const uploadedFile = document.createElement("p");
  uploadedFile.textContent = `Uploaded file: ${file.name}`;
  document.body.appendChild(uploadedFile);

  // Show the download button
  downloadButton.parentNode.style.display = "flex";
});

// Listen for clicks on the upload button
uploadButton.addEventListener("click", (event) => {
  // Trigger the file input click event
  fileInput.click();
});

// Listen for clicks on the download button
downloadButton.addEventListener("click", (event) => {
  // Retrieve the file from localStorage
  const storedFile = JSON.parse(localStorage.getItem("pdf"));

  // Create a download link for the file
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(storedFile);
  downloadLink.download = storedFile.name;

  // Click the download link to start the download
  downloadLink.click();
});
