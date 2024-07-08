import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="bg-home-background bg-cover bg-center min-h-screen">
            <header
                className="flex justify-between p-5  shadow-2xl
             bg-gradient-to-r from-cyan-600 to-blue-500">
                <div>
                    <h1 className="text-2xl font-bold">Enigma Laundry</h1>
                </div>
                <div>
                    <ul className="flex mr-20">
                   
                        <li className="p-3 hover:text-white"><Link><strong>About</strong></Link></li>
                        <li className="p-3  hover:text-white"><Link><strong>Contact</strong></Link></li>
                        <li className="p-3  hover:text-white"><Link><strong>Product</strong></Link></li>
                        <div className="text-white hover:bg-sky-400 bg-gray-800 p-3 rounded shadow-md"><Link to={"/login"}>LOGIN ADMIN</Link></div>
                    </ul>
                </div>
            </header>
            <main className="flex justify-center  h-full ">
               
            </main>
            <footer></footer>
        </div>
    )
}
export default HomePage