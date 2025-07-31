import {Link} from 'react-router-dom';
import Dashboard from '../pages/dashboard';
function Footer() {
    return <>
        <div className="">
            <ul className="flex justify-between w-full items-center gap-4 p-4 bg-gray-200">
                <li className="bg-gray-300 p-2 rounded-lg text-sl w-full font-medium">
                    Hello Main
                    <ul className="flex flex-col items-start justify-center m-2 gap-2">
                        
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-101 hover:bg-gray-400 hover:text-white"><Link to="Dashboard">Hello Bottom</Link></li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                    </ul>
                </li>
                <li className="bg-gray-300 p-2 rounded-lg text-sl w-full font-medium">
                    Hello Main
                    <ul className="flex flex-col items-start justify-center m-2 gap-2">
                    <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                    </ul>
                </li>
                <li className="bg-gray-300 p-2 rounded-lg text-sl w-full font-medium">
                    Hello Main
                    <ul className="flex flex-col items-start justify-center m-2 gap-2">
                    <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                    </ul>
                </li>
                <li className="bg-gray-300 p-2 rounded-lg text-sl w-full font-medium">
                    Hello Main
                    <ul className="flex flex-col items-start justify-center m-2 gap-2">
                    <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                        <li className="cursor-pointer p-2 w-full bg-gray-200 rounded-lg transform transition-transform duration-200 hover:scale-105 hover:bg-gray-400 hover:text-white">Hello Bottom</li>
                    </ul>
                </li>
            </ul>
        </div>
    </>
}

export default Footer;