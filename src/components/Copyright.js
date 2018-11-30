import React from 'react';

class Copyright extends React.Component{
    render(){
        return (
        <div className="_copyright">
            <div className="_copyright_logo">
                <img src={ require("../assets/Logo.png")} alt="tiket logo"/>
            </div>
            <div className="_bli-bli_logo">
                <img src= { require("../assets/blibli_company.png")} alt="bli-bli.png" />
            <p className="_copyright-text">
                "2011-2018 PT.Global Tiket Network"
                <br />
                "All Right Reserved"            
            </p>
            </div>
        </div>
        )
    }
}

export default Copyright;