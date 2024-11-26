

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-700 text-white py-2">
        <div className="logo">
            <span className="font-bold text-xl mx-20 cursor-pointer">iTask</span>
        </div>
      <ul className="flex gap-20 mx-20">
        <li className="cursor-pointer transition-all duration-75 hover:font-bold">Home</li>
        <li className="cursor-pointer transition-all duration-75 hover:font-bold">Your Tasks</li>
      </ul>
    </nav>
  )
}

export default Navbar
