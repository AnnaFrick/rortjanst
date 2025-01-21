import "./Hero.css"

const Hero = () => {
  return (
    <div className="Hero">
      <video className="Hero-video" autoPlay loop muted>
        <source src="/crane-video.mp4" type="video/mp4" />
        Din webbläsare stöder inte video.
      </video>
      {/* Light overlay to brighten the video */}
      <div className="Hero-light-overlay"></div>
      <div className="Hero-content">
        <h1>Peter Engström Rörtjänst AB</h1>
      </div>
    </div>
  );
}

export default Hero;
