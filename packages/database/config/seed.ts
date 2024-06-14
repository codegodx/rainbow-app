import { PrismaClient } from "@prisma/client";
// eslint-disable-next-line import/no-extraneous-dependencies -- jancok
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

const DEFAULT_USERS = [
  {
    name: "psycode",
    email: "godx@mail.com",
    password: "password123",
  },
];

async function main(): Promise<void> {
  try {
    await Promise.all(
      DEFAULT_USERS.map(async (user) => {
        const hashedPassword = await hash(user.password, 10); // Hash the password with bcrypt
        await prisma.user.upsert({
          where: { email: user.email },
          update: user,
          create: {
            ...user,
            password: hashedPassword, // Store hashed password in the database
          },
        });
      })
    );
    console.log("Default users seeded successfully.");
  } catch (error) {
    console.error("Error seeding default users:", error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// Invoke the main function
void main();
