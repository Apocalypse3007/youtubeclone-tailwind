import Searchbar from './Searchbar'
import { Youtube } from './Youtube'
import Signin from './Signin'

export const Appbar = () => {
    return(
        <div className="flex justify-between">
            <div className='text-mid'>
                <Youtube/>
            </div>

            <div>
                <Searchbar />
            </div>
            
            <div>
                <Signin />
            </div>
        </div>
    )
}
