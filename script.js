// Load projects from JSON file
$.getJSON('projects.json', function(data) {
    // Iterate through each project
    data.projects.forEach(function(project) {
      // Create a card for each project
      var card = `
        <div class="col-md-4 mb-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">${project.title}</h5>
              <p class="card-text">${project.student.name}</p>
              <a href="#" class="btn btn-primary" onclick="showProject(${project.id})">Details</a>
            </div>
          </div>
        </div>
      `;
      // Append the card to the container
      $('#projectContainer').append(card);
    });
  });
  
  // Function to show project details
  function showProject(projectId) {
    // Load projects from JSON file
    $.getJSON('projects.json', function(data) {
      // Find the selected project
      var project = data.projects.find(p => p.id === projectId);
  
      // Create a modal to show project details
      var modal = `
        <div class="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-labelledby="projectModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="projectModalLabel">${project.title}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <p>${project.student.bio}</p>
                <p><strong>Pitch Deck:</strong> <a href="${project.student.pitchDeckLink}" target="_blank">Download</a></p>
                <p><strong>Posters:</strong> <a href="${project.student.postersLink}" target="_blank">Download</a></p>
                <p><strong>App Download:</strong> <a href="${project.student.appDownloadLink}" target="_blank">Download</a></p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      `;
  
      // Append the modal to the body
      $('body').append(modal);
  
      // Show the modal
      $('#projectModal').modal('show');
  
      // Remove the modal from the DOM after it's hidden
      $('#projectModal').on('hidden.bs.modal', function (e) {
        $(this).remove();
      });
    });
  }
  