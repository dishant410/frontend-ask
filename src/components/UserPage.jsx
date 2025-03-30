import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export function UserPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('all')
  const [expandedQuestion, setExpandedQuestion] = useState(null)

  // Sample data for questions
  const allQuestions = [
    {
      id: 1,
      title: "How to implement binary search in Python?",
      answer: "Here's how to implement binary search in Python:\n\n```python\ndef binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1\n```\n\nThis implementation has a time complexity of O(log n) and space complexity of O(1).",
      department: "Computer Science",
      date: "2024-03-28",
      status: "solved",
      author: "John Doe"
    },
    {
      id: 2,
      title: "What is the difference between HTTP and HTTPS?",
      answer: "HTTP (HyperText Transfer Protocol) and HTTPS (HTTP Secure) have several key differences:\n\n1. Security:\n   - HTTP: Data is sent in plain text\n   - HTTPS: Data is encrypted using SSL/TLS\n\n2. Port:\n   - HTTP: Port 80\n   - HTTPS: Port 443\n\n3. Certificate:\n   - HTTP: No SSL certificate required\n   - HTTPS: Requires SSL certificate\n\n4. SEO:\n   - HTTP: Lower ranking in search engines\n   - HTTPS: Better ranking in search engines",
      department: "Computer Science",
      date: "2024-03-27",
      status: "solved",
      author: "Jane Smith"
    },
    {
      id: 3,
      title: "Explain the concept of React hooks",
      answer: "React hooks are functions that allow you to use state and other React features in functional components. Here are the main hooks:\n\n1. useState:\n```javascript\nconst [count, setCount] = useState(0);\n```\n\n2. useEffect:\n```javascript\nuseEffect(() => {\n  document.title = `Count: ${count}`;\n}, [count]);\n```\n\n3. useContext:\n```javascript\nconst value = useContext(MyContext);\n```\n\n4. useReducer:\n```javascript\nconst [state, dispatch] = useReducer(reducer, initialState);\n```",
      department: "Computer Science",
      date: "2024-03-26",
      status: "solved",
      author: "Mike Johnson"
    },
    {
      id: 4,
      title: "How to optimize database queries?",
      department: "Computer Science",
      date: "2024-03-28",
      status: "pending",
      author: "Sarah Wilson"
    },
    {
      id: 5,
      title: "What are the best practices for API design?",
      department: "Computer Science",
      date: "2024-03-27",
      status: "pending",
      author: "Tom Brown"
    },
    {
      id: 6,
      title: "How to implement authentication in Node.js?",
      department: "Computer Science",
      date: "2024-03-26",
      status: "pending",
      author: "Emma Davis"
    }
  ]

  const filteredQuestions = activeTab === 'all' 
    ? allQuestions 
    : allQuestions.filter(q => q.status === activeTab)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const answerVariants = {
    hidden: { 
      opacity: 0,
      height: 0,
      marginTop: 0
    },
    visible: { 
      opacity: 1,
      height: "auto",
      marginTop: "1rem",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      marginTop: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn"
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar */}
      <nav className="border-b bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <div className="flex h-16 items-center px-4 container mx-auto">
          {/* Left side - Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent cursor-pointer hover:from-primary/90 hover:to-purple-600/90 transition-all duration-300" onClick={() => navigate('/')}>
              Askera
            </span>
          </div>

          {/* Middle - Navigation Links */}
          <div className="flex-1 flex justify-center items-center space-x-8">
            <Button 
              variant={activeTab === 'all' ? "default" : "ghost"}
              className="text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              onClick={() => setActiveTab('all')}
            >
              All Questions
            </Button>
            <Button 
              variant={activeTab === 'solved' ? "default" : "ghost"}
              className="text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              onClick={() => setActiveTab('solved')}
            >
              Solved Questions
            </Button>
            <Button 
              variant={activeTab === 'pending' ? "default" : "ghost"}
              className="text-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-md"
              onClick={() => setActiveTab('pending')}
            >
              Unsolved Questions
            </Button>
          </div>

          {/* Right side - User Profile */}
          <div className="flex items-center space-x-4">
            <Dialog>
              <DialogTrigger asChild>
                <Avatar className="h-10 w-10 cursor-pointer hover:ring-2 hover:ring-primary transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">Profile</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20 ring-4 ring-primary/20">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User avatar" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">John Doe</h3>
                      <p className="text-sm text-gray-500">john.doe@example.com</p>
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-gray-600">Department</Label>
                    <p className="text-sm font-medium">Computer Science</p>
                  </div>
                  <div className="grid gap-2">
                    <Label className="text-gray-600">Phone Number</Label>
                    <p className="text-sm font-medium">+1 234 567 8900</p>
                  </div>
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-red-50 hover:text-red-600 transition-colors hover:shadow-md" 
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

      {/* Questions Dashboard */}
      <div className="container mx-auto px-4 py-8">
        <motion.div 
          className="flex justify-between items-center mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {activeTab === 'all' 
              ? "All Questions" 
              : activeTab === 'solved' 
                ? "Solved Questions" 
                : "Unsolved Questions"}
          </h1>
          <Button 
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            onClick={() => navigate('/ask-doubt')}
          >
            Ask New Question
          </Button>
        </motion.div>

        <motion.div 
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence>
            {filteredQuestions.map((question) => (
              <motion.div 
                key={question.id}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:bg-white"
              >
                <div className="flex justify-between items-start">
                  <div className="space-y-2">
                    <div className="flex items-center gap-4">
                      <h3 className="text-xl font-semibold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent hover:from-primary hover:to-purple-600 transition-all duration-300">
                        {question.title}
                      </h3>
                      <Badge 
                        variant={question.status === 'solved' ? "success" : "secondary"}
                        className={`capitalize shadow-sm ${
                          question.status === 'solved' 
                            ? 'bg-green-500/10 text-green-600 hover:bg-green-500/20' 
                            : 'bg-yellow-500/10 text-yellow-600 hover:bg-yellow-500/20'
                        }`}
                      >
                        {question.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm relative">
                      <span className="text-indigo-600 font-medium relative z-10">{question.department}</span>
                      <span className="text-gray-300 relative z-10">•</span>
                      <span className="text-purple-600 font-medium relative z-10">Asked by {question.author}</span>
                      <span className="text-gray-300 relative z-10">•</span>
                      <span className="text-gray-500 relative z-10">{question.date}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/50 via-purple-50/50 to-indigo-50/50 rounded-full blur-sm opacity-50"></div>
                    </div>
                  </div>
                  {question.status === 'solved' && (
                    <Button 
                      variant="outline" 
                      size="sm"
                      className={`hover:bg-primary/10 transition-colors hover:shadow-md ${
                        expandedQuestion === question.id 
                          ? 'bg-primary/10 text-primary border-primary/20' 
                          : 'hover:border-primary/20'
                      }`}
                      onClick={() => setExpandedQuestion(expandedQuestion === question.id ? null : question.id)}
                    >
                      {expandedQuestion === question.id ? (
                        <>
                          Hide Answer <ChevronUp className="ml-2 h-4 w-4" />
                        </>
                      ) : (
                        <>
                          View Answer <ChevronDown className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  )}
                </div>
                <AnimatePresence>
                  {question.status === 'solved' && expandedQuestion === question.id && (
                    <motion.div
                      variants={answerVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="mt-4 p-4 bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-100 shadow-inner relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzYuMjUgMzUuMjVhMS4yNSAxLjI1IDAgMTAwLTIuNSAxLjI1IDEuMjUgMCAwMDIuNSAweiIgZmlsbD0iI2VlZWVlZSIvPjxwYXRoIGQ9Ik0zMC4yNSAzNS4yNWExLjI1IDEuMjUgMCAxMDAtMi41IDEuMjUgMS4yNSAwIDAwMi41IDB6IiBmaWxsPSIjZWVlZWVlIi8+PHBhdGggZD0iTTI0LjI1IDM1LjI1YTEuMjUgMS4yNSAwIDEwMC0yLjUgMS4yNSAxLjI1IDAgMDAyLjUgMHoiIGZpbGw9IiNlZWVlZWUiLz48L2c+PC9zdmc+')] opacity-5"></div>
                      <div className="prose prose-sm max-w-none relative">
                        {question.answer.split('\n').map((line, index) => (
                          <p key={index} className={`text-gray-600 whitespace-pre-wrap ${
                            line.startsWith('```') 
                              ? 'bg-gray-100 p-3 rounded-md font-mono text-sm' 
                              : line.startsWith('1.') || line.startsWith('-')
                                ? 'ml-4'
                                : ''
                          }`}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
} 