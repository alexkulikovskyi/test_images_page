import React from "react";
import {Line} from 'rc-progress';
import {connect} from 'react-redux'

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let {fullDataSize} = this.props
        fullDataSize = fullDataSize.toFixed(2)
        return (
            <div>
                <span>{`${fullDataSize} Mb / 100 Mb`}</span>
                <Line percent={fullDataSize} strokeWidth="3" strokeColor="#F33" />
            </div>
        )}
}

const mapStateToProps = store => {
    return {
        fullDataSize: store.photo.fullDataSize,
    }
}

const connectedPage = connect(mapStateToProps)(ProgressBar)
export { connectedPage as ProgressBar }