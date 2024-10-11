import ImageShow from "./ImageShow";
import "../SearchBar.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;

// notes

// the key prop should always be at the top most element

// key must be string or number
