import { useState } from "react";
import { Form, Link } from "react-router";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
export { action } from "~/signUp.server";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex justify-center items-center p-4 sm:p-8 min-h-screen">
      <Card className="p-0 w-full max-w-sm overflow-hidden">
        <CardContent className="p-0">
          <Form method="post" className="space-y-6 p-4 sm:p-6 md:p-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <h1 className="font-bold text-xl sm:text-2xl">
                  Create an account
                </h1>
                <p className="text-muted-foreground text-sm sm:text-base text-balance">
                  Sign up for your My Little World account
                </p>
              </div>
              <div className="gap-2 sm:gap-3 grid">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="gap-2 sm:gap-3 grid">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="gap-2 sm:gap-3 grid">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                Sign Up
              </Button>
              <div className="text-xs sm:text-sm text-center">
                Already have an account?
                <Link to="/login">Login</Link>
              </div>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
