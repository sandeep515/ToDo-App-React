let List=(props)=>{

return(

    <ul>
        {

        props.task.map((element,index)=>{
          return(
               <li key={index}>{element}
               <button onClick={()=>{
                props.deleteTask(element);

           }}>Delete</button>
               
               </li>
          );
        })
        
        }
      </ul>

)

}
export default List;