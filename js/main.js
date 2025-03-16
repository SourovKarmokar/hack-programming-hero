const milestonesData = JSON.parse(data).data;


//load course milestones data 
function loadMilestones (){
    const milestones = document.querySelector('.milestones');



    milestones.innerHTML = milestonesData ;


    
}
loadMilestones ()