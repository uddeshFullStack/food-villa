import React from "react";

class ProfileClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:1,
        }
    }

    render(){
        return( 
        <>
            <h1>profile class component</h1>
            <h2>name: {this.props.name}</h2>
            <h2>count: {this.state.count}</h2>
            <h2>Count2: {this.state.count2}</h2>
            <button onClick={()=>{
                this.setState({
                    count: 2,
                })
            }}>SetCount</button>
        
        </>
        )
    }
};

export default ProfileClass;