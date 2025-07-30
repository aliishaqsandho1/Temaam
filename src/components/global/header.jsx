function Header() {
   return <>
      <nav className="bg-gray-200 flex items-center justify-between border-b border-l w-full h-14 p-2 sticky top-0 z-50">
         <div className="flex gap-2 cursor-pointer">
            <span><i class="bi bi-house"></i></span>
            <span>Dashboard</span>
         </div>
         <div className="flex p-2 gap-10">
            <span className="relative cursor-pointer">
               <i className="bi bi-house text-2xl"></i>
               <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 text-white text-xs flex items-center justify-center rounded-full">
                  5
               </span>
            </span>

            <span className="relative cursor-pointer">
               <i className="bi bi-house text-2xl"></i>
               <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 text-white text-xs flex items-center justify-center rounded-full">
                  5
               </span>
            </span>

            <span className="relative cursor-pointer">
               <i className="bi bi-house text-2xl"></i>
               <span className="absolute -top-1 -right-1 w-5 h-5 bg-gray-600 text-white text-xs flex items-center justify-center rounded-full">
                  5
               </span>
            </span>
         </div>

      </nav>
   </>
}

export default Header;