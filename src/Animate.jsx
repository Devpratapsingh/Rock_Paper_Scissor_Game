import stoneImage from './stone.jpg';
import paperImage from './paper.jpg';
import scissorImage from './scissor.jpg';
import './imag.css'

export default function Animate({ uc, cc }) {

  function getImage(url) {
    if (url === 'stone.jpg') {
      return <img src={stoneImage} style={{ width: 100, height: 100}} />;
    } else if (url === 'paper.jpg') {
      return <img src={paperImage} style={{ width: 100, height: 100}} />;
    } else if (url === 'scissor.jpg') {
      return <img src={scissorImage} style={{ width: 100, height: 100}} />;
    }
  }

  let image;
  if (uc === "stone") {
    image = getImage("stone.jpg");
  } else if (uc === "paper") {
    image = getImage("paper.jpg");
  } else if (uc === "scissor") {
    image = getImage("scissor.jpg");
  }

  let computerImage;
  if (cc === "stone") {
    computerImage = getImage("stone.jpg");
  } else if (cc === "paper") {
    computerImage = getImage("paper.jpg");
  } else if (cc === "scissor") {
    computerImage = getImage("scissor.jpg");
  }

  return (
    <div className="collision-container">
      <div className="image-container">
        {image}
       <b> <p>your move</p></b> 
      </div>
      <div className="image-container">
        {computerImage}
      <b> <p>Computer move</p></b> 
      </div>
    </div>
  );
}