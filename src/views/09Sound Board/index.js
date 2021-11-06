import React, { useEffect, useState } from "react";
import styled from "styled-components";

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

const Main = styled.main`
  display: flex;
  height: 100vh;
  background-color: lightblue;
  justify-content: space-around;
  align-items: center;
  button {
    border: 0;
    border-radius: 20px;
    background-color: #663399;
    width: 200px;
    height: 80px;
    color: white;
    font-size: 18px;
    transition: transform 0.3s ease;
    &:focus {
      transform: scale(1.1);
      background-color: #a164df;
      box-shadow: 0 0 5px black;
    }
  }
`;

function SoundBoard() {

  const [audioRefs, setAudioRefs] = useState([]);

  useEffect(() => {
    let arr = Array.from(sounds, x => React.createRef())
    setAudioRefs(arr)
  }, []);

  // 点击开始播放
  const onPlayhandle = (index) => {
    stopOtherAudio()
    audioRefs[index].current.play()
  }

  // 开始播放前，应该要关闭其他的 audio
  const stopOtherAudio = () => {
    audioRefs.forEach((item) => {
      item.current.pause()
    })
  }

  return (
    <Main>
      {sounds.map((item, index) => {
        return (
          <div key={item}>
            <button onClick={() => onPlayhandle(index)}>{item}</button>
            <audio
              src={`https://50projects50days.com/projects/sound-board/sounds/${item}.mp3`}
              ref={audioRefs[index]}
            ></audio>
          </div>
        );
      })}
    </Main>
  );
}

export default SoundBoard;
