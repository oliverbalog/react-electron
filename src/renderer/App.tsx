import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.scss';
import Home from './views/Home';
import About from './views/About';
import Navbar from './components/Navbar';
import Titlebar from './components/Titlebar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggled } from './features/counter/counter-slice';
import { Row, Col } from 'react-bootstrap';
import { MdViewHeadline } from 'react-icons/md';
import TitlebarProps from './models/TitlebarProps';

export default function App() {
  const isTrue = useAppSelector((state) => state.toggler.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(toggled());
  }

  const navBar = isTrue ? (
    <Col sm={2}>
      <Navbar />
    </Col>
  ) : (
    <image className="togglerImg" onClick={handleClick}>
      <MdViewHeadline className="togglerImgCmp" size={30} />
    </image>
  );
  const titlebarProps = new TitlebarProps('title');

  return (
    <div>
      <Router>
        {Titlebar(titlebarProps)}
        <Row className="appRow">
          {navBar}
          <Col sm={isTrue ? 10 : 12} className="contentBg">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Col>
        </Row>
      </Router>
    </div>
  );
}
