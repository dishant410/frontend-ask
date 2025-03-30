import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Navbar({ isLoginOpen, setIsLoginOpen, isSignupOpen, setIsSignupOpen }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false) // This should come from your auth context/state management
  const navigate = useNavigate()

  const handleLogin = () => {
    setIsLoginOpen(false)
    navigate('/user')
  }

  if (!isAuthenticated) {
    return (
      <nav className="border-b z-50 bg-white">
        <div className="flex h-16 items-center px-4 container mx-auto">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate('/')}>
              Askera
            </span>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Login</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Login to Askera</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Enter your password" />
                  </div>
                  <Button className="w-full" onClick={handleLogin}>Login</Button>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog open={isSignupOpen} onOpenChange={setIsSignupOpen}>
              <DialogTrigger asChild>
                <Button>Sign Up</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Create an Account</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="username">Fullname</Label>
                    <Input id="username" placeholder="Choose a username" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" placeholder="Create a password" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="department">Department</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="arts">Arts</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <Button className="w-full">Sign Up</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <nav className="border-b bg-white">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Left side - Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary cursor-pointer" onClick={() => navigate('/')}>
            Askera
          </span>
        </div>

        {/* Middle - Navigation Links */}
        <div className="flex-1 flex justify-center items-center space-x-8">
          <Button variant="ghost" className="text-lg font-medium hover:text-primary">
            Solved Questions
          </Button>
          <Button variant="ghost" className="text-lg font-medium hover:text-primary">
            Unsolved Questions
          </Button>
        </div>

        {/* Right side - User Profile */}
        <div className="flex items-center space-x-4">
          <Dialog>
            <DialogTrigger asChild>
              <Avatar className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-primary transition-all">
                <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Profile</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-20 w-20">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-gray-500">john.doe@example.com</p>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label>Department</Label>
                  <p className="text-sm">Computer Science</p>
                </div>
                <div className="grid gap-2">
                  <Label>Phone Number</Label>
                  <p className="text-sm">+1 234 567 8900</p>
                </div>
                <Button variant="outline" className="w-full" onClick={() => setIsAuthenticated(false)}>
                  Logout
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </nav>
  )
} 