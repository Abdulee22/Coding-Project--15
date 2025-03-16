 // Task 1: Creating the Base Structure // 
function addRiskItem(riskName, riskLevel, department) {
const riskDashboard = document.getElementById("riskDashboard");// The dashboard
  
// Task 2: Adding Risk Items//
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

// Task 4: Categorizing Risks by Level //
if (riskLevel === "Low") {
riskCard.style.backgroundColor = "green";}
     else if (riskLevel === "Medium") {
riskCard.style.backgroundColor = "yellow";} 
     else if (riskLevel === "High") {
riskCard.style.backgroundColor = "red";}} // Color Change

// Task 5: Implementing Bulk Updates //
function increaseRiskLevels() {
const riskCards = document.querySelectorAll(".risk-card");
riskCards.forEach(card => {
const riskLevelElement = card.querySelector("p");
let riskLevel = riskLevelElement.innerText.replace("Risk Level: ", "");
    
if (riskLevel === "Low") {
riskLevelElement.innerText = "Risk Level: Medium";
card.style.backgroundColor = "yellow";}
     else if (riskLevel === "Medium") {
 riskLevelElement.innerText = "Risk Level: High";
card.style.backgroundColor = "red";}});}
const increaseRiskLevelsButton = document.getElementById("increaseRiskLevels");// Added event listener to the Increase Risk button
 increaseRiskLevelsButton.addEventListener("click", increaseRiskLevels);

 // Task 6: Handling Event Propagation //

const riskDashboard = document.getElementById("riskDashboard");
riskDashboard.addEventListener("click", (event) => {
if (event.target.classList.contains("risk-card")) {
console.log("Risk card clicked:", event.target.querySelector("h3").innerText);}});

// Test Case //
addRiskItem("Cybersecurity Threat", "High", "IT");
addRiskItem("HR Compliance Issue", "Low", "Human Resources");
addRiskItem("Market Fluctuations", "High", "Finance");
addRiskItem("Data Breach", "High", "IT");
addRiskItem("Supply Chain Disruption", "Medium", "Operations");
addRiskItem("Employee Retention", "Low", "HR");
 