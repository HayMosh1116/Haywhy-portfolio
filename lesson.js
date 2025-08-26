const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 58 },
  { name: "Charlie", score: 92 },
  { name: "David", score: 76 },
  { name: "Eve", score: 64 }
];

function getLetterGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
};

// Get table body
const tableBody = document.querySelector("#studentTable tbody");

// Insert students into table
students.forEach(student => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${student.name}</td>
    <td>${student.score}</td>
    <td>${getLetterGrade(student.score)}</td>
  `;
  // Highlight failing students
  if (student.score < 60) {
    row.classList.add("fail");
  }
  tableBody.appendChild(row);
});

// Find top student
const topStudent = students.reduce((max, s) => s.score > max.score ? s : max);
document.getElementById("topStudent").textContent =
  `🏆 Top Student: ${topStudent.name} with ${topStudent.score}`;

// Find average
const avg = students.reduce((sum, s) => sum + s.score, 0) / students.length;
document.getElementById("averageScore").textContent =
  `📈 Average Score: ${avg.toFixed(2)}`;
