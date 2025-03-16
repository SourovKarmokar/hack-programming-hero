const milestonesData = JSON.parse(data).data;


//load course milestones data 
function loadMilestones (){
    const milestones = document.querySelector('.milestones');



    milestones.innerHTML = `${milestonesData.map(function(milestone){
        return `<div class="milestone border-b">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" /></div>
              <div>
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              <div class="module border-b">
                <p>Module Name</p>
              </div>
            </div>
          </div>`;

    }).join(" ")}`;


    
}
loadMilestones ()