
import {connect} from 'react-redux'
import component from '../../components/competitions'

const mapStateToProps = (state, ownProps) => {
    return {
        sportsbook: state.sportsbook
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return{
        dispatch:dispatch,
        ownProps
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(component)