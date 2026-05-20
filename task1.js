task1.js
function analyzeScores(students) {
  if (!Array.isArray(students) || students.length === 0) {
    return {
      passed: [],
      failed: [],
      average: 0,
      best: null
    };
  }

  const passed = students
    .filter(s => s.score >= 60)
    .map(s => s.name);

  const failed = students
    .filter(s => s.score < 60)
    .map(s => s.name);

  const average = students.reduce((sum, s) => sum + s.score, 0) / students.length;

  const best = students.reduce((max, s) => {
    return s.score > max.score ? s : max;
  });

  return {
    passed,
    failed,
    average,
    best: best.name
  };
}

// тест
const students = [
  { name: "Іван", score: 85 },
  { name: "Марія", score: 42 },
  { name: "Олег", score: 93 },
  { name: "Анна", score: 55 }
];

console.log(analyzeScores(students));
