import React, { Component } from 'react';

import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {togglePlay} from '../actions/gifActions';
import './gifs.css';

class Gifs extends Component {
    constructor(props) {
        super(props)
        this.state={
            play:false,
            gifId:'',
        }

      

    this.toggleState=(e) => {
        e.preventDefault()
        let action = e.target.getAttribute('action')
        let gifId = e.target.getAttribute('data-id')

        if(action === 'play'){
            this.props.togglePlay(true, gifId)
            e.target.setAttribute('action', 'stop')
        }else{
            this.props.togglePlay(false, gifId)
            e.target.setAttribute('action', 'play')
        }
    }
    }
    render() { 
        const {currentGif} = this.props;
        return ( 
            <div className="container">
                <div className="row">
                    {this.props.gifs.map((gif, i)=>
                        <div className="col s12 m4" key={gif.id}>
                            <div className="card">
                                <div className="card-image">
                                    <img ref={gif.id} data-id={gif.id}  
                                        src={currentGif.isPlaying && currentGif.gifId === gif.id ? 
                                                gif.images.fixed_height.url : 
                                                gif.images.fixed_height_still.url} 
                                        alt={gif.title}/>
                                </div>
                                <div className="card-content">
                                    <p className="teal-text">{gif.title|| "No title"}</p>
                                </div>
                                <div className="card-action">
                                    <button action="play" data-id={gif.id} className="btn waves-effect waves-light play-button" 
                                            onClick={this.toggleState}>
                                            {currentGif.isPlaying && currentGif.gifId === gif.id ?  'Stop': 'Play'} 
                                        <i className="material-icons right">
                                            {currentGif.isPlaying && currentGif.gifId === gif.id ? 'stop': 'play_arrow'}
                                        </i>
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
    togglePlay:PropTypes.func.isRequired,
    gifs:PropTypes.array.isRequired,
    currentGif:PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    gifs: state.gifs.gifs,
    currentGif: state.gifs.currentGif
})
export default connect(mapStateToProps, {togglePlay})(Gifs);