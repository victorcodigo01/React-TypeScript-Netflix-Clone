import React, { useState, useEffect } from "react";
import BrowseHeaderWrapper from "../components/Header/BrowseHeaderWrapper";
import BrowseNavbar from "../components/Header/BrowseNavbar";
import Logo from "../components/Header/Logo";
import FeatureWrapperBrowse from "../components/Feature/FeatureWrapperBrowse";
import FeatureTitleBrowse from "../components/Feature/FeatureTitleBrowse";
import FeatureSubTitleBrowse from "../components/Feature/FeatureSubTitleBrowse";
import PlayButton from "../components/Header/PlayButton";
import HeaderLink from "../components/Header/HeaderLink";
import AllSlidesWrapper from "../components/Movies/AllSlidesWrapper";
import SlideWrapper from "../components/Movies/SlideWrapper";
import SlideTitle from "../components/Movies/SlideTitle";
import AllCardsWrapper from "../components/Movies/AllCardsWrapper";
import CardWrapper from "../components/Movies/CardWrapper";
import CardImage from "../components/Movies/CardImage";
import CardTitle from "../components/Movies/CardTitle";
import CardDescription from "../components/Movies/CardDescription";
import CardFeatureWrapper from "../components/Movies/CardFeatureWrapper";
import CardFeatureClose from "../components/Movies/CardFeatureClose";
import PlayerVideo from "../components/Movies/PlayerVideo";
import PlayerOverlay from "../components/Movies/PlayerOverlay";
import FooterCompound from "../compounds/FooterCompound";
import Loader from "react-loader-spinner";
import SpinnerWrapper from "../components/Movies/SpinnerWrapper";
import seriesData from "../data/series.json";
import filmsData from "../data/films.json";

/*---> Component <---*/
let BatmanBegin = {
  title: "Batman Begins",
  src: "https://www.youtube.com/embed/JIGLjChePqk",
};

const BrowsePage = () => {
  let series: MovieType[] = seriesData;
  series = [
    {
      title: "Documentales",
      data: series.filter((item) => item.genre === "Documentales"),
    },
    {
      title: "Comedia",
      data: series.filter((item) => item.genre === "Comedia"),
    },
    {
      title: "Niños",
      data: series.filter((item) => item.genre === "Niños"),
    },
    {
      title: "Crimen",
      data: series.filter((item) => item.genre === "Crimen"),
    },
    {
      title: "Sentirse-bien",
      data: series.filter((item) => item.genre === "Sentirse-bien"),
    },
  ];
  console.log("series2", series);

  let films: MovieType[] = filmsData;
  films = [
    {
      title: "Drama",
      data: films.filter((item) => item.genre === "drama"),
    },
    {
      title: "Thriller",
      data: films.filter((item) => item.genre === "thriller"),
    },
    {
      title: "Niños",
      data: films.filter((item) => item.genre === "Niños"),
    },
    {
      title: "Suspense",
      data: films.filter((item) => item.genre === "suspense"),
    },
    {
      title: "Romance",
      data: films.filter((item) => item.genre === "romance"),
    },
  ];

  const [category, setCategory] = useState("films");
  const currentCategory = category === "films" ? films : series;
  const [showCardFeature, setShowCardFeature] = useState(false);
  const [activeItem, setActiveItem] = useState<MovieType>({});
  const [showPlayer, setShowPlayer] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleFilmsClick = () => {
    setCategory("films");
    const element = document.getElementById("movies");
    element?.scrollIntoView();
  };

  const handleSeriesClick = () => {
    setCategory("series");
    const element = document.getElementById("movies");
    element?.scrollIntoView();
  };

  useEffect(() => {
    if (series[0].data!.length > 1) {
      setLoading(false);
    }
  }, [series]);

  if (loading) {
    return (
      <SpinnerWrapper>
        <Loader type="ThreeDots" color="white" height={100} width={100} />
      </SpinnerWrapper>
    );
  }

  return (
    <>
      <BrowseHeaderWrapper>
        <BrowseNavbar>
          <Logo />
          <HeaderLink onClick={handleFilmsClick}>Películas</HeaderLink>
          <HeaderLink onClick={handleSeriesClick}>Series</HeaderLink>
        </BrowseNavbar>
        <FeatureWrapperBrowse>
          <FeatureTitleBrowse>Batman Begins</FeatureTitleBrowse>
          <FeatureSubTitleBrowse>
            Bruce Wayne vive obsesionado con el recuerdo de la muerte de sus
            padres. Atormentado, se va de Gotham y encuentra a un extraño
            personaje que lo entrena en todas las disciplinas físicas y mentales
            que le servirán para combatir el Mal.
          </FeatureSubTitleBrowse>
          <PlayButton
            onClick={() => {
              setActiveItem(BatmanBegin);
              setShowPlayer(true);
            }}
          >
            Trailer
          </PlayButton>
          {showPlayer && activeItem?.title == "Batman Begins" ? (
            <PlayerOverlay onClick={() => setShowPlayer(false)}>
              <iframe
                style={{ margin: "auto" }}
                width="1361"
                height="480"
                src={activeItem.src + "?autoplay=1"}
                title={activeItem.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </PlayerOverlay>
          ) : null}
        </FeatureWrapperBrowse>
      </BrowseHeaderWrapper>

      <AllSlidesWrapper id="movies">
        {currentCategory.map((slideItem) => (
          <SlideWrapper key={`${category}-${slideItem.title?.toLowerCase()}`}>
            <SlideTitle>{slideItem.title!}</SlideTitle>
            <AllCardsWrapper>
              {slideItem.data?.map((cardItem) => (
                <CardWrapper key={cardItem.docId!}>
                  <CardImage
                    onClick={() => {
                      setShowCardFeature(true);
                      setActiveItem(cardItem);
                    }}
                    src={`../images/${category}/${cardItem.genre}/${cardItem.slug}/small.jpg`}
                  />
                </CardWrapper>
              ))}
            </AllCardsWrapper>
            {showCardFeature &&
            slideItem.title?.toLowerCase() ===
              activeItem.genre?.toLowerCase() ? (
              <CardFeatureWrapper
                style={{
                  backgroundImage: `url(../images/${category}/${activeItem.genre}/${activeItem.slug}/large.jpg)`,
                }}
              >
                <CardTitle>{activeItem.title!}</CardTitle>
                <CardDescription>{activeItem.description!}</CardDescription>
                <CardFeatureClose onClick={() => setShowCardFeature(false)} />
                <PlayButton onClick={() => setShowPlayer(true)}>
                  Trailer
                </PlayButton>
                {showPlayer ? (
                  <PlayerOverlay onClick={() => setShowPlayer(false)}>
                    <iframe
                      style={{ margin: "auto" }}
                      width="1361"
                      height="480"
                      src={activeItem.src + "?autoplay=1"}
                      title={activeItem.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </PlayerOverlay>
                ) : null}
              </CardFeatureWrapper>
            ) : null}
          </SlideWrapper>
        ))}
      </AllSlidesWrapper>
      <FooterCompound />
    </>
  );
};

export default BrowsePage;

/*---> Interfaces <---*/
interface MovieType {
  description?: string;
  docId?: string;
  genre?: string;
  id?: string;
  maturity?: string;
  slug?: string;
  title?: string;
  data?: MovieType[];
  src?: string;
}
