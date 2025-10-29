import "./FunctionButton.scss";

function FunctionButton({ name, icon, className, style, onClick, children }) {
  const Icon = icon;

  return (
    <button className={className} style={style} onClick={onClick}>
      <div className="buttonContent">
        <span>{name}</span>
        {icon && <Icon size="24" />}
      </div>
      {children}
    </button>
  );
}

export default FunctionButton;
