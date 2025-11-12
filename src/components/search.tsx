export function SearchList() {
    return(
        <div className="flex justify-center  align-middle grid">
            <h1 className="font-bold text-2xl">How`s the sky looking today?</h1>
            <br></br>
            <div className="flex justify-around">
            <input type="text" placeholder="Search for a place..." className="bg-gray-700 rounded-xl p-2"/>
            <button className="text-white p-4 bg-blue-500 rounded-xl">Search</button>
            </div>
        </div>
    );
}