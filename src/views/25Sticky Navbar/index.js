import React from "react";
import { Nav, Container, Section } from "./styled";

function StickyNavbar() {
  return (
    <>
      <Nav>
        <div className="logo">MyWebsite</div>
        <ul>
          <li style={{ color: "brown" }}>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
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
        <h2>Content One</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic
          quo in ipsum iste soluta eaque perferendis nihil recusandae dolore
          officia aperiam corporis similique. Facilis quos tempore labore totam!
          Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor,
          modi dolorem sit architecto, voluptate magni sunt unde est quas?
          Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur
          libero laboriosam ab eligendi omnis delectus earum labore, placeat
          officiis sint illum rem voluptas ipsum repellendus iste eius
          recusandae quae excepturi facere, iure rerum sequi? Illum velit
          delectus dicta et iste dolorum obcaecati minus odio eligendi!
        </p>

        <h3>Content Two</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur
          provident nostrum possimus inventore nisi laboriosam consequatur modi
          nulla eos, commodi, omnis distinctio! Maxime distinctio impedit
          provident, voluptates illo odio nostrum minima beatae similique a sint
          sapiente voluptatum atque optio illum est! Tenetur tempora doloremque
          quae iste aperiam hic cumque repellat?
        </p>
      </Section>
    </>
  );
}

export default StickyNavbar;
