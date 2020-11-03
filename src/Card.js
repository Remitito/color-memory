import React from 'react'
import './App.css';

export default function Card(props) {
    return (
        <div onClick={props.onClick} className="cards" id={props.id} style={{backgroundColor: props.color}}></div>
    )
}