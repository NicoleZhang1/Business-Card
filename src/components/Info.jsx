import headshot from "../assets/Headshot.png";

export default function Info() {
  function handleEmailClick() {
    window.location.href = "mailto:nicole.zhang11409@gmail.com";
  }

  return (
    <>
      <img src={headshot} alt="Picture of Nicole Zhang" />
      <h1>Nicole Zhang</h1>
      <h2>Frontend Developer</h2>
      <div className="button-container">
        <button type="button" onClick={handleEmailClick}>
          Email
        </button>
        <button id="linkedin-btn" type="button">LinkedIn</button>
      </div>
    </>
  );
}
