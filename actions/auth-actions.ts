"use server";

import { auth, signIn, signOut } from "@/auth";
import type { User } from "@auth/core/types";

export const handleSignIn = async () => {
  await signIn("google", {
    redirect: true,
    redirectTo: "/dashboard",
  });
};

export const handleSignOut = async () => {
  await signOut();
};

export const getUser = async (): Promise<User | null> => {
  const session = await auth();

  // Ensure session.user exists and validate the structure
  if (
    session?.user &&
    typeof session.user.name === "string" &&
    typeof session.user.email === "string"
  ) {
    return {
      ...session.user,
      image: session.user.image || undefined, // Optional field fallback
    } as User; // Explicitly cast to User type
  }

  return null; // Return null if no valid user is found
};
