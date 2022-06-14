import React from 'react'
import "./CheckBox.scss";

const CheckBox = () => {
  return (
    <div className='checkboxes'>
          
    <input type="checkbox" id="abv" name="abv" value="High ABV" />  High ABV (>6.0%) <br />
    <input type="checkbox" id="cr" name="cr" value=" Classic Range " />  Classic Range <br />
    <input type="checkbox" id="acidic" name="acidic" value="Acidic(ph>4)" />  Acidic(ph>4)

    </div>
  )
}

export default CheckBox;