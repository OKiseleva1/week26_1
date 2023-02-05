import "./hero.css";

function Hero(props) {
    return (
        <div className="hero-card">
            <img src={props.url} alt="герой" />
            <div className="hero-name">{props.name}</div>
            <div className="hero-universe">{props.universe}</div>
            <div className="hero-alterego">{props.alterego}</div>
            <div className="hero-works">{props.works}</div>
            <div className="hero-frends">{props.frends}</div>
            <div className="hero-superpower">{props.superpower}</div>

        </div>
    );
}
export default Hero;