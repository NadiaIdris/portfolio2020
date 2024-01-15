import newWindowIcon from "../vector-images/new-window.svg";

const GitHubButton = () => {
  return (
    <a
      href="https://github.com/NadiaIdris"
      target="_blank"
      rel="noopener noreferrer"
      className="try-app-button mg-top-10"
    >
      View my GitHub page
      <img
        src={newWindowIcon}
        alt="New window icon"
        width="10"
        height="10"
        style={{ marginLeft: "5px" }}
      />
    </a>
  );
};

export default GitHubButton;