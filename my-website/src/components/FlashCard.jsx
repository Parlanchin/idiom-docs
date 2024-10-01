const container = {
  display:"flex",
  flexDirection: "column",
  alignItems:"center",
  justifyContent:"center",
  width: "500px",
  height: "400px",
  backgroundColor: "purple",
}
const buttonBox = {
  display: "flex",
  justifyContent:"space-evenly",
  width: "100%",
  height:"100px",
  marginTop:"50px"
}
const button = {
  width: "40%",
  height: "40%",
  backgroundColor:"white",
  color:"black",
}
const card = {
  display:"flex",
  flexDirection: "column",
  alignItems:"center",
  justifyContent:"center",
  backgroundColor: "white",
  width: "50%",
  height: "50%",
  color:"black",
}


const FlashCard = () => {

  return(
    <div style={container}>
      <div style={card}>
        <p>dog</p>
      </div>
      <div style={buttonBox}>
        <button style={button}> Previous</button>
        <button style={button}> Next</button>
      </div>
    </div>
  )
};

export default FlashCard;