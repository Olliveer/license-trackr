const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.user.create({
      data: {
        name: "John Doe",
        email: "John@email.com",
      },
    });

    console.log("Seeding completed");
  } catch (error) {
    console.error("Error seeding database", error);
  } finally {
    await database.$disconnect();
  }
}

main();
