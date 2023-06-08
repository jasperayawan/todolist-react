export default function ListItem(props){
    
    return(
        <>
            <div className="flex justify-between items-center py-3 pt-4">
                <li>{props.text}</li>
                <div className="flex justify-center items-center gap-2">
                <button 
                    onClick={() => {
                        props.onDelete(props.id)
                    }}
                    className="ring-2 ring-red-500 bg-red-500 hover:bg-slate-50 rounded-md py-2 px-3 text-sm">{props.delete}</button>
                </div>
            </div>
        </>
    )
}