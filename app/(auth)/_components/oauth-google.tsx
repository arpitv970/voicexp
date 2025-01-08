"use client";

import { handleGoogleAuth } from "@/actions/auth-actions";
import { GoogleIcon } from "@/components/shared/icons/google-icon";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface IOAuthGoogle {
  children?: React.ReactNode;
  className?: string;
}

export const OAuthGoogle: React.FC<IOAuthGoogle> = ({
  children,
  className,
}) => {
  const handleClick = async () => {
    try {
      const response = await handleGoogleAuth();
      if (!response.ok) {
        throw new Error(response.error);
      }
    } catch (error) {
      console.error("Error during Google sign-up:", error);
    }
  };

  return (
    <Button
      type="button"
      variant="outline"
      className={cn("w-full", className)}
      onClick={handleClick}
    >
      {children || <GoogleIcon />}
    </Button>
  );
};
