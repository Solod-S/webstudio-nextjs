const buttons: string[] = [
  'All',
  'Web-sites',
  'Applications',
  'Design',
  'Marketing',
];

interface ButtonsProps {
  setActiveFilter: React.Dispatch<React.SetStateAction<string>>;
  activeFilter: string;
}

const ButtonsPanel: React.FC<ButtonsProps> = ({
  setActiveFilter,
  activeFilter,
}) => {
  return (
    <ul className="buttons-set">
      {buttons.map((button) => (
        <li key={button} className="buttons-set__item">
          <button
            className={`buttons-set__button ${
              activeFilter === button ? 'active' : ''
            }`}
            style={
              activeFilter === button
                ? { backgroundColor: '#2196f3', color: 'white' }
                : undefined
            }
            type="button"
            data-filter={button}
            onClick={() => setActiveFilter(button)}
          >
            {button}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonsPanel;
