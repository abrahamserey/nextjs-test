'use client'

import { useState } from "react"

export  function CreatePost() {
    // TODO: implement authentication to make sure that the user is logged in 

    const [post, setPost] = useState<string>("")

    const insertInDatabase = async () => {
        const response = await fetch('/api/create', {
            'method': 'POST',
            'body': post
        })
        console.log('-->', response)
    }

    return (

        <div className="flex flex-col gap-10">
            <textarea className="border-2 border-red-500 text-blue-500" onChange={(e) => setPost(e.target.value)}></textarea>
            <button onClick={insertInDatabase}>Create</button>
        </div>
    )
}