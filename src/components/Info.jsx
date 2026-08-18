import headshot from "../assets/Headshot.png";

export default function Info() {
  return (
    <>
      <img src={headshot} alt="Picture of Nicole Zhang" />
      <h1>Nicole Zhang</h1>
      <h2>Frontend Developer</h2>
      <div className="button-container">
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
    </>
  );
}
