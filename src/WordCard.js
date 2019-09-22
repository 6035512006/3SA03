import Content from "./Content";
import React, {Component} from 'react';
 

export default class WordCard extends Component {
render() {
 return (
 <div>
{ Array.from(this.props.value).map((c, i) => <Content value={c} key={i} />) }
 </div>
 );
 }
}