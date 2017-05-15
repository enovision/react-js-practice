
var HexToRgb = React.createClass({

  getInitialState: function () {
    return {
      theR: '',
      theG: '',
      theB: '',
      theHex:'',
      bgColor: ''
    }
  },

  convertHex: function (e) {

    var hex = e.target.value;
    this.setState({
      theHex: hex
    });
    var pass = false;
    if(hex.length === 3){
      var hex = hex.substring(0, 1) + hex.substring(0, 1) + hex.substring(1, 2) + hex.substring(1, 2) + hex.substring(2, 3) + hex.substring(2, 3);
      pass = true;
    }
    else if (hex.length === 6) {
      pass = true
    }else{
      pass = false
    }

    if(pass){

      var bigint = parseInt(hex, 16);
      var r = (bigint >> 16) & 255;
      var g = (bigint >> 8) & 255;
      var b = bigint & 255;

      this.setState({
        theR: r,
        theG: g,
        theB: b,
        bgColor: '#'+hex
      });

    }else{
      this.setState({
        theR: '',
        theG: '',
        theB: '',
        bgColor: '#34495e'
      });

    }
  },



  render: function () {
    document.body.style.backgroundColor = this.state.bgColor;
    return (

      <center>
      <input type="text" className="textBox1" onChange={this.convertHex} placeholder='HEX' maxLength={6} autoFocus={focus} value={this.state.theHex}/><br/>
      <input type="text" className="textBox2" placeholder='R' readonly value={this.state.theR}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" className="textBox2" placeholder='G' readonly value={this.state.theG}/> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" className="textBox2" placeholder='B' readonly value={this.state.theB}/>
      </center>

    );
  }
});

ReactDOM.render(

  <HexToRgb  />

  , document.getElementById('root')


);
