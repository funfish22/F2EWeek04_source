import Pending from './Pending'
import { connect } from 'react-redux'
import {stepNumber, hiddenInfo} from '../../../action'

const mapDispatchToProps = dispatch => {
    return{
        stepNumber: step => {
            dispatch(stepNumber(step))
        },
        hiddenInfo: info => {
            dispatch(hiddenInfo(info))
        }
    }
}

export default connect(null, mapDispatchToProps)(Pending)