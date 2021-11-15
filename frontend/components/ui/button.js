import Link from "next/link";

function Button(props) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className={props.className}>{props.children}</a>
      </Link>
    );
  }

  return (
    <button
      className={props.className}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
}

export default Button;
