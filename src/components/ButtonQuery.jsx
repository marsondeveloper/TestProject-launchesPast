import React, {useState, useEffect} from 'react';
import OutputData from './OutputData';
import {launchesAPI} from '../api/api';

const ButtonQuery = (props) => {
const  [launches, setLaunches] = useState([])
const [request, setRequest] = useState();
const [isSending, setIsSendRequest] = useState(false);

  
 useEffect(() => {
    if(isSending) {
    fetch('https://api.spacex.land/graphql/', launchesAPI.getLaunches(props.inputText))
    .then(res => res.json())
    .then(data => setLaunches(data.data.launchesPast)) 
    }
  }, [request]);
  
let  onClickButton = () => {
  setIsSendRequest(true)
    setRequest(props.inputText)
}
    return (
        <div>
            <input type={'button'} value={'Ok'} disabled={!props.folowingInProgress} onClick={onClickButton}/>
            <div>
              <OutputData launches = {launches} />
            </div>
        </div>
    )
};

export default ButtonQuery;