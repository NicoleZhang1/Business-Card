// This doesnt work yet... hopefully I will update the buttons to work and add working socials in the footer in the future!

import { createRoot } from "react-dom/client"
import App from "./components/Container"
const root = createRoot(document.getElementById("root"))

root.render(<App />)

function handleEmailClick() {
  window.location.href = "mailto:nicole.zhang11409@gmail.com";
}