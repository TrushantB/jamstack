import { React } from "react";

const Form = ({script}) => (<div className="wrapper lg:w-3/4" dangerouslySetInnerHTML={{__html:`${script}`}}/>)

export default Form;
