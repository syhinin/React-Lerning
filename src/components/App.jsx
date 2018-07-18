import React, {Component} from "react";
import {moviesData} from "../moviesData";
// import '../index.css'


class MovieItem extends Component {
    state = {
        activeBtn: false
    };
    hendlleWillWatchClick= () =>{
        this.props.onMovieAdd(this.props.item)
        this.setState({activeBtn: !this.state.activeBtn})
    };
    render() {
        const {item, moviesWillWatch} = this.props;
        return (   <div className="col-4 mb-4">
                <div key={item.id} className="card " style={{width: '100%'}}>
                    <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">{item.original_title}</h5>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">{item.vote_average}</p>
                            <button type="button" onClick={this.hendlleWillWatchClick} className={`btn ${moviesWillWatch.some(movieItem => movieItem.id === item.id)  ? 'btn-success' : 'btn-secondary'}`}>Will Watch</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
class Movielist extends Component {
    render() {
        const {data, onMovieAdd, moviesWillWatch} = this.props;
        return(
            <div className="row">
                {this.props.data.map( (item) => <MovieItem key={item.id} moviesWillWatch={moviesWillWatch} onMovieAdd={onMovieAdd} item={item}/> )}
            </div>
        )
    }
}
class MovieListWillWatch extends Component {
    render() {
        const {moviesWillWatch} = this.props;
        return <div>
            <p>Will Watch: {this.props.moviesWillWatch.length} movies</p>
            <ul className="list-group">
                {this.props.moviesWillWatch.map((item) => {
                    return <li key={item.id}  className="list-group-item">
                        {item.original_title}
                    <span>{item.vote_average}</span>
                    </li>
                })}
            </ul>
        </div>
    }
}
class App extends Component {
    state = {
        moviesWillWatch: []
    };
    isToWillWatch(movieid) {
        if(this.state.moviesWillWatch.every((item) => item.id !== movieid.id)){
            this.setState({moviesWillWatch: [...this.state.moviesWillWatch, movieid]})
        }else {
            this.setState({moviesWillWatch: this.state.moviesWillWatch.filter((item) => {return item.id !== movieid.id})})
        }
    };
    render() {
        return <div className="container">
            <div className="row mt-4">
                <div className="col-9">
                    <Movielist data={moviesData} moviesWillWatch={this.state.moviesWillWatch} onMovieAdd={this.isToWillWatch.bind(this)}/>
                </div>
                <div className="col-3">
                    <MovieListWillWatch data={moviesData} moviesWillWatch={this.state.moviesWillWatch}/>
                </div>
            </div>
        </div>;
    }
}

export default App;
