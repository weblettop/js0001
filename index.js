const daysOfWeek = [
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П’ятниця",
  "Субота",
  "Неділя"
];

console.log("Дні тижня:");
for (let i = 0; i < daysOfWeek.length; i++) {
  console.log(`${i + 1}: ${daysOfWeek[i]}`);
}

/////////////2025
console.log("Парні дні тижня:");

daysOfWeek.forEach((day, index) => {
  if (index % 2 === 0) {
    console.log(`${index + 1}: ${day}`);
  }
});
///////////////