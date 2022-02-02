import React, { useEffect,useState } from "react"
import styles from './styles.module.css'

export const Meme = () => {

    const [memes, setMemes] = useState([])
    const [memeIndex, setMemeIndex] = useState(0)
    const [captions, setCaptions] = useState([]);

    useEffect (() => {
        fetch('https://api.imgflip.com/get_memes').then(res=>
        res.json().then(res => {
            const memes = res.data.memes
            shuffleMemes(memes);
            setMemes(memes);
        }))
    }, []);

    useEffect(() =>{
        if(memes.length) {
            setCaptions(Array(memes[memeIndex].box_count).fill(''));
        }
    }, [memeIndex, memes]) 


    const updateCaption = (e,index) => {
        const text = e.target.value || '';
        setCaptions(
           captions.map((c,i) => {
               if(index === i) {
                return text;
               } else {
                return c;
               }
           })
        )
    }

    const generateMeme = () => {
     
       
    }
    
    const shuffleMemes = (array) => {
        for(let i = array.length-1; i > 0; i--) {
            const j = Math.floor(Math.random() * i);
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

  return (
      memes.length ?
      <div  className={styles.container}>
          <button onClick={() => { const currentMeme = memes[memeIndex];
        const formData = new FormData();
       
        formData.append('username','asknishant');
        formData.append('password','nishant.39');
        formData.append('template_id', currentMeme.id);
        captions.forEach((c,index) => formData.append(`boxes[${index}][text]`, c))
      
        fetch('https://api.imgflip.com/caption_image', {
            method: 'POST',
            body: formData
        }).then(res => {
            res.json().then(res => {
                console.log(res);
            })
        })}} className={styles.generate}>Generate</button>
          <button onClick={() => setMemeIndex(memeIndex+1)} className={styles.skip}>Skip</button>
          {
              captions.map((c,index) => (
                  <input onChange={(e) => updateCaption(e, index)} key={index} />
              ))
          }
          <img src={memes[memeIndex].url}/>
      </div>
      : <></>
  )
}

