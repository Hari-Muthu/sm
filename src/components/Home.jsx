import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Recommends from "./Recomended";
import Trending from "./Trending";
import Viewers from "./Viewers";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {db} from "../firebase";
import { setMovies } from "../features/movie/MovieSlice";
import { selectUserName } from "../features/user/UserSlice";

import { collection, onSnapshot } from "firebase/firestore";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {

    onSnapshot(collection(db, "movies"), (snapshot) => {
      // eslint-disable-next-line
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend": // eslint-disable-next-line
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new": // eslint-disable-next-line
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;
          case "original": // eslint-disable-next-line
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending": // eslint-disable-next-line
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
     });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
