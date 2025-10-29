import "./LinkButton.scss";

function LinkButton({ name, icon, style, link, blank }) {
  const Icon = icon;

  return (
    <a
      className={style}
      href={link}
      target={blank ? "_blank" : null}
      rel={blank ? "noopener noreferrer" : null}
    >
      <span>{name}</span>
      {icon && <Icon size="24" />}
    </a>
  );
}

export default LinkButton;
