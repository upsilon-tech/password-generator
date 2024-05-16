import { useState } from "react"

import './App.css'
import Footer from "./components/Footer/Footer"
import Generator from "./components/Generator/Generator"
import PasswordOutput from "./components/PasswordOutput/PasswordOutput"

function App() {
    const [password, setPassword] = useState("")
    const [isCopied, setIsCopied] = useState(false)

    return (
        <div>
            <main>
                <section className="section-title">
                    <h1 className="title">Password generator</h1>
                </section>
                <PasswordOutput password={password} isCopied={isCopied} setIsCopied={setIsCopied}/>
                <Generator setPassword={setPassword} setIsCopied={setIsCopied}/>
            </main>
            <Footer />
        </div>
    )
}

export default App
