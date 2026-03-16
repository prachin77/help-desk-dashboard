import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Headset } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function AgentLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "agent@support.com" && password === "agent123") {
      toast({ title: "Welcome, Agent!", description: "You have been logged in successfully." });
      navigate("/tickets");
    } else {
      toast({ title: "Login Failed", description: "Invalid credentials. Use agent@support.com / agent123", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto h-12 w-12 rounded-full bg-accent flex items-center justify-center">
            <Headset className="h-6 w-6 text-accent-foreground" />
          </div>
          <CardTitle className="text-2xl">Agent Login</CardTitle>
          <CardDescription>Sign in to handle and resolve support tickets.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="agent@support.com" value={email} onChange={e => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full">Sign In as Agent</Button>
          </form>
          <p className="text-xs text-muted-foreground text-center mt-4">Demo: agent@support.com / agent123</p>
        </CardContent>
      </Card>
    </div>
  );
}
