import React from 'react'
import {ButtonSort} from './ButtonSort'
import {connect} from 'react-redux'
import {photoActions} from '../actions'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileUpload, faFolderPlus, faFileDownload, faSdCard } from '@fortawesome/free-solid-svg-icons'

class PhotoNav extends React.Component {
    constructor(props) {
        super(props);
    }

    clicker = (type) => {
        const {data, clickStatus, sortData } = this.props;
        let sortedData = data
        const currentTypeStatus = clickStatus[type]
        if (currentTypeStatus){
            sortedData = this.sortDesc(data, type)
        }else{
            sortedData = this.sortAsc(data, type)
        }
        const newTypeStatus = {[type]:!currentTypeStatus}
        sortData(sortedData,newTypeStatus)
    } 

    sortAsc = (data,type) => [...data].sort((x,z) => x[type] < z[type] ? -1 : 1)

    sortDesc = (data,type) => [...data].sort((x,z) => x[type] > z[type] ? -1 : 1)

    render() {
        const iconStyle = {
            color:"red", 
            marginRight:"5px",
            textShadow: "1px 1px 1px #ccc",
            fontSize: "1.5em",
        } 
        const {getData} = this.props
        return (
            <div className = "photo-nav" style={{
                    width:"100%",
                    height:"3vw",
                    display: "flex",
                    alignItems: "stretch",
                    margin: "10px",
                }}
            >
                <div style={{flexGrow: 1}}>
                    <FontAwesomeIcon icon = {faFileUpload} title = "Upload" style = {iconStyle}/>
                    <FontAwesomeIcon icon = {faFolderPlus} title = "Add Folder" style = {iconStyle}/>
                    <FontAwesomeIcon icon = {faFileDownload} title = "Dowload" style = {iconStyle}/>
                    <FontAwesomeIcon icon = {faSdCard} title = "Sd Card" style = {iconStyle} onClick={getData}/>
                </div>
                <div style={{flexGrow: 10}}></div>
                <div style={{flexGrow: 1, textAlign: "right"}}>
                    <ButtonSort name = "name" onClick = {this.clicker}/>
                    <ButtonSort name = "size" onClick = {this.clicker}/>
                    <ButtonSort name = "modified" onClick = {this.clicker}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        data: store.photo.data,
        clickStatus: store.photo.clickStatus
    }
}
  
const mapDispatchToProps = dispath => ({
    getData: () => dispath(photoActions.getData()),
    sortData: (data,typeStatus) => dispath(photoActions.sortData(data,typeStatus))
})

const connectedPage = connect(mapStateToProps,mapDispatchToProps)(PhotoNav)
export { connectedPage as PhotoNav }