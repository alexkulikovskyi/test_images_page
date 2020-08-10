import React from 'react';

class PhotoExample extends React.Component {
    constructor(props) {
        super(props);
    
    }

    render() {
        return (
            <div className = "photo-example" style={{
                    margin:"15px",
                    width:"18vw",
                    height:"18vw",
                    overflow:"hidden"
                }} 
            >
                <div style={{
                        width:"auto",
                        height:"14vw",
                        marginBottom:"5px"
                    }}
                >
                    <img 
                        src = {this.props.data.url}
                        alt = {this.props.data.name}
                        style = {{width: '100%',height:'100%',backgroundSize: 'cover'}}
                    />
                </div>
                <p className = "p-desc">{this.props.data.name} </p>
                <p className = "p-desc" style = {{
                    fontSize:"0.8em",
                    color: "#686161"
                }}>
                    {`${this.props.data.size} Mb`}
                </p>
            </div>
        )
    }
}
export {PhotoExample}