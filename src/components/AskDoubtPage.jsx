import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useNavigate } from "react-router-dom"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Upload, Image as ImageIcon, File } from "lucide-react"

export function AskDoubtPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="border-b bg-white shadow-sm">
        <div className="flex h-16 items-center px-4 container mx-auto">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/90 transition-colors" onClick={() => navigate('/user')}>
              Askera
            </span>
          </div>

          {/* Right side - User Profile */}
          <div className="flex items-center space-x-4 ml-auto">
            <Dialog>
              <DialogTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-300 hover:scale-105">
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
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-red-50 hover:text-red-600 transition-colors" 
                    onClick={() => navigate('/')}
                  >
                    Logout
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>

      {/* Ask Question Form */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Ask a New Question</h1>
          
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Question Title</Label>
                <Input 
                  id="title" 
                  placeholder="Enter a clear and concise title for your question"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Choose Subject</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="programming">Programming</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="faculty">Choose Faculty</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select faculty member" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="faculty1">Dr. Smith</SelectItem>
                    <SelectItem value="faculty2">Prof. Johnson</SelectItem>
                    <SelectItem value="faculty3">Dr. Williams</SelectItem>
                    <SelectItem value="faculty4">Prof. Brown</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversation">Your Question</Label>
                <Textarea 
                  id="conversation" 
                  placeholder="Type your question here..."
                  className="min-h-[200px]"
                />
              </div>

              {/* File Upload Section */}
              <div className="space-y-4">
                <Label>Attachments</Label>
                <div className="grid grid-cols-2 gap-4">
                  {/* Photo Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="photos" className="flex items-center gap-2">
                      <ImageIcon className="h-4 w-4" />
                      Photos
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="photos"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => document.getElementById('photos').click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Photos
                      </Button>
                    </div>
                  </div>

                  {/* File Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="files" className="flex items-center gap-2">
                      <File className="h-4 w-4" />
                      Documents
                    </Label>
                    <div className="flex items-center gap-2">
                      <Input
                        id="files"
                        type="file"
                        multiple
                        className="hidden"
                      />
                      <Button
                        type="button"
                        variant="outline"
                        className="w-full"
                        onClick={() => document.getElementById('files').click()}
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Files
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-4">
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/user')}
                >
                  Cancel
                </Button>
                <Button 
                  className="bg-primary hover:bg-primary/90"
                  onClick={() => navigate('/user')}
                >
                  Submit Doubt
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 