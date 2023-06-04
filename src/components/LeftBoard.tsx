import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import StarOutlineOutlinedIcon from "@mui/icons-material/StarOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import image from "../assets/1.png";

const LeftBoard = () => {
  return (
    <div className="pl-8 w-96 flex">
      <div className="btn btn-ghost btn-circle avatar flex justify-start">
        <img src={image} alt="" className="rounded-md" />
        <span>mushu</span>
      </div>
    </div>
  );
};

export default LeftBoard;
