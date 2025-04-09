import Button from "../components/Buttons";
import { GoBellFill } from "react-icons/go";
import { IoMdCloudDownload } from "react-icons/io";
import { BsEmojiNeutral } from "react-icons/bs";

const handleClick = () => {};

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBellFill />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <IoMdCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button success>See Deal</Button>
      </div>
      <div>
        <Button warning>
          <BsEmojiNeutral />
          Hide Ads
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          More Info
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
