import Product from './Product.js';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return{
        source: state.productArray
    }
}

export default connect(mapStateToProps)(Product);