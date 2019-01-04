import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './gifs.css';

class Gifs extends Component {

    toggleState(e){
        e.preventDefault()
        // let ele = e.target
        // let img = ele.prev()
        // console.log(img);
        let stillUrl = e.target.getAttribute('data-still-url')
        let activeUrl = e.target.getAttribute('data-active-url')
        let state = e.target.getAttribute('data-state')
        if(state === 'still'){
            e.target.setAttribute('src',activeUrl)
            e.target.setAttribute('data-state','active')
        }else{
            e.target.setAttribute('src',stillUrl)
            e.target.setAttribute('data-state','still')
        }
    }
    render() { 
        return ( 
            <div className="container">
            <div className="row">
            {this.props.gifs.map((gif, i)=>
                    <div className="col s12 m4" key={gif.id}>
                    <div className="card">
                        <div className="card-image">
                            <img className="gif-image" src={gif.images.fixed_height_still.url} 
                                 data-state="still" 
                                 data-still-url={gif.images.fixed_height_still.url} 
                                 data-active-url={gif.images.fixed_height.url} 
                                 onClick={this.toggleState} alt={i}/>
                        </div>
                        <div className="card-content">
                            <p className="teal-text">{gif.title|| "No title"}</p>
                        </div>
                        <div className="card-action">
                            <button className="btn waves-effect waves-light" 
                                    onClick={this.toggleState}>Play
                                <i className="material-icons right">play_arrow</i>
                            </button>
                            <button className="btn waves-effect waves-light" 
                                    onClick={this.toggleState}>Pause/Stop
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