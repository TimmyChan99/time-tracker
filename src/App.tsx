import DateRow from './components/DateRow';
import GlobalStyle from './styles/global.style';
import { HeaderContainer, TitleContainer } from './styles/header.style';
import {
  AddButtonContainer,
  FooterContainer,
  MainContainer,
  Title,
  TotalFooter,
} from './styles/main.style';
import { useTracker } from './TrackerProvider';
import { ReactComponent as Logo } from './images/logo.svg';

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
        <Logo />
        <TitleContainer>INMOGR</TitleContainer>
      </HeaderContainer>
      <Title>Time Tracker</Title>
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
