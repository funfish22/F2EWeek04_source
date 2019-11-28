import Atm from './Atm'
import { connect } from 'react-redux'
import {stepNumber, hiddenInfo} from '../../../../../action'

const mapStateToProps = state => {
    return{
        optionArray: state.optionArray,
        step: state.step
    }
};

const mapDispatchToProps = dispatch => {
    return{
        stepNumber: step => {
            dispatch(stepNumber(step))
        },
        hiddenInfo: info => {
            dispatch(hiddenInfo(info))
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Atm)