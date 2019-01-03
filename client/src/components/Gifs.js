import React, { Component } from 'react';

class Gifs extends Component {
    state = { 
        gifs:[1,2,3,4,5,5,6,7,7,4,5,6,7,5,4,4,4,6,4,4]
     }
    render() { 
        return ( 
            <div class="container">
            <div class="row">

            {this.state.gifs.map((gif, i)=>
                    <div class="col s12 m4">
                    <div class="card">
                        <div class="card-image">
                        <img src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/inslovakiath.jpg" alt={i}/>
                        <span class="card-title">Card Title</span>
                        </div>
                        <div class="card-content">
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                        </div>
                        <div class="card-action">
                        <a href="/">This is a link {gif}</a>
                        </div>
                    </div>
                    </div>

            )}


            </div>
            </div>
         );
    }
}
 
export default Gifs;