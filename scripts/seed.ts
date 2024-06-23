const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Front-end Development" },
        { name: "Back-end Development" },
        { name: "Mobile Development" },
        { name: "Programming Languages" },
        { name: "Database" },
        { name: "Software Engineering Essentials" },
      ],
    });

    console.log("Success");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();
