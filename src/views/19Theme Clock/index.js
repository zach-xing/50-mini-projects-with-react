import React,{useState,useEffect, useRef} from 'react'
import styled from 'styled-components'

const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.secondaryColor};
  background-color: ${(props) => props.theme.primaryColor};
  .btn {
    margin: 20px 0;
    padding: 20px;
  }
`;

const ClockContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  .text {
    font-size: 36px;
  }
`;

const Clock = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  .needle {
    background-color: ${(props) => props.theme.secondaryColor};
    position: absolute;
    top: 50%;
    left: 50%;
    height: 65px;
    width: 3px;
    transform-origin: bottom center;
    transition: all 0.5s ease-in;
  }
  .hour {
    transform: translate(-50%, -100%)
      rotate(${(props) => scale(props.hoursForClock, 0, 12, 0, 360)}deg);
  }
  .minute {
    transform: translate(-50%, -100%)
      rotate(${(props) => scale(props.minutes, 0, 60, 0, 360)}deg);
    height: 100px;
  }
  .second {
    transform: translate(-50%, -100%)
      rotate(${(props) => scale(props.seconds, 0, 60, 0, 360)}deg);
    height: 100px;
    background-color: #e74c3c;
  }
  .center-point {
    background-color: #e74c3c;
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
  }
`;

// 将一个数字范围映射到另一个数字范围
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const customTheme = {
  light: {
    primaryColor: "#fff",
    secondaryColor: "#333",
  },
  dark: {
    primaryColor: "#000",
    secondaryColor: "#fff",
  },
};

function ThemeClock() {

  const [theme, setTheme] = useState(customTheme.light);
  const [nowTime, setNowTime] = useState({})
  const timer = useRef()

  useEffect(() => {
    function setTime() {
      const time = new Date();
      const month = time.getMonth();
      const day = time.getDay();
      const date = time.getDate();
      const hours = time.getHours();
      const hoursForClock = hours >= 13 ? hours % 12 : hours;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";
      setNowTime({
        hoursForClock,
        minutes,
        seconds,
        textTime: `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`,
        textDate: `星期${days[day]}  ${month+1}月${date}日`
      });
    }
    setTime()
    timer.current = setInterval(setTime, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const toggleTheme = () => {
    if(theme.primaryColor === "#fff") {
      setTheme(customTheme.dark);
    } else {
      setTheme(customTheme.light)
    }
  }

  return (
    <Main theme={theme}>
      <button className="btn" onClick={toggleTheme}>Toggle</button>
      <ClockContainer>
        <Clock
          theme={theme}
          hoursForClock={nowTime.hoursForClock}
          minutes={nowTime.minutes}
          seconds={nowTime.seconds}
        >
          <div className="needle hour"></div>
          <div className="needle minute"></div>
          <div className="needle second"></div>
          <div className="center-point"></div>
        </Clock>

        <div className="text">{nowTime.textTime}</div>
        <div className="text">{nowTime.textDate}</div>
      </ClockContainer>
    </Main>
  );
}

export default ThemeClock
