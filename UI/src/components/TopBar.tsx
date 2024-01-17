import { MagnifyingGlass } from '@phosphor-icons/react'
import CreateCardForm from './CreateCardForm'

const TopBar = () => {
  return (
    <>
      <nav className="flex content-center items-center w-screen h-16 bg-emerald-400 mb-3">
        <div className="flex gap-8 w-3/4 bg-emerald-400 mx-auto">
          <div className="flex flex-1">
            <input autoFocus placeholder='Pesquisar...' type="text" className="w-full h-8" name="passSearch" id="passSearch" />
            <MagnifyingGlass size={32} color='black' className='mx-3 hover:cursor-pointer' ></MagnifyingGlass>
          </div>
          <div className="flex flex-row flex-2 ">
            <CreateCardForm></CreateCardForm>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TopBar;