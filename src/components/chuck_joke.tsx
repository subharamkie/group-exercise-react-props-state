import {Joke} from "../joke";
interface ChuckJokeProps {
    jokes:Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({jokes}) => {
    var jokeList = jokes.map((item) => {
        return <li className="joke" key = {item.id}>{item.joke}</li>});

    return (<p><ul>{jokeList}</ul></p>);
    
}



export default ChuckJoke;
