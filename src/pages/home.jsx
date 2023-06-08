import TodolistApp from "../components/todolistapp";


export default function Home(){
    return(
        <main className="flex justify-center items-center w-full h-screen bg-orange-200">
            <div className="max-w-lg mx-auto bg-white rounded-md">
                <TodolistApp/>
            </div>
        </main>
    )
}