import React from 'react';

class Display extends React.Component {
    constructor(props){
        super(props);
    };

    render () {
        console.log(this.state)
        return (
            <div className='players'>
                {this.props.res.map(item => 
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <p>{item.country}</p>
                </div>
                )}
            </div>
        )
    }

}

export default Display;