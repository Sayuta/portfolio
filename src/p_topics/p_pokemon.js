import react from 'react'
import { Carousel } from 'react-bootstrap'

const p_pokemon = () => {


    return (
        <div className=''>
            <div className="row p-0 mb-4 text-white rounded bg-dark">
                <div className="col text-center">
                <h1>Sapoketa</h1>
                    <img className="img-fluid" style={{opacity: 0.8}} src="/sapoketa.png"/>      
                </div>
            </div>
            <div className="row">
            <div className="col text-center">
                <p className="pt-0">My Unity Engine project<br/>
                Over the past few years i have lost my work. I figured i could combine most of my skills by making a game. And who doesn't love Pokemon?
                </p>
                <a href={"/sapoketa.html"} target="_blank">Click here to give it a go!</a>
            </div>
        </div>
        </div>
    )
}

export default p_pokemon;