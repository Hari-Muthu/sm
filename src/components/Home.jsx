import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Trending from "./Trending";
import NewDisney from "./NewDisney"
import Originals from './Originals'
import Recommends from './Recomended'
import { useDispatch, useSelector } from "react-redux";
import { selectUserName } from "../features/user/UserSlice";
import { setMovies } from "../features/movie/MovieSlice";
import { useEffect } from "react";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

function Home() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    console.log("UseEffect");
    try {
      // eslint-disable-next-line
      const data = onSnapshot(collection(db, "movies"), (snapshot) => {
        // eslint-disable-next-line
        snapshot.docs.map((doc) => {
          console.log("onSnapshot map");
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
    } catch (err) {
      console.log("error: " + err);
    }
  }, [userName]);


  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <Trending />
      <NewDisney />
      <Originals />
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
