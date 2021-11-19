import React, {useEffect, useRef, useState} from "react";
import { Nav, Container, Section } from "./styled";

const initialNavColor = {
  bgColor: "#222222",
  color: "#fff",
};

function StickyNavbar() {

  const nav = useRef()
  const [navColor, setNavColor] = useState(initialNavColor);

  useEffect(() => {
    const fixNav = () => {
      if(window.scrollY > nav.current.offsetHeight) {
        setNavColor({
          bgColor: "#fff",
          color: "#222",
        });
      } else {
        setNavColor(initialNavColor);
      }
    }
    window.addEventListener("scroll", fixNav);
    return () => {
      window.removeEventListener("scroll", fixNav);
    }
  }, [])

  return (
    <>
      <Nav ref={nav} navColor={navColor}>
        <div className="logo">MyWebsite</div>
        <ul>
          <li style={{ color: "brown" }}>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>
            <a
              style={{ color: "orange" }}
              href="https://github.com/Zeekg-zk"
              target="_blank"
              rel="noreferrer"
            >
              我的GitHub
            </a>
          </li>
        </ul>
      </Nav>

      <Container>
        <h1>Welcome To My Website</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores,
          consequuntur?
        </p>
      </Container>

      <Section>
        <h2>荷塘月色</h2>
        <p>
          月光如流水一般，静静地泻在这一片叶子和花上。薄薄的青雾浮起在荷塘里。叶子和花仿佛在牛乳中洗过一样；又像笼着轻纱的梦。
          虽然是满月，天上却有一层淡淡的云，所以不能朗照；但我以为这恰是到了好处——酣眠固不可少，小睡也别有风味的。
          月光是隔了树照过来的，高处丛生的灌木，落下参差的斑驳的黑影，峭愣愣如鬼一般；变变的杨柳的稀疏的倩影，却又像是画在荷叶上。
          塘中的月色并不均匀；但光与影有着和谐的旋律，如梵婀玲上奏着的名曲。
        </p>

        <h2>人性的弱点</h2>
        <p>
          焦虑是健康的大敌。如果你有担忧的问题，就做到下面三件事：问自己：“可能发生的最坏的情况是什么？”如果你必须接受的话，就准备接受它。然后镇定地想办法改善最坏的情况。
          如果我们将焦虑的时间，用来寻找解决问题的答案，那焦虑就会在我们智慧的光芒下消失。一旦作出决定，当天就要付诸行动，同时完全不要理会责任问题，也不必担心后果。
          用以下方法来解决你的焦虑。问自己，我担忧的是什么？我能怎么办？我决定怎么做？我什么时候开始做？将焦虑减半的四个步骤：究竟出了什么问题？问题的起因是什么？
          你能找到哪些解决办法？你决定用哪种办法？萧伯纳说的对，他把这些总结起来说：“让人愁苦的秘密就是，有空闲来想想自己到底快乐不快乐。
          ”所以不必去想它，在手掌心里吐口唾沫，让自己忙碌起来，你的血液就会开始循环，你的思想就会开始变得敏锐——让自己一直忙着，这是世界上最便宜的一种药，也是最好的一种。
          为明日做好准备的最佳办法就是集中你所有的智慧、热忱，把今天的工作做得尽善尽美。是的，一定要为明天着想。不错，要小心地考虑、计划和准备，可是不要为明天担忧。
          每当我发现自己忧心忡忡，或为一件事反复无谓地思虑，像只茫无目的兜圈子的骆驼时，只有运动可以帮助我驱散这些焦虑。
          不要让自己因为一些应该抛开和忘记的小事烦心，要记住：“生命太短促了，不要再为小事烦恼。”
        </p>
      </Section>
    </>
  );
}

export default StickyNavbar;
