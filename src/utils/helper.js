export function generateRandomName() {
  const firstNames = [
    "Liam",
    "Emma",
    "Noah",
    "Olivia",
    "Elijah",
    "Ava",
    "Lucas",
    "Sophia",
    "Mason",
    "Isabella",
    "Logan",
    "Mia",
    "James",
    "Charlotte",
    "Aiden",
    "Amelia",
    "Ethan",
    "Harper",
    "Jacob",
    "Evelyn",
    "Michael",
    "Abigail",
    "Daniel",
    "Emily",
    "Henry",
    "Elizabeth",
    "Jackson",
    "Mila",
    "Sebastian",
    "Ella",
    "Alexander",
    "Avery",
    "Matthew",
    "Sofia",
    "Samuel",
    "Camila",
    "David",
    "Aria",
    "Joseph",
    "Scarlett",
  ];

  const lastNames = [
    "Smith",
    "Johnson",
    "Williams",
    "Brown",
    "Jones",
    "Garcia",
    "Miller",
    "Davis",
    "Rodriguez",
    "Martinez",
    "Hernandez",
    "Lopez",
    "Gonzalez",
    "Wilson",
    "Anderson",
    "Thomas",
    "Taylor",
    "Moore",
    "Jackson",
    "Martin",
    "Lee",
    "Perez",
    "Thompson",
    "White",
    "Harris",
    "Sanchez",
    "Clark",
    "Ramirez",
    "Lewis",
    "Robinson",
    "Walker",
    "Young",
    "Allen",
    "King",
    "Wright",
    "Scott",
    "Torres",
    "Nguyen",
    "Hill",
  ];

  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirst} ${randomLast}`;
}

export function getRandomMessage() {
  const adjectives = [
    "Awesome",
    "Fantastic",
    "Incredible",
    "Brilliant",
    "Amazing",
    "Super",
  ];
  const nouns = [
    "day",
    "adventure",
    "journey",
    "moment",
    "experience",
    "opportunity",
  ];
  const verbs = ["embrace", "enjoy", "seize", "create", "conquer", "explore"];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

  // Combine the words into a sentence
  const message = `${randomAdjective} ${randomNoun}, let's ${randomVerb}!`;

  // Ensure the message is no longer than 30 characters
  return message.length <= 30 ? message : message.slice(0, 40);
}
