import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './gifs.css';

class Gifs extends Component {
    render() { 
        console.log(this.props.gifs)
        return ( 
            <div className="container">
            <div className="row">
            {this.props.gifs.map((gif, i)=>
                    <div className="col s12 m4" key={i}>
                    <div className="card">
                        <div className="card-image">
                            <img src={gif.images.fixed_height_still.url} alt={i}/>
                        </div>
                        <div className="card-content">
                            <p className="teal-text">{gif.title}</p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light">Play
                                <i className="material-icons right">play_arrow</i>
                            </button><button className="btn waves-effect waves-light">Pause/Stop
                                <i className="material-icons right">stop</i>
                            </button>
                        </div>
                    </div>
                    </div>

            )}


            </div>
            </div>
         );
    }
}
 
Gifs.propTypes = {
    // playGif:PropTypes.func.isRequired,
    // stopGif:PropTypes.func.isRequired,
    gifs:PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    gifs: state.gifs.gifs
})
export default connect(mapStateToProps, null)(Gifs);