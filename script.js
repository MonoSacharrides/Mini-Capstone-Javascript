let residents = [];
let complaints = [];
let announcements = [];

function updateStats() {
  document.getElementById("resident-count").textContent = residents.length;
  document.getElementById("complaint-count").textContent = complaints.length;
  document.getElementById("announcement-count").textContent = announcements.length;
}

function addResident() {
  const name = prompt("Enter resident's name:");
  const age = prompt("Enter resident's age:");
  const address = prompt("Enter resident's address:");
  residents.push({ name, age, address });
  displayResidents();
  updateStats();
}

function displayResidents() {
  const table = document.getElementById("residents-table");
  table.innerHTML = "";
  residents.forEach((resident, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${resident.name}</td>
      <td>${resident.age}</td>
      <td>${resident.address}</td>
      <td>
        <button onclick="deleteResident(${index})">Delete</button>
      </td>
    `;
    table.appendChild(row);
  });
}

function deleteResident(index) {
  residents.splice(index, 1);
  displayResidents();
  updateStats();
}

function addComplaint() {
  const complaint = prompt("Enter the complaint:");
  complaints.push(complaint);
  displayComplaints();
  updateStats();
}

function displayComplaints() {
  const list = document.getElementById("complaints-list");
  list.innerHTML = "";
  complaints.forEach((complaint) => {
    const li = document.createElement("li");
    li.textContent = complaint;
    list.appendChild(li);
  });
}

function addAnnouncement() {
  const announcement = prompt("Enter the announcement:");
  announcements.push(announcement);
  displayAnnouncements();
  updateStats();
}

function displayAnnouncements() {
  const list = document.getElementById("announcements-list");
  list.innerHTML = "";
  announcements.forEach((announcement) => {
    const li = document.createElement("li");
    li.textContent = announcement;
    list.appendChild(li);
  });
}

updateStats();
