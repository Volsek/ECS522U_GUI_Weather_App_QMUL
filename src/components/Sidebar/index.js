import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../../App';
import reportWebVitals from '../../reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state={
      menuOpen:false,
    }
  }
  menuClick(){
    this.setState({menuOpen:!this.state.menuOpen});
  }


  render(){


  const menu = ['1', '2', '3']
  const menuItems = menu.map((val,index)=>{
    return (
      <MenuItem 
        key={index} 
        delay={`${index * 0.1}s`}
        onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
  });

  return(
    <div>
      <div style={styles.container}>
        <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
      </div>
      <Menu open={this.state.menuOpen}>
        {menuItems}
      </Menu>
    </div>
  )
}

  }

}