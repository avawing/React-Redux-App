import { CardDeck, Button } from "reactstrap";
import React, {useEffect} from "react";
import Beer from "./Beer";
import { connect } from "react-redux";
import {fetchData} from '../actions'

const mapStateToProps = (state) => {
    return {
        beers: state.beers
    };
  };

function BeerList(props) {
    useEffect(()=>{
        props.fetchData()
    })
  return (
      <>
      <h1>Beers with Reasonable IBU</h1>
      {props.beers.length > 0 ? <CardDeck>{props.beers.map(beer => {return <Beer  beer = {beer}/>})}</CardDeck> : <Button style = {{textAlign: 'center'}}>Fetch Beer!</Button>}
      {props.isLoading ? <h2>Fetching Beer...</h2> : null}
    
        
        
    
    </>
  );
}

export default connect(mapStateToProps, {fetchData})(BeerList);
