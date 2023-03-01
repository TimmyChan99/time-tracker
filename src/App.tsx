import DateRow from './components/DateRow';
import GlobalStyle from './styles/global.style';
import { HeaderContainer, TitleContainer } from './styles/header.style';
import {
  AddButtonContainer,
  FooterContainer,
  MainContainer,
  TotalFooter,
} from './styles/main.style';
import { useTracker } from './TrackerProvider';

function App() {
  const { addTracker, trackerList } = useTracker();
  const trackers = trackerList?.map((item) => (
    <li key={item.id}>
      <DateRow tracker={item} />
    </li>
  ));

  const hanldleClick = () => {
    addTracker();
  };

  const totalHours = trackerList.reduce((acc, item) => {
    return acc + item.totalHours;
  }, 0);

  return (
    <>
      <GlobalStyle />
      <HeaderContainer>
        <TitleContainer>INMOGR</TitleContainer>
      </HeaderContainer>
      <h1>Time Tracker</h1>
      <MainContainer>
        <AddButtonContainer type="button" onClick={hanldleClick}>
          Add New Date
        </AddButtonContainer>
        <ul>{trackers.length === 0 ? 'no trakers' : trackers}</ul>
        <FooterContainer>
          <TotalFooter>
            <span>Total Day</span>
            <span>{trackers.length} days</span>
          </TotalFooter>
          <TotalFooter>
            <span>Total Hours</span>
            <span>{totalHours} Hours</span>
          </TotalFooter>
        </FooterContainer>
      </MainContainer>
    </>
  );
}

export default App;
