import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("User info during sign-in:", {
        user,
        account,
        profile,
        email,
        credentials,
      });
      return true; // Return `false` to deny access
    },
    async session({ session, token, user }) {
      console.log("Session callback triggered:", {
        session,
        token,
        user,
      });
      return session; // Pass the session object as is or modify it
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      console.log("JWT callback triggered:", {
        token,
        user,
        account,
        profile,
        isNewUser,
      });
      return token; // Pass the token object as is or modify it
    },
  },
});
