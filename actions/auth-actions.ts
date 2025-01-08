import { signIn as googleSignIn } from "next-auth/react";

export const handleGoogleAuth = async () => {
  try {
    // Perform Google OAuth sign-in
    const user = await googleSignIn("google", { redirect: false });

    console.log("New user created:", user);
    return { ok: true, message: "User created successfully" };
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "Error during Google OAuth or database operations:",
        error.message,
      );
      return { ok: false, error: error.message };
    } else {
      // If error is not an instance of Error (should not happen normally)
      console.error("Unknown error:", error);
      return { ok: false, error: "An unknown error occurred." };
    }
  }
};
