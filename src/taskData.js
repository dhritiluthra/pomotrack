// Define a safe UUID generator
function generateUUID() {
  if (crypto.randomUUID) return crypto.randomUUID(); // Modern browsers
  return "xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Export the data
export default [
  {
    id: generateUUID(),
    pomos: 3,
    title: "delectus aut autem",
    note: "Do it asap",
    completed: 1,
  },
  {
    id: generateUUID(),
    pomos: 5,
    title: "delectus aut autem",
    note: "Do it asap",
    completed: 2,
  },
  {
    id: generateUUID(),
    pomos: 3,
    title: "delectus aut autem",
    completed: 1,
  },
];
