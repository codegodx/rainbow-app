import { db } from "@repo/database/prisma";


export const getUser = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: { email },
      select: { email: true },
    });
    return user;
  } catch (error) {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({
      where: { id },
    });
    return user;
  } catch (error) {
    return null;
  }
};


type Role = 'ADMIN' | 'USER';

export const createUser = async (data: { email: string, password: string, emailVerifed? : string , role: Role }) => {
  try {
     // Destructure the 'email' and 'password' properties from the 'data' object
    const user = await db.user.create({
      data: { 
        email : data.email, 
        password: data.password, 
        emailVerified: data.emailVerifed,
        role: data.role
      } // Set emailVerified to null by default
    });
    return user;
  } catch (error) {
    return null;
  }
}

export const getAllUsers = async () => {
  try {
    const users = await db.user.findMany();
    return users;
  } catch (error) {
    return null;
  }
}
