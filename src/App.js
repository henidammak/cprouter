import "./Components/Header/Header.css";
import "./App.css";
import "./Components/MovieCard/MovieCard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Components/MovieList/MovieList.css";
import Header from "./Components/Header/Header";
import "./Components/AddCard.js/AddCard.css";

import Card2 from "./Components/MovieCard/card/card3";
import Card1 from "./Components/MovieCard/card/card2";
import Card from "./Components/MovieCard/card/card1";

import { useState } from "react";
import Card3 from "./Components/MovieCard/card/card4";
import AddCard from "./Components/AddCard.js/AddCard";
import { Button, Figure } from "react-bootstrap";
import StarsRating from "stars-rating";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cardj from "./Components/MovieCard/card/Cardj";
import Cardj1 from "./Components/MovieCard/card/Cardj1";
import Detail from "./Components/MovieCard/card/Detail";
import Detail1 from "./Components/MovieCard/card/Detail1";


import Cardj2 from "./Components/MovieCard/card/Cardj2";
import Detail2 from "./Components/MovieCard/card/Detail2";
function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [rate, setRate] = useState(0);
  const movieCard = [
    {
      id: 1,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRGMg5XSYsu3BldsyNpMRgqWgenZrg2RRz8nbTI4Oj76JBMowQr-xSmGSrW5B-RWDTgOKaHijiquAbdi4Id0EAWUf_9pzjBAy-ZupPk9EtFBf4NUUZ8miYe8JnUl.jpg?r=714",
      title: "Lucifer",
      description:
        "Lassé d’être le Seigneur des Enfers,le diable s’installe à Los Angeles où il ouvre un nightclub et se lie avec une policière de la brigade criminelle.",
      rate: 4.5,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/wzMlHmo57ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 2,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS73oh8YQ7oeZRI8lonzsfrshX5toUgV3DHumwSAii6l7TqQM0NMhrWPeXHk4r_Xn32th5xTd3pZuzlfMpBS8SMjpMU.jpg?r=280",
      title: "Vikings",
      description:
        "Cette série réaliste s'attache aux exploits du héros Ragnar Lothbrok qui ambitionne d'étendre le pouvoir viking à la faveur d'un chef manquant de vision politique.",
      rate: 2,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/mAl60ykBm4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 3,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZ70u98zBG2sig8LUV65sIwjc0Sc7IatQKVHIfwMjK2JLlk4zAs0FZvF-N0oQ8zEaOOxTurPlSg-wmvPgssCCZyGwJSu6ovyJvXoh5sqdusIwoCf04q8eReTPgO1.jpg?r=c53",
      title: "Lupin",
      description:
        "Inspiré par les aventures d'Arsène Lupin, le gentleman cambrioleur Assane Diop décide de venger son père d'une terrible injustice",
      rate: 4,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/gCmuYqeeNpc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 4,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfbKZLWziYPb9OgxgSyb7KW3msdOm1-tYMsnGS7DI3m9sZ11pw9_sGVnjaqpHlspc0EiZHX8jp35zL4GPVX6zcIPlpM.jpg?r=362",
      title: "Vampire Diaries",
      description:
        "Prisonniers de leurs corps d'adolescents, Stefan et Damon, deux frères vampires, se livrent bataille pour conquérir le cœur de la belle Elena.",
      rate: 3,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/BmVmhjjkN4E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
  ];

  const movieCard1 = [
    {
      id: 1,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXaVY_e9V_PF_-XK5BNfUW7I48JeEZox55TQxg5YlizlwBVldOzmNUgl0Pn4nDQ7c4ua-jfSk6dDhuhQF0cj4uoD25E.jpg?r=7f8",
      title: "Miraculous: Tales of Ladybug & Cat Noir",
      description:
        "Quand Paris est menacé, Marinette se transforme en Ladybug, sans savoir que le garçon dont elle est amoureuse, Adrien, peut lui aussi se métamorphoser en super héros.",
      rate: 5,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/OIfopgLAyv0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 2,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW0lUi0oY14ZWXrVygyjExE9VUtnEW8YmEkJFJimef7cbKZ5HaQcw8ahOl5ca55gkGbmZjmsOKYyRWl7RybZs8M7rEs.jpg?r=087",
      title: "La série : Pokémon, les voyages",
      description:
        "Devenus assistants de recherche au Laboratoire Cerise, le jeune dresseur Sacha et son nouvel ami Goh parcourent le monde pour étudier les Pokémon.",
      rate: 3.5,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/RybSNNgF3Fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 3,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTuVQb_wT5MwGJgeNwdWnqc8oKOvPo0EoOwAhKa2sn_SdqvJD9zVrrPh1As36H9RHIskbaB8b8oPmd5imAgH948ajQ4.jpg?r=1c1",
      title: "Avatar : Le dernier maître de l’air",
      description:
        "Katara et son frère Sokka sortent le jeune Aang d'une longue hibernation et découvrent qu'il est un Avatar maître de l'air capable de vaincre la terrible nation du feu.",
      rate: 4,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/EyJc4yObr7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 4,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe0KAVS7R1sWawQL0NkX6wnB_7ByB5Oif6IwkAnGLnNa_zkujArt-W-eLHgNU6TXi2XOOCts8yVSeVf-_hdefu2y8eI.jpg?r=072",
      title: "Bob l'éponge",
      description:
        "Suivez les mésaventures inoubliables de Bob l'éponge qui vit dans un ananas au fond de la mer avec Gary, son escargot miauleur.",
      rate: 3.5,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/Z2b7SH-yqws" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
  ];

  const movieCard2 = [
    {
      id: 1,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWIeF55IOipfxjW4868T7SkWEJXw1gVt9cWwW19teWziQVX_dQZwT8gKB_GxefVLaYNUXSolh34k-fFaUqrTRrsexRu1gHMaVZawAsEqKwKHpe3ToYrZUJmxsAMm.jpg?r=11b",
      title: "La casa de papel",
      description:
        "Huit voleurs font une prise d'otages dans la Maison royale de la Monnaie d'Espagne, tandis qu'un génie du crime manipule la police pour mettre son plan à exécution.",
      rate: 5,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/-FuMjjGroIM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 2,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvpuWRj2X96YFweUy5RtAbScZxO3g4BsT6YZgIs8JBfEBypyFZxKrDDJ0pYBtoxTMEj3iRhSIqTsndPg7XjNPyqc_Y.jpg?r=e2a",
      title: "Peaky Blinders",
      description:
        "À Birmingham, en Angleterre, l'année 1919 est marquée par les exactions de l'impitoyable Tommy Shelby, un jeune chef de la pègre ivre de son désir de domination.",
      rate: 2.5,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/OU1iZoOrkVo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 3,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABeAuDKIU6ojBLB_b3eTdFBIUmNJ57Sr7xXk4z8I7GyygIrXQyknSm8gI_dhh5Fsp2lnm8DY9ZOEOIA-C1ReeZ5254Ow.jpg?r=01d",
      title: "Breaking Bad",
      description:
        "Un professeur de chimie atteint d'un cancer s'associe à un ancien élève pour fabriquer et vendre de la méthamphétamine afin d'assurer l'avenir financier de sa famille.",
      rate: 3,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/dlnKTmdqxn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
    {
      id: 4,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABdAXNKvfk5JASnoNBh1Sm1Fbg6VP4lotjS__-czgjcC1p24iXZlitfGhSHQEtJ-ceLEG8lAgbT3Hn0FwGK6mJPGZ3f3YfqEmXBpBgdN1_RC2AaKCx5r3aVVz4oqA.jpg?r=816",
      title: "Narcos",
      description:
        "Cette série de gangsters inspirée de l'histoire du célèbre narcotrafiquant de Medellín raconte la guerre sanglante des cartels en Colombie.",
      rate: 2,
      src2:<iframe width="560" height="315" src="https://www.youtube.com/embed/b8eQTgtvu2Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    },
  ];
  const [movieCard3, setMovieCard3] = useState([
    {
      id: 3,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTuVQb_wT5MwGJgeNwdWnqc8oKOvPo0EoOwAhKa2sn_SdqvJD9zVrrPh1As36H9RHIskbaB8b8oPmd5imAgH948ajQ4.jpg?r=1c1",
      title: "Avatar : Le dernier maître de l’air",
      description:
        "Katara et son frère Sokka sortent le jeune Aang d'une longue hibernation et découvrent qu'il est un Avatar maître de l'air capable de vaincre la terrible nation du feu.",
      rate: 4,
    },
    {
      id: 4,
      src: "https://occ-0-2705-2706.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe0KAVS7R1sWawQL0NkX6wnB_7ByB5Oif6IwkAnGLnNa_zkujArt-W-eLHgNU6TXi2XOOCts8yVSeVf-_hdefu2y8eI.jpg?r=072",
      title: "Bob l'éponge",
      description:
        "Suivez les mésaventures inoubliables de Bob l'éponge qui vit dans un ananas au fond de la mer avec Gary, son escargot miauleur.",
      rate: 3.5,
    },
  ]);

  const handleAdd = (newMovie) => {
    setMovieCard3([...movieCard3, newMovie]);
  };

  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="App">
      <Header />
      <h1 className="first">Séries</h1>
      <p className="seconde">
        De nos jours, les productions télévisées n'ont rien à envier au cinéma.
        Des sitcoms aux séries dramatiques, en passant par les émissions de
        voyage et les talk-shows, découvrez le meilleur de la TV.
      </p>

      <Router>
        <Card movieCard={movieCard} />
        
        <Route path="/card/:id"  exact render={(props) => <Detail {...props} movieCard={movieCard}/>}/>
        <Route path="/card/:id/:id"  exact render={(props) => <Cardj {...props} movieCard={movieCard}/>}/>
      </Router>

      <Router>
      <Card1 movieCard1={movieCard1} />
      <Route path="/card/:id"  exact render={(props) => <Detail1 {...props} movieCard1={movieCard1}/>}/>
        <Route path="/card/:id/:id"  exact render={(props) => <Cardj1 {...props} movieCard1={movieCard1}/>}/>
      </Router>


      <Router>
      <Card2 movieCard2={movieCard2} />
      <Route path="/card/:id"  exact render={(props) => <Detail2 {...props} movieCard2={movieCard2}/>}/>
        <Route path="/card/:id/:id"  exact render={(props) => <Cardj2 {...props} movieCard2={movieCard2}/>}/>
      </Router>



      <div id="AddCard"> <h1 className="ajou">Ajouter un nouveau film au bibliotheque.</h1></div> 
     <AddCard  handleAdd={handleAdd} />
      <Card3 movieCard3={movieCard3} />

      <div className="recherche">
      <div id="Chercher">  <h1 className="ajou">Chercher un film</h1></div>
        <input
          className="input"
          type="text"
          placeholder="recherche..."
          onChange={handleChange}
          value={searchTerm}
        />{" "}
      </div>
      
      <div>
        <StarsRating
          className="d-flex justify-content-center"
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={"rgb(187, 45, 59)"}
          value={rate}
          isHalf={true}
        />
        ,
      </div>

      {movieCard
        .filter(
          (val) =>
            val.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            val.rate >= rate
        )

        .map((el, key) => {
          return (
            <div className="user" key={key}>
              <Figure className="espfig1">
                <Figure.Image
                  width={300}
                  height={400}
                  alt="171x180"
                  src={el.src}
                />
                <Figure.Caption>{el.title}</Figure.Caption>
              </Figure>
            </div>
          );
        })}

      {movieCard1
        .filter(
          (val) =>
            val.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            val.rate >= rate
        )

        .map((el, key) => {
          return (
            <div className="user" key={key}>
              <Figure className="espfig1">
                <Figure.Image
                  width={300}
                  height={400}
                  alt="171x180"
                  src={el.src}
                />
                <Figure.Caption>{el.title}</Figure.Caption>
              </Figure>
            </div>
          );
        })}

      {movieCard2
        .filter(
          (val) =>
            val.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
            val.rate >= rate
        )

        .map((el, key) => {
          return (
            <div className="user" key={key}>
              <Figure className="espfig1">
                <Figure.Image
                  width={300}
                  height={400}
                  alt="171x180"
                  src={el.src}
                />
                <Figure.Caption>{el.title}</Figure.Caption>
              </Figure>
            </div>
          );
        })}

      <div className="footer">
        <img className="imgfooter" src="logo5.jpg" alt="" />
        <div id="Abbonez"> <h1>Il y a encore plus de choses à découvrir.</h1> </div>
        <p className="pfooter">
          Tunibest propose un vaste catalogue comprenant notamment des longs
          métrages, des documentaires, des séries TV, des animes et des
          programmes originaux Tunibest primés. Regardez Tunibest à volonté,
          quand vous le voulez.
        </p>
        <Button className="butfooter" variant="danger">
          ABBONEZ-VOUS
        </Button>
      </div>
    </div>
  );
}

export default App;
