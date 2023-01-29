import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import Home from './views/Home';
import About from './views/About';
import Navbar from './components/Navbar';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { toggled } from './features/counter/counter-slice';
import { Row, Col } from 'react-bootstrap';
import { MdViewHeadline } from 'react-icons/md';

export default function App() {
  const isTrue = useAppSelector((state) => state.toggler.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(toggled());
  }

  const navBar = isTrue ? (
    <Col sm={2}>
      <Navbar isTrue={isTrue} />
    </Col>
  ) : (
    <image className="togglerImg" onClick={handleClick}>
      <MdViewHeadline className="togglerImgCmp" size={30} />
    </image>
  );

  return (
    <div>
      <Router>
        <Row>
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
