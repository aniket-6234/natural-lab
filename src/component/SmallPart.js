import React from 'react';
import './styling.css';

//importing icon from material icon
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import StarIcon from '@material-ui/icons/Star';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowForwardSharpIcon from '@material-ui/icons/ArrowForwardSharp';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';



class SmallPart extends React.Component {

  constructor() {
    super();
    this.state = {
      id: "",
      keyword: "",
      goal: "",
      matches: "",
      seachStatus: ""

    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/akshita151199/Termmonitor-APIs/main/dashboard")
       .then(response => response.json())
       .then(data => {
         this.setState({
           id: data.id,
           keyword: data.keyword,
           goal: data.goal,
           matches: data.matches,
           seachStatus: data.search_status
         })
       })
  }


render() {

  return (
    <div className="box">

    <div className="first-container">
      <div className="heading">
        <img className="logo" src="./images/naturallogo.png" alt="logo" />
        <h2 className="term">Term</h2>
        <h2 className="monitor">Monitor</h2>
      </div>

      <div className="violet-box">
         <HomeIcon style={{"color" : "white", "margin-top":"10px", "margin-left":"-70px"}}/>
         <h2>Add keywords</h2>
      </div>

      <div className="list-item">
        <div className="inline-element">
          < PeopleIcon style={{"color" : "gray", "margin-top":"23px", "margin-left":"30px"}}/>
          <h2>Matches</h2>
        </div>
        <div className="inline-element">
          < CreditCardIcon style={{"color" : "gray", "margin-top":"23px", "margin-left":"30px"}}/>
          <h2>Manage sources</h2>
        </div>
        <div className="inline-element">
          < CreditCardIcon style={{"color" : "gray", "margin-top":"23px", "margin-left":"30px"}}/>
          <h2>Integration</h2>
        </div>
        <div className="inline-element">
          < CreditCardIcon style={{"color" : "gray", "margin-top":"23px", "margin-left":"30px"}}/>
          <h2>Alerts</h2>
        </div>

        <div className="star">
          <StarIcon style={{"color" : "gray", "margin-top":"23px", "margin-left":"30px"}}/>
          <h2>Settings</h2>
          <ArrowDropDownIcon style={{"color" : "gray", "margin-top":"23px", "margin-left":"90px"}}/>
        </div>
        <h3 className="billing">Billings</h3>  
      </div>
   </div>

     <div className="second-container">

       <nav className="nav-bar">
         <h1 className="keyword">KEYWORDS</h1>
         <div className="submit-box">
           <h2>SUBMIT</h2> 
           <ArrowForwardSharpIcon style={{"margin-top":"7px", "margin-left" : "5px", "font-size": "14px", "color":"#3F0E40"}} />
         </div>
         <div className="circle-a">
           <h2>A</h2>
         </div>
       </nav>

       <main className="inner-box">

         <div className="add-another">

           <div id="another">
             <h2 id="key">Add Another Keyword</h2>
             <div id="onebythree">
               1/3
             </div>
             <h2 className="upgrade">UPGRADE</h2>
             <h2 className="search">Advance search</h2>
           </div>

           <div className="save-filter">
             <div className="enter-search">
               <div className="input">
                 <SearchIcon style={{"font-size": "18px", "margin-left":"10px"}}/>
                 <input className="search-bar" type="text" placeholder="Enter your filters here"/>
               </div>

               <div className="btn-violet">
                 <h2>SAVE FILTERS</h2>
               </div>
             </div>
           </div>
         </div>
       </main>

       <div className="table-container">
         
         <div className="table-heading">
           <div className="tracking">
             <h2>The terms you are tracking</h2>
             <h3>The data will refresh every 5 min</h3>
           </div>
         </div>

         <div className="table">
           <table>
              <tr>
                <th>Keywords</th>
                <th className="t-h"></th>
                <th>Goal</th>
                <th>Matches</th>
                <th>Search Status</th>
                <th className="t-h">Delete keyword</th>
              </tr>
               
              <tr>
                <td id="data">Chair</td>
                <td id="search-data"><SearchIcon style={{"font-size":"22px"}}/></td>
                <td id="data">Lead gen</td>
                <td id="data">6</td>
                <td id="data">Done</td>
                <td id="data-delete"><DeleteIcon style={{"font-size": "22px"}}/></td>
              </tr>
              
              <tr>
                <td id="data">{this.state.keyword}</td>
                <td id="search-data"></td>
                <td id="data">{this.state.goal}</td>
                <td id="data">{this.state.matches}</td>
                <td id="data">{this.state.seachStatus}</td>
                <td id="data-delete"><DeleteIcon style={{"font-size": "22px"}}/></td>
              </tr>

              <tr>
                <td id="data">{this.state.keyword}</td>
                <td id="search-data"></td>
                <td id="data">{this.state.goal}</td>
                <td id="data">{this.state.matches}</td>
                <td id="data">{this.state.seachStatus}</td>
                <td id="data-delete"><DeleteIcon style={{"font-size": "22px"}}/></td>
              </tr>
             
              <tr>
                <td id="data">{this.state.keyword}</td>
                <td id="search-data"></td>
                <td id="data">{this.state.goal}</td>
                <td id="data">{this.state.matches}</td>
                <td id="data">{this.state.seachStatus}</td>
                <td id="data-delete"><DeleteIcon style={{"font-size": "22px"}}/></td>
              </tr>
              
              <tr>
                <td id="data">{this.state.keyword}</td>
                <td id="search-data"></td>
                <td id="data">{this.state.goal}</td>
                <td id="data">{this.state.matches}</td>
                <td id="data">{this.state.seachStatus}</td>
                <td id="data-delete"><DeleteIcon style={{"font-size": "22px"}}/></td>
              </tr>
           </table>
         </div>

         <div class="result-btn">
           <button class="result">VIEW RESULTS</button>
         </div>

       </div>

     </div>

    </div>
   );
 } 
};

export default SmallPart;