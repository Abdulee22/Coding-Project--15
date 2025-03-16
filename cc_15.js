 // Task 1 - Creating the Base Structure // 
function addRiskItem(riskName, riskLevel, department) {
const riskDashboard = document.getElementById("riskDashboard");// The dashboard
  
// Task 2 - Adding Risk Items//
const riskCard = document.createElement("div");
riskCard.className = "risk-card"; // Created a new risk card
riskCard.innerHTML = `
    <h3>${riskName}</h3>
    <p>Risk Level: ${riskLevel}</p>
    <p>Department: ${department}</p>
    <button class="resolve-btn">Resolve</button>`; // Adding content to the risk card
riskDashboard.appendChild(riskCard);// Appended the card to the dashboard

// Task 3: Removing Risk Items // 
const resolveButton = riskCard.querySelector(".resolve-btn");
resolveButton.addEventListener("click", (event) => {
event.stopPropagation(); // Prevent event bubbling
riskDashboard.removeChild(riskCard);}) // Remove the card
