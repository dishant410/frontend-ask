import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { HomePage } from "./components/HomePage"
import { UserPage } from "./components/UserPage"
import { AskDoubtPage } from "./components/AskDoubtPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/ask-doubt" element={<AskDoubtPage />} />
      </Routes>
    </Router>
  )
}

export default App
