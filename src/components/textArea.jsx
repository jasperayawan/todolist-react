import { useState } from "react"

export default function TextArea(props){
    const [inputText, setInputText] = useState('');

    return(
        <div className="flex justify-center items-center gap-2">
                    <input 
                        type="text" 
                        value={inputText} 
                        onChange={(e) => setInputText(e.target.value)}
                        className="border-b-2 border-orange-500 border-dotted outline-none"
                        required/>
                    <button 
                        onClick={() => {
                            props.onAdd(inputText)
                            setInputText('');
                        }}
                        className="ring-2 ring-zinc-700 py-2 px-3 rounded-md hover:bg-zinc-600 hover:text-white">Add</button>
                </div>
    )
}