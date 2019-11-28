import Home from './Home'
import { connect } from 'react-redux'
import {stepNumber} from 'action'

const mapStateToProps = state => {
    return{
        CartArray: state.CartArray,
        step: state.step,
        info: state.info,
        isStep: state.isStep
    }
}

const mapDispatchToProps = dispatch => {
    return{
        stepNumber: step => {
            dispatch(stepNumber(step))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)