import Navbar from './Navbar';
import { connect } from 'react-redux'

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps)(Navbar);
