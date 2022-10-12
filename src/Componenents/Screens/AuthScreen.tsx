import React, { useState } from "react";
import styled from "styled-components";
import { authData } from "../Global/Global";
import pix from "./logo.png";
import { useRecoilState, useRecoilValue } from "recoil";

interface AUTH {
  name: string;
  email: string;
}

const AuthScreen = () => {
  const [userName, setUserName] = useRecoilState(authData);

  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");

  const updateState = () => {
    setUserName({ name: user, email: email });
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Card onSubmit={updateState}>
            <Image src={pix} />
            <br />
            <Input
              required={true}
              placeholder="UserName"
              value={user}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setUser(e.target.value);
              }}
            />
            <Input
              required={true}
              placeholder="Email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEmail(e.target.value);
              }}
            />

            <br />
            <Button type="submit">Auth In</Button>
          </Card>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AuthScreen;

const Image = styled.img`
  height: 150px;
`;

const Button = styled.button`
  padding: 15px 80px;
  background-color: #004080;
  border-radius: 3px;
  transition: all 350ms;
  color: white;

  :hover {
    cursor: pointer;
    transform: scale(1.005);
    font-weight: 900;
  }
`;

const Input = styled.input`
  margin: 10px 0;
  width: 80%;
  height: 40px;
  border-radius: 4px;
  padding-left: 10px;
`;

const Card = styled.form`
  width: 400px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: calc(100vh - 0px);
  background: lightgray;
`;
