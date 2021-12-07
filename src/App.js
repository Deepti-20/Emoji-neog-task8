import React, { useState } from "react";
import "./index.css";


const emojiDictionary = {
  "🥰" : "In Love Face",
  "🤣":"rolling on the floor laughing",
  "😀":"grinning face",
  "😉":"winking face",
  "🤩":"star-struck",
  "😘":"face blowing a kiss",
  "😋":"face savoring food",
  "❣":"heart exclamation",
  "😳":"disbelief",
  "😔":"sad",
  "🥡":"takeout box",
  "❤️":"love",
  "😑":"annoyance",
  "😃":"grinning face",
  "😌":"relieved face",
  "🤢" :"Nauseated Face",
  "🤮":" Face Vomiting",
  "🤧": "Sneezing Face",
  "🥵": "Hot Face",
  "🥶": "Cold Face",
  "🥴": "Woozy Face",
  "😵": "Face with Crossed-Out Eyes",
  "😵‍💫":"Face with Spiral Eyes",
  "🤯": "Exploding Head",
  "🤠": "Cowboy Hat Face",
  "🥳": "Partying Face",
  "😎": "Smiling Face with Sunglasses",
  "🤓": "Nerd Face",
  "🧐": "Face with Monocle",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "😮": "Face with Open Mouth",
  "😯": "Hushed Face",
  "😲": "Astonished Face"
}

var emojisWeKnow=(Object.keys(emojiDictionary))

export default function App() {
  const [meaning,setMeanig] = useState(" ");

    function emojiInputHandler(event){      //processing
      var userInput = event.target.value;

      var meaning = emojiDictionary[userInput];

      if (meaning===undefined){
        meaning = " we don't have this in our database."
      }
      setMeanig(meaning)  // react call to show output
    }
  function emojiClickHandler(emoji){        //processing
    var meaning = emojiDictionary[emoji];
    setMeanig(meaning)
  }
  return (
    <div className="App">
      <h1>inside outt</h1>

      <input onChange = {emojiInputHandler}/>

      <h2> {meaning} </h2>
      <h3> Emoji We Know </h3>
      {emojisWeKnow.map(function(emoji){
        return (
        <span 
        onClick={() => emojiClickHandler(emoji)}
        style={{fontSize: "2rem", padding: "1rem", cursor : "pointer"}} 
        key={emoji}> {emoji} 
        </span>);
      })}
    </div>
  );
}