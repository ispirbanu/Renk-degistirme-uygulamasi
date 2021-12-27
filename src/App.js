import { Component } from "react/cjs/react.production.min";
import Butons from "./components/Butons";

class App extends Component {
  state={
    //başlangıçta bulunan visibility özelliği false olarak tanımlandı.
    visibility: false,
  }
  click=()=>{
    //start butonuna tıklandığında butonlar ve textarea görünmesi için visibility özelliği true olarak güncellendi
    this.setState({visibility:true});
  }
  render() {
    return (
      <div className="App">
        {/* Bu butonu ayrı oluşturarak başlangıç işlemleri yapıldı */}
        <button id="start" onClick={()=>this.click()}> Start </button>
        <div id="buttons">
          <Butons id="purple" color="Purple" visibility={this.state.visibility}></Butons>
          <Butons id="black" color="Black" visibility={this.state.visibility}></Butons>
          <Butons id="green" color="Green" visibility={this.state.visibility} ></Butons>
          {/* textarea da başta görülmemesi için statede bulunan visibility ile kapalı olarak belirlendi. */}
          <textarea id="text" style={{visibility: this.state.visibility ? 'visible':'hidden'}}></textarea>
          <Butons id="clear" color="Clear" visibility={this.state.visibility} ></Butons>
        </div>
      </div>
    );
  }
}

export default App;
