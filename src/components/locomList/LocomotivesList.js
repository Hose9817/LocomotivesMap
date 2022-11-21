import 'bootstrap/dist/css/bootstrap.css';

import LocomCard from '../locomCard/LocomCard'
import './LocomotivesList.css'

const LocomotivesList = (props) => {

    return (
        <div className='locomo_list'>
            <h1>List of Locomotives</h1>

            <LocomCard />

        </div>
    )

}

export default LocomotivesList;