
import React from "react";
import "./App.css";
import List from "./List";
import Input from "./input";


class App extends React.Component{
  
  state={
  
    task: ["Make Coffee","Make Notes","Go for Job","New Task"],
    currVal:"",
  
  };  

  handleCurrInput=(value)=>{
  this.setState({currVal:value});
 }

 handleTasks = () => {
  this.setState({
    task: [...this.state.task, this.state.currVal],
    currVal:"",
  });
};

 deleteTask=(singletask)=>{
  let currTaskArr = this.state.task;

  let filteredArr = currTaskArr.filter((el) => {
    return el !== singletask;

 });
 this.setState({ task: filteredArr });
  
}

  render =()=> {

    return (
      <div>
       <Input handleTasks={this.handleTasks}  
       handleCurrInput={this.handleCurrInput} 
       currVal={this.state.currVal}/>
      
       <List  task={this.state.task} deleteTask={this.deleteTask} />

  </div>
    );
}
}

export default App;
