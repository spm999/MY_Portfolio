    // Hide others opened collapse content before open the current
    $('.portfolio-item').click(function () {
        $('.collapse').collapse('hide');
      });
  
      // Add open works image like a modal lightbox
      $(document).on('click', '[data-toggle="lightbox"]', function (e) {
        e.preventDefault();
        $(this).ekkoLightbox();
      });
  
      // var foot=document.getElementById("footer")
      // Get the footer element by its ID
      const footer = document.getElementById('footer');
  
      // Add event listener for mouseover event
      footer.addEventListener('mouseover', () => {
        // Change the color of the footer
        footer.style.backgroundColor = "green";
      });
  
      // Add event listener for mouseout event
      footer.addEventListener('mouseout', () => {
        // Reset the color of the footer
        footer.style.backgroundColor = 'initial';
      });
  
  
      function openPopup(skill) {
    var title = '';
    var description = '';
  
    // Set the certificate details based on the selected skill
    switch (skill) {
      case 'javascript':
        title = 'JavaScript Certificate';
        description = 'This is the certificate for JavaScript.';
        break;
      case 'python':
        title = 'Python Certificate';
        description = 'This is the certificate for Python.';
        break;
      case 'java':
        title = 'Java Certificate';
        description = 'This is the certificate for Java.';
        break;
    }
  
    // Update the popup content
    document.getElementById('certificate-title').textContent = title;
    document.getElementById('certificate-description').textContent = description;
  
    // Show the popup
    document.getElementById('popup').style.display = 'block';
  }
  
  function closePopup() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
  }