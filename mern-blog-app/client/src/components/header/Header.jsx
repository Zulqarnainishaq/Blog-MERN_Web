import "./header.css";
import bg from './bg.jpg';

export default function Header() {
  return (
    <div className="header">
      <img
        className="headerImg"
        src={bg}
        alt=""
      />
    </div>
  );
}
