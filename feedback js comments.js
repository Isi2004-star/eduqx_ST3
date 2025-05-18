<!-- Feedback Page Script -->
<script>
  // Wait for the DOM to load completely before running the script
  document.addEventListener("DOMContentLoaded", function () {
    const inclusiveNo = document.getElementById("inclusive-no"); // 'No' radio button
    const inclusiveYes = document.getElementById("inclusive-yes"); // 'Yes' radio button
    const improvementsContainer = document.getElementById("improvements-container"); // Container to show if 'No' is selected

    // Function to show or hide improvements textarea based on user's choice
    function toggleImprovements() {
      if (inclusiveNo.checked) {
        improvementsContainer.style.display = "block"; // Show improvements if 'No' is selected
      } else {
        improvementsContainer.style.display = "none"; // Hide improvements otherwise
      }
    }

    // So anytime the user clicks Yes or No, the visibility of the improvement section is updated immediately
    inclusiveNo.addEventListener("change", toggleImprovements);
    inclusiveYes.addEventListener("change", toggleImprovements);

    // So even before the user clicks anything, the visibility is already correctly set.
    toggleImprovements();
  });

  // Function to count words, limit to 300, and show/hide warning messages
  function updateWordCount(textareaId, countId) {
    let text = document.getElementById(textareaId).value.trim(); // Get the trimmed value from textarea
    let words = text.split(/\s+/).filter((word) => word.length > 0); // Split into words and filter out empty ones
    let wordCount = words.length; // Total number of valid words

    document.getElementById(countId).textContent = `Total words: ${wordCount}`; // Update the count display

    const warningId = textareaId + "-warning"; // Get corresponding warning message ID
    const warningElement = document.getElementById(warningId); // Get warning element

    if (wordCount > 300) {
      const trimmedText = words.slice(0, 300).join(" "); // Keep only first 300 words
      document.getElementById(textareaId).value = trimmedText; // Replace textarea content
      warningElement.textContent = "Word limit reached!"; // Show warning text
      warningElement.style.display = "block"; // Show the warning message
      document.querySelector('button[type="submit"]').disabled = true; // Disable the submit button
    } else {
      document.getElementById(warningId).style.display = "none"; // Hide warning message
      document.querySelector('button[type="submit"]').disabled = false; // Enable the submit button
    }
  }

  // Function to show or hide 'Other' textarea when checkbox is selected
  function toggleOtherTextArea() {
    const otherCheckbox = document.getElementById("other-one"); // Checkbox element
    const otherTextArea = document.getElementById("other-area"); // Associated textarea

    if (otherCheckbox.checked) {
      otherTextArea.style.display = "block"; // Show textarea
    } else {
      otherTextArea.style.display = "none"; // Hide textarea
    }
  }

  // Function to validate the email format using regular expression
  function validateEmail() {
    const emailInput = document.getElementById("email"); // Email input field
    const emailError = document.getElementById("email-error"); // Email error message
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zAZ0-9.-]+\.[a-zA-Z]{2,}$/; // Regex for email validation
    const emailValue = emailInput.value; // Value from input

    if (!emailPattern.test(emailValue)) {
      emailError.style.display = "block"; // Show error if email is invalid
    } else {
      emailError.style.display = "none"; // Hide error if email is valid
    }
  }

  // Function to display selected file name when a file is chosen
  function displayFileName() {
    const fileInput = document.getElementById("file-upload"); // File input element
    const fileNameDisplay = document.getElementById("file-name"); // Element to display filename
    const fileName = fileInput.files[0]
      ? fileInput.files[0].name // Get the file name
      : "No file chosen"; // Default if no file selected
    fileNameDisplay.textContent = fileName; // Display file name
  }

  // Show success message and hide the form on submission
  document
    .getElementById("feedback-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from actually submitting to server
      document.getElementById("feedback-form").style.display = "none"; // Hide the form
      document.getElementById("success-message").style.display = "flex"; // Show the success message
    });
</script>
