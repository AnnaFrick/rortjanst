import './About.css';

function About() {
  return (
    <div className="About">
      <h1>Om Peter Engström Rörtjänst AB</h1>
      <p>
        Peter Engström Rörtjänst AB är ett Kalmar-baserat VVS-företag som erbjuder en rad tjänster för ditt hem. Med noggrannhet och kvalitet har företaget utfört VS-jobb i över 20 år. Tjänsterna inkluderar:
      </p>
      <ul>
        <li>Installation av värmesystem och värmepumpar</li>
        <li>Badrum-, köks- och tvättstuge-renoveringar</li>
        <li>Rördragning och VVS-arbeten</li>
      </ul>
      <p>
        Peter Engström Rörtjänst AB är certifierade enligt Säker Vatten, vilket innebär att företaget uppfyller branschens krav på kvalitet och säkerhet. Med ROT-avdrag kan du få skatteavdrag på arbetskostnaden.
      </p>
        <p>
            Kontakta oss för mer information och offertförfrågan.
        </p>
        <h2>Kontakt</h2>
        <p>070-698 38 38</p>
        <p>peterengstrom@telia.com</p>

        <div className='aboutPictures'>
            <img src="/1.jpg" alt="Peter" />
            <img src="/2.jpg" alt="Arbete" />
            <img src="/3.jpg" alt="Arbete" />
            <img src="/4.jpg" alt="Företagsbil" />
        </div>
    </div>
  );
}

export default About;
