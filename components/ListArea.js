
const containerStyles = {
  width: "20vw",
  height: "1080px",
  background: "#E8EFFF",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRight: "3px solid black"
}

const textStyles = {
  margin: '2rem',
  fontSize: "1.5rem"
}

const ListArea = () => {
  return (
  <>
  <div className="listArea" style={containerStyles}>
    <h1>Drag Item</h1>
    <div style={textStyles}>Text 1</div>
    <div style={textStyles}>Text 2</div>
    <div style={textStyles}>Text 3</div>
    <div style={textStyles}>Text 4</div>
    <div style={textStyles}>Text 5</div>
  </div>
  </>
  )
}

export default ListArea