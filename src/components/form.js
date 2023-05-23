import { React } from "react";

const Form = ({script}) => (<div className="wrapper lg:w-1/2" dangerouslySetInnerHTML={{__html:`${script}`}}/>)

export default Form;
