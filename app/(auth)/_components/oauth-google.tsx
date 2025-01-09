import { getUser, handleSignIn, handleSignOut } from "@/actions/auth-actions";
import { Button, ButtonProps } from "@/components/ui/button";
import { useState, useEffect } from "react";
import type { User } from "@auth/core/types";
import { cn } from "@/lib/utils";

interface IOAuthGoogle extends ButtonProps {
  children?: React.ReactNode;
  className?: string;
}

export const OAuthGoogle: React.FC<IOAuthGoogle> = ({
  children,
  className,
  variant = "outline",
  size,
}) => {
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
      <Button
        type="submit"
        variant={variant}
        size={size}
        className={cn("w-full mt-4", className)}
      >
        {children
          ? children
          : isSignedIn
            ? `Sign Out (${user?.name ?? "User"})`
            : "Sign In with Google"}
      </Button>
    </form>
  );
};
