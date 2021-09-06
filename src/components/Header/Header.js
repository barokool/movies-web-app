import './header.css'
const Header = () => {
  const handleClickHeader = () => {
    window.scroll(0, 0)
  }
  return (
    <div className="sm:text-3xl header font-extrabold capitalize  text-xl cursor-pointer fixed z-10 text-white flex justify-center shadow-xl p-4">
      <h1 onClick={handleClickHeader} >🐱‍👤New movies web🐱‍👤</h1>
    </div>
  )
}

export default Header
