import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from 'react';
import { useStore } from "../store";
// class App extends Profile {
//     constructor(props) {
//         super(props);
//         this.state = {
//             person: {
//                 name: 'MovieGuy',
//                 biography: '26 year old Designer / Developer living in Stockholm. Originally from Oxford, England. Love to make stuff.',
//             },
//             image: 'http://static1.squarespace.com/static/55acc005e4b098e615cd80e2/t/57b057398419c2c454f09924/1471025851733/',
//             quote: {
//                 content: 'Beautiful things don\'t ask for attention',
//                 source: 'The Secret Life of Walter Mitty'
//             }

//         };
//     }
//     render() {
//         return (
//             <div className="App">
//                 <Image src={this.state.image} />
//                 <Profile person={this.state.person} quote={this.state.quote} />
//             </div>
//         );
//     }
// }


function Profile() {
    return (
        <div className="Profile">
            <h1 className="Name">{user.username}</h1>
            <p className="Favorite Movies">{users.id.likedMovies}</p>
            <div className="Quote">
                <blockquote>&ldquo; {quote.content} &rdquo;</blockquote>
                <div className="byline">&mdash; {quote.source}</div>
            </div>

        </div>
    );
}
console.log("working!!")//instead of console.log i want to run/call the function Profile to return 32-40.



export default Profile;