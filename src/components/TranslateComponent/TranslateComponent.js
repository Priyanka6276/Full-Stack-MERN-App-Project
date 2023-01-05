import { useState, useEffect } from "react"
import axios from "axios"
import styles from "./TranslateComponent.module.css"

export default function Translator() {
    const [textInput, setTextInput] = useState("")
    const [resultText, setResultText] = useState("")
    const [textLanguageKey, setTextLanguageKey] = useState("")
    const [languagesList, setLanguagesList] = useState([])
    const [detectLanguageKey, setdetectedLanguageKey] = useState("")

    const getLanguageSource = () => {
        axios
            .post(`https://libretranslate.de/detect`, {
               q: textInput,
            })
            .then((response) => {setdetectedLanguageKey(response.data[0].language)})
    }
    const translateText = () => {
        setResultText(textInput)

        getLanguageSource()

        let data = {
           q: textInput,
            source: detectLanguageKey,
            target: textLanguageKey,
        }
        axios.post(`https://libretranslate.de/translate`, data).then((response) => {
            setResultText(response.data.translatedText)
        })
    }

    const languageKey = (selectedLanguage) => {
        setTextLanguageKey(selectedLanguage.target.value)
    }

    useEffect(() => {
        axios.get(`https://libretranslate.de/languages`).then((response) => {
            setLanguagesList(response.data)
        })

        getLanguageSource()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [textInput])


    return (
        <div>
            <div>
                <h1>Translator</h1>
            </div>
            <div >
                <form className={styles.container}>
                    <textarea placeholder="Enter Your Text" onChange={(e) => setTextInput(e.target.value)} />
                    <select onChange={languageKey}>
                        {languagesList.map((language) => {
                            return <option value={language.code}>{language.name}</option>
                        })}
                    </select>
                    <textarea placeholder="Your Translation Result" value={resultText} />
                    <button onClick={translateText}>Translate</button>
                </form>
            </div>
        </div>
    )
}
