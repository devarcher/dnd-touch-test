import ListArea from "../components/ListArea";
import MapArea from "../components/MapArea";
import Square from "../components/Square";

const containerStyles = {
  display: "flex",
};

const DnDPlayground = () => (
  <div style={containerStyles}>
    <ListArea />
    <MapArea />
  </div>
);

export default DnDPlayground;
