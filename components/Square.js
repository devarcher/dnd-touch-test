
const Square = () => {
  let rgb = []
  for (var i = 0; i < 3; i++) {
    let r = Math.floor(Math.random() * 256)
    rgb.push(r)
  }
  const styles = {
    margin: '20px',
    width: '50px',
    height: '50px',
    backgroundColor: `rgb(${rgb})`,
    display: 'inline-block',
  };
  
  return (
    <div>
      <div className="square-box" style={styles}>
      </div>
    </div>
  )
}

export default Square;