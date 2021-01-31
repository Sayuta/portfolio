import react from 'react'
import Stars from '../components/Stars';


const Skill = (props) => {
    return(<div className="col-6 col-sm-3 col-md-6"><b>{props.name}</b><br/><Stars amount={props.exp}/></div>)
}

export default Skill;