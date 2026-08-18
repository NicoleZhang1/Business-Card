import About from "./About"
import Footer from "./Footer"
import Interests from "./Interests"
import Info from "./Info"

export default function App() {
  return (
  <main className="container">
  <Info />
  <div className="body-container">
  <About />
  <Interests />
  </div>
  <Footer />
  </main>
  )
}