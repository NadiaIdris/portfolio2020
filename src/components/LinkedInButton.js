import newWindowIcon from "../vector-images/new-window.svg";

const LinkedInButton = () => {
  return (
    <a
      href="https://www.linkedin.com/in/nadiaidris1/"
      target="_blank"
      rel="noopener noreferrer"
      className="try-app-button"
    >
      View my LinkedIn profile
      <img
        src={newWindowIcon}
        alt="New window icon"
        width="10"
        height="10"
        style={{ marginLeft: "5px", marginTop: "-1px" }}
      />
    </a>
  );
};

export default LinkedInButton;
