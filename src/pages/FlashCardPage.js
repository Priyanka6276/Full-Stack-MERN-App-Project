import FlashCard from "../components/FlashCard/FlashCard"
import { useState, useEffect } from "react"
import http from "../lib/http"

export default function FlashCardPage({flashcards}) {
    const flascard = flashcards.map(f => 
        <FlashCard/> //orderlist sei cafe final

    )
   return(
    <div>
        <FlashCard />
    </div>
   )

}