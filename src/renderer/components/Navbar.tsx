import { Link } from 'react-router-dom';
import { MdViewHeadline } from 'react-icons/md';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggled } from '../features/counter/counter-slice';

const Navbar = () => {
  const isTrue = useAppSelector((state) => state.toggler.value);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(toggled());
  }

  if (isTrue) {
    return (
      <div className="navbarm">
        <image className="navbarTogglerImg" onClick={handleClick}>
          <MdViewHeadline className="navbarTogglerImgCmp" size={30} />
        </image>
        <ul className="navlist">
          <li>
            <Link className="linkcomponent" to="/">Home</Link>
          </li>
          <li>
            <Link className="linkcomponent" to="/about">
              About
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return <div />;
};

export default Navbar;
