import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Redirect to dashboard after login
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard");
    }, 1000);
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    // Add social login logic here
  };

  const handleForgotPassword = () => {
    // Send OTP to email
    setShowOTP(true);
    console.log("Sending OTP to:", forgotEmail);
  };

  const handleOTPVerification = () => {
    // Verify OTP
    console.log("Verifying OTP:", otp);
    setShowForgotPassword(false);
    setShowOTP(false);
  };

  return (
    <div className="min-h-screen wix-gradient-hero flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block mb-6">
            <img 
              src="/lovable-uploads/c460e404-d130-4c54-995b-e0fab931ed74.png" 
              alt="Loomy Logo" 
              className="h-16 w-auto mx-auto"
            />
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Sign in to continue your learning journey</p>
        </div>

        {/* Login Form */}
        <div className="bg-card/90 backdrop-blur-sm border border-border/20 rounded-2xl p-8 shadow-wix-float">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="h-12 rounded-xl border-border/30 bg-background/50 backdrop-blur-sm focus:border-primary transition-all duration-200"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Password
                </Label>
                <Dialog open={showForgotPassword} onOpenChange={setShowForgotPassword}>
                  <DialogTrigger asChild>
                    <Button 
                      variant="ghost" 
                      className="h-auto p-0 text-sm text-primary hover:text-primary/80 font-medium"
                    >
                      Forgot Password?
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>
                        {showOTP ? "Enter OTP" : "Forgot Password"}
                      </DialogTitle>
                    </DialogHeader>
                    <div className="space-y-4">
                      {!showOTP ? (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="forgotEmail">Email</Label>
                            <Input
                              id="forgotEmail"
                              type="email"
                              value={forgotEmail}
                              onChange={(e) => setForgotEmail(e.target.value)}
                              placeholder="Enter your email"
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <Button 
                            onClick={handleForgotPassword}
                            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
                          >
                            Send OTP
                          </Button>
                        </>
                      ) : (
                        <>
                          <div className="space-y-2">
                            <Label htmlFor="otp">Enter OTP</Label>
                            <Input
                              id="otp"
                              type="text"
                              value={otp}
                              onChange={(e) => setOTP(e.target.value)}
                              placeholder="Enter 6-digit OTP"
                              className="h-12 rounded-xl"
                            />
                          </div>
                          <Button 
                            onClick={handleOTPVerification}
                            className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl"
                          >
                            Verify OTP
                          </Button>
                        </>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="h-12 rounded-xl border-border/30 bg-background/50 backdrop-blur-sm focus:border-primary transition-all duration-200"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl shadow-wix-card hover:shadow-wix-float transition-all duration-300 hover:scale-105"
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {/* Divider */}
          <div className="my-6">
            <Separator className="bg-border/30" />
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => handleSocialLogin("google")}
              variant="outline"
              className="w-full h-12 bg-background/50 backdrop-blur-sm border-border/30 hover:bg-accent/20 rounded-xl transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
            
            <Button
              onClick={() => handleSocialLogin("apple")}
              variant="outline"
              className="w-full h-12 bg-background/50 backdrop-blur-sm border-border/30 hover:bg-accent/20 rounded-xl transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#000000" d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Continue with Apple
            </Button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link 
                to="/signup" 
                className="text-primary hover:text-primary/80 font-semibold transition-colors duration-200"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};