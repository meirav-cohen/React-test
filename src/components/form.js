

import React ,{Component} from 'react';

class Form extends Component{



render(){
    return(
        <div>
            <form>
               <label>שם פרטי:</label> 
               <input type="text"></input>
               <label>שם משפחה:</label> 
               <input type="text"></input>
               <label>טלפון:</label> 
               <input type="text"></input>
            </form>
        </div>
    )
}
}export default Form;
