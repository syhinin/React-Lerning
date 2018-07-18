import React, {Component} from "react";
import {moviesData} from "../moviesData";
// import '../index.css'


class MovieItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeBtn: false
        }
    }
    toggleActiveBtn = () =>{
        this.setState({activeBtn: !this.state.activeBtn})
    }
    render() {
        const {data} = this.props;
        console.log("THIS from item", data);
        return (
            <div className="row">
                {this.props.data.map( (item) =>{
                    return (
                        <div className="col-4 mb-4">
                            <div key={item.id} className="card " style={{width: '100%'}}>
                                <img className="card-img-top" src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.original_title}</h5>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <p className="mb-0">{item.vote_average}</p>
                                        <button type="button" onClick={this.toggleActiveBtn} className={`btn ${this.state.activeBtn ? 'btn-success' : 'btn-secondary'}`}>Will Watch</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}


class Movielist extends Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }

    render() {
        const {data} = this.props;
        return <MovieItem data={data}/>
    }
}
class MovieListWillWatch extends Component {
    render() {
        return <div>
            <p>Will Watch: 0 movies</p>
            <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    }
}
class App extends Component {
    constructor() {
        super();
        this.state = {
            moviesWillWatch: []
        }
    }

    render() {
        return <div className="container">
            <div className="row mt-4">
                <div className="col-9">
                    <Movielist data={moviesData}/>
                </div>
                <div className="col-3">
                    <MovieListWillWatch/>
                </div>
            </div>
        </div>;
    }
}

export default App;
