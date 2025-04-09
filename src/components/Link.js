import classNames from "classnames";
import useNavigation from "../hooks/use-navigation";

const Link = ({ to, children, className, activeClassName }) => {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName //we will end up with activeClassName only if currentPath is equal to "to"
  );

  const handleClick = (event) => {
    if (event.metaKey || event.ctrlKey) {
      // to open the page in a new tab with control button
      return;
    }
    event.preventDefault();
    navigate(to);
  };

  return (
    <a className={classes} href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default Link;
