import './BurgerMenu.css'

interface BurgerMenuProps {
  list?: string[];
}

export const BurgerMenu = ({ list = ["list is empty"] }: BurgerMenuProps) => {
  return (
    <div className="burger-menu">
      <label className="burger-menu__switcher">
        <input type="checkbox" className="burger-menu__checkbox" />
        <div className="burger-menu__icon"></div>
      </label>
      <nav className="burger-menu__navigation">
        <ul className="burger-menu__list">
          {list.map((li) => (
            <li className="burger-menu__list-item">{li}</li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
