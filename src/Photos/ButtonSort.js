import React from 'react';

class ButtonSort extends React.Component {
    constructor(props) {
        super(props);
    
    }

    clicker = (e) => {
        const {onClick} = this.props
        onClick(e.target.id)
    }

    render() {
        return (
            <button 
                style = {{
                    textTransform:"capitalize",
                    marginLeft:"5px",
                    textShadow: "1px 1px 1px #ccc",
                    fontSize: "1em",
                    transitionDuration: "0.4s",
                    cursor: "pointer"
                }}
                className = "sort-btn"
                id = {this.props.name}
                onClick = {this.clicker}
            >
                {this.props.name}
            </button>
        )
    }
}
export {ButtonSort}