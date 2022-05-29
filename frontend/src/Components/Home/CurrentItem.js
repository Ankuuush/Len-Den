import React, { useContext } from 'react'
import HomeContext from '../../Context/Home/HomeContext'
import {useNavigate} from 'react-router-dom'

const CurrentItem = (props) => {
    const {item}=props
    const homeContext = useContext(HomeContext)
    const {getLenderDetails,getCurrentItem}=homeContext;
    const navigate=useNavigate();
    const handleClick=()=>{
      getLenderDetails(item._id,1)
      getCurrentItem(item._id);
      navigate('/currentLoan');
    }

  return (
    <div className="card-current" onClick={handleClick}>
                    <p>{item.loanType}</p>
                    <p>{item.amount}</p>
                    <p>{item.interest}</p>
                    <p>{item.dateBorrowed}</p>
                </div>
  )
}

export default CurrentItem