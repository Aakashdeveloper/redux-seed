import React,{Component}  from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class App extends Component {

    componentDidMount(){
       this.props.MoviesList();
    }

    renderMovies = (moviesdata) =>{
        if(moviesdata){
            return moviesdata.map((data) => {
                return(
                    <div key={data.id}>
                        {data.name}
                    </div>
                )
            })
        }
    }

    render(){
        return(
            <div>
                <h1>Redux App</h1>
                {this.renderMovies(this.props.datalist)}
            </div>
        )
    }
    
}


function mapStateToProps(state){
    console.log(state)
    return{
        datalist:state.movies
    }
}


export default connect(mapStateToProps,actions)(App);