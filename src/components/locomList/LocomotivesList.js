// import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

import LocomCard from '../locomCard/LocomCard'
import './LocomotivesList.css'

const LocomotivesList = (props) => {

    // console.log(props);


    return (
        <div className='locomo_list'>
            <h1>List of Locomotives</h1>

            <LocomCard />
            {/* <LocomModal /> */}

        </div>
    )

}

// const mapStateToProps = (state) => {
//     return {
//         cards: state.cards
//     }
// }

export default LocomotivesList;