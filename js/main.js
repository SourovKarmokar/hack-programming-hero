const milestonesData = JSON.parse(data).data;


//load course milestones data 
function loadMilestones (){
    const milestones = document.querySelector('.milestones');



    milestones.innerHTML = `${milestonesData.map(function(milestone){
        return `<div class="milestone border-b id=${milestone._id} ">
            <div class="flex">
              <div class="checkbox"><input type="checkbox" onclick="markMileStone(this , ${milestone._id})" /></div>
              <div onclick ="openMilestone(this,${milestone._id})">
                <p>
                  ${milestone.name}
                  <span><i class="fas fa-chevron-down"></i></span>
                </p>
              </div>
            </div>
            <div class="hidden_panel">
              ${milestone.modules.map(function(module){
                 return `<div class = "module border-b "> 
                 <p>${module.name} </p>
                 </div>`;
              
              }).join(" ")};
            </div>
          </div>`;

    }).join(" ")}`;


    
}function openMilestone (milestoneElement , id){
  const currentPanel = milestoneElement.parentNode.nextElementSibling ;
  const showPanel = document.querySelector(".show");
  const active = document.querySelector(".active");

  //first remove previous active class if any[other then the click one]
  if (active && !milestoneElement.classList.contains("active")){
    active.classList.remove("active");
  }

  //toggle current clicked one
  milestoneElement.classList.toggle("active");
  
   // first hide previous panel if open [other then the clicked elenmend]
   if(!currentPanel.classList.contains("show") && showPanel )
  showPanel.classList.remove("show");

  //toggle current elemend
  currentPanel.classList.toggle('show');

  showMilestone(id);


}


function showMilestone(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const details = document.querySelector(".details");


  milestoneImage.computedStyleMap.opacity = "0";
  milestoneImage.src = milestonesData[id].image;
  name.innerHTML = milestonesData[id].name;
  details.innerHTML = milestonesData[id].description;
}

//listen for hero image load
const milestoneImage = document.querySelector(".milestoneImage");
milestoneImage.onload = function (){
  this.style.opacity = "1";
};


function markMileStone(checkbox, id){ 
  const doneList = document.getElementsByClassName("doneList");
  const milestonesList =  document.querySelector(".milestones");
  const item = document.getElementById(id);

  if(checkbox.checked){
    //mark as done
    milestonesList.removeChild(item);
    doneList.appendChild(item);
  }else{
    //back is main list
    milestonesList.appendChild(item);
    doneList.removeChild(item);
  }

}

loadMilestones ()