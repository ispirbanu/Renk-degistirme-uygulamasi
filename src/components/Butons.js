import React, { Component } from "react";

export class Butons extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //Textarea yazı rengi değiştirme
  changeColor=(buton)=>{
      let textarea=document.getElementById("text");
      if(buton==="clear"){
         textarea.value="";
      }
      else{
        textarea.style.color=this.props.id;
       textarea.focus();
      }
  }
  render() { 
    //   {document.getElementById("text").style.color="red"; }
    return (
      <div>
          {/* changecolor metodu textarea rengini değiştirmek için 
          key özelliği react için kullanıldı
          style ile Butonların yazı rengi ve başlat butonuna basmadan görünürlüğü açılmaması için kullanıldı. */}
        <button onClick={()=>this.changeColor(this.props.id)} key={this.props.id} style={{color:this.props.id, visibility: this.props.visibility ? 'visible':'hidden'}}> {this.props.color} </button>
      </div>
    );
  }
}

export default Butons;
