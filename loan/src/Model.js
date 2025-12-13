import React from 'react'


export default function Model({isVisible ,error=null}) {
    const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px 30px",
  borderRadius: "10px",
  boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
};

    if(isVisible){
         return (
   <div style={overlayStyle}>
     <div style={modalStyle}>
    
      <h1 style={{color : error ? "red" : "green"}}>{error !==null ? error : "Votre message a bien été envoyé. Merci de nous avoir contactés"} </h1>
    </div>
   </div>
  )

    }
    else{
        return <div></div>
    }
 
}
