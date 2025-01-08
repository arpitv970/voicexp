import { getUser, handleSignIn, handleSignOut } from "@/actions/auth-actions";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import type { User } from "@auth/core/types";

export const OAuthGoogle: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser: User | null = await getUser();
      setUser(currentUser);
    };
    fetchUser();
  }, []);

  const isSignedIn = Boolean(user);

  return (
    <form action={isSignedIn ? handleSignOut : handleSignIn}>
      <Button type="submit" variant="outline" className="w-full mt-4">
        {isSignedIn
          ? `Sign Out (${user?.name ?? "User"})`
          : "Sign In with Google"}
      </Button>
    </form>
  );
};
