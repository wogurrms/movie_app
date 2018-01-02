import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';
import LinesEllipsis from 'react-lines-ellipsis'

// Smart Component ( 똑똑한 컴포넌트 )

// class Movie extends Component {

//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         poster: PropTypes.string.isRequired,

//     }

//     render() {
//         return (
//             <div>

//                 <h1>{this.props.title}</h1>
//                 <MoviePoster poster={this.props.poster} />
//             </div>
//         )
//     }
// }

// class MoviePoster extends Component {


//     static propTypes = {
//         poster : PropTypes.string.isRequired
//     }


//     render() {
//         return (
//             <img src={this.props.poster}/>
//         )
//     }
// }


// Dumb Component ( 멍청한 컴포넌트 = 라이프사이클 x(componentWillMount 등등), 
// state를 사용할 수 없음 )
function Movie({ title, poster, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie_Column">
                <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Column">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <MovieGenre genre={genre} key={index} />)}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis
                    text = {synopsis}
                    maxLine = '3'
                    ellipsis = '...'
                    trimRight
                    basedOn = 'letters'
                    />
                </p>

            </div>
        </div>
    )
}

function MovieGenre({ genre }) {
    return (
        <span className="Movie_Genre" > {genre} </span >
    )
}

function MoviePoster({ poster, alt }) {
    return (
        <img src={poster} alt={alt} title={alt} className="Movie_Poster" />
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    summary: PropTypes.string.isRequired
}

MovieGenre.propTypes = {
    genre: PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

export default Movie