import React, { Fragment } from 'react'
import {PhotoNav} from './PhotoNav'
import {PhotoExample} from './PhotoExample'
import {connect} from 'react-redux'
import {photoActions} from '../actions'

class Photos extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const {getData} = this.props
        getData()
    }

    render() {
        const { data } = this.props;
        return (
            <Fragment>
                <p style={{marginBottom:"15px",fontSize:"1.5em"}}>Photos</p>
                <PhotoNav />
                <div style={{ 
                    display: "flex",   
                    flexWrap:"wrap",    
                    flexDirection: "row", 
                    justifyContent: "center",
                    position: "reletive",
                    flex: 1,
                    margin: "10px",
                    backgroundColor:"#FFF2F2"
                }}>
                    {data.map((img,i) =>{
                        return <PhotoExample data={img} key={i}/> 
                    })}
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = store => {
    return {
        data:store.photo.data
    }
}
  
const mapDispatchToProps = dispath => ({
    getData: () => dispath(photoActions.getData())
})

const connectedPage = connect(mapStateToProps,mapDispatchToProps)(Photos)
export { connectedPage as Photos }