import { useState } from "react"
import ListItem from "./listItem";
import { RiDeleteBinLine } from 'react-icons/ri'
import { BsCheck } from 'react-icons/bs'
import TextArea from "./textArea";

export default function TodolistApp(){
    const [item, setItem] = useState([]);

    const submitItem = (inputText) => {
        setItem((prevItem) => {
            return [...prevItem, inputText]
        })
    }

    const deleteItem = (id) => {
        setItem(prevItem => {
            return prevItem.filter((prvitem, index) => {
                return index !== id;
            })
        })
    }



    return(
        <div className="p-4">
            <div>
                <h1 className="text-center font-semibold text-2xl text-zinc-700">To-Do List</h1>
                <TextArea
                    onAdd={submitItem}
                />
            </div>
            <div>
                <ul>
                    {
                        item.map((prevItem, index) => (
                            <ListItem 
                            key={index}
                            id={index}
                            text={prevItem}
                            delete={<RiDeleteBinLine/>}
                            onDelete={deleteItem}
                            />
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}