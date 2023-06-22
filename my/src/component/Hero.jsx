const Hero = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>your feet deserve the best</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus ut,
          aperiam repudiandae quasi, libero et rerum cum magni fugit cupiditate
          officiis adipisci dolorem incidunt nam deserunt sunt reiciendis dolor
          vel?
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button> Category</button>
        </div>
        <div className="shopping">
          <p>Also Avliable</p>
          <div className="brnad">
            {" "}
            <img src="/images/amazon.png"></img>{" "}
            <img src="/images/flipkart.png" alt="flip"></img>{" "}
          </div>
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/hero-image.png" alt="heroimage"></img>
      </div>
    </main>
  );
};
export default Hero;
