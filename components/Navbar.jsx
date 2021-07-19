import A from './A';
import style from '../styles/Navbar.module.css';

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <A href="/" text="Главная"></A>
      <A href="/users" text="Users"></A>
    </div>
  );
};

export default Navbar;
