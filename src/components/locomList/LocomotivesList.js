// import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

import LocomCard from '../locomCard/LocomCard'
// import LocomModal from '../locomCard/NewLocomModal';

const LocomotivesList = (props) => {

    // console.log(props);


    return (
        <div>
            <h2>List of Locomotives</h2>

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