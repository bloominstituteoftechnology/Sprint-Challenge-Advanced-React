import React from 'react';



class PlayersList extends React.Component {

        state = {

            data: []
        }


        componentDidMount() {

            
          fetch(`http://localhost:5000/api/players`)
          .then(res => res.json())
          .then(items => {
            console.log('players',items);
            this.setState({ data: items });
          })
          .catch(err => console.error(err));
        }

        render() {

            return(



                <div >{this.state.data.map(ele => (
                <div className='players'>
                <h2 key={ele.id}>{ele.name}</h2>
                <p> Country: {ele.country}</p>
                <p> Searches: {ele.searches}</p>
                </div>
                ))}</div>


            )
        }
}


export default PlayersList;