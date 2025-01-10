"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { OAuthGoogle } from "./oauth-google";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { registerSchema } from "@/lib/schema";
import { BrandLogo } from "@/components/shared/brand-logo";

interface ISignupForm {
  className?: string;
}

export const SignupForm: React.FC<ISignupForm> = ({ className }) => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
  });

  const { handleSubmit } = form;

  const onSubmit = (values: z.infer<typeof registerSchema>) => {
    console.log(`form data -> `, values);
  };

  return (
    <Form {...form}>
      <Card>
        <CardHeader className="text-center mx-auto">
          <CardTitle className="text-2xl">
            <Link href={"/"}>
              <BrandLogo />
            </Link>
          </CardTitle>
          <CardDescription>
            Enter your details below to create new account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("flex flex-col gap-6", className)}
          >
            <div className="flex flex-col gap-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-between items-center">
                      Password
                    </FormLabel>

                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <Input id="password" type="password" {...field} />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Register
              </Button>
            </div>
          </form>
          <OAuthGoogle />
          <div className="mt-4 text-center text-sm flex flex-col justify-between items-center">
            Already have an account?
            <Button asChild variant={"link"}>
              <Link href="/login">Log In</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </Form>
  );
};
