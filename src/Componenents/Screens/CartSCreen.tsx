import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { cartData, storeData, storeMyData } from "../Global/Global";
import { useRecoilValue, useRecoilState } from "recoil";

interface IData {
  rate: number;
  count: number;
}

interface Data {
  id: number;
  title: string;
  price: number;
  descritpion: string;
  category: string;
  image: string;
  rating: IData;
  QTY?: number;
}

interface NewData extends Data {
  QTY?: number;
}

const DisplayScreen = () => {
  const viewData = useRecoilValue(storeMyData);
  const cartValue = useRecoilValue(cartData);

  const [cart, setCart] = useRecoilState(cartData);

  const removeFromCart = (product: NewData) => {
    setCart((el) => el.filter((el) => el.id !== product.id));
  };

  const addOne = (product: NewData) => {
    setCart((el) => {
      const check = el.find((el) => el.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...item, QTY: item.QTY! + 1 } : item
        );
      }
      return [...el, { ...product, QTY: 1 }];
    });
  };
  const removeOne = (product: NewData) => {
    setCart((el) => {
      const check = el.find((el) => el.id === product.id);

      if (check) {
        return el.map((item) =>
          item.id === product.id ? { ...item, QTY: item.QTY! - 1 } : item
        );
      }
      return [...el, { ...product, QTY: 1 }];
    });
  };

  const getTotal = (products: NewData[]) => {
    return products.reduce((a: number, b) => a + b.QTY! * b.price, 0);
  };

  const getQTY = (products: NewData[]) => {
    return products.reduce((a: number, b) => a + b.QTY!, 0);
  };

  console.log("Cart: ", cart);
  return (
    <div>
      <Container>
        <div>PRICE: {getTotal(cart)}</div>
        <div>QTY: {getQTY(cart)}</div>
        <Wrapper>
          {cartValue?.map((props) => (
            <Card key={props.id}>
              <Image src={props.image} />
              <br />
              <div>{props.title}</div>
              <br />
              <Price>₦{props.price}</Price>
              {/* <Price>{props.QTY}</Price> */}

              <div style={{ display: "flex" }}>
                <Button1
                  onClick={() => {
                    removeOne(props);
                  }}
                >
                  -
                </Button1>
                <Div>{props.QTY}</Div>
                <Button1
                  onClick={() => {
                    addOne(props);
                  }}
                >
                  +
                </Button1>
              </div>
              <Space />
              <Button
                onClick={() => {
                  removeFromCart(props);
                  console.log(props);
                }}
              >
                Remove from Cart
              </Button>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default DisplayScreen;

const Div = styled.div`
  margin: 0 20px;
`;

const Button1 = styled.div`
  margin-bottom: 10px;
  padding: 5px 20px;
  background-color: red;
  border-radius: 3px;
  transition: all 350ms;
  color: white;

  :hover {
    cursor: pointer;
    transform: scale(1.005);
    font-weight: 900;
  }
`;

const Price = styled.div`
  font-weight: 900;
  font-size: 30px;
`;

const Space = styled.div`
  flex: 1;
`;
const Button = styled.div`
  margin-bottom: 10px;
  padding: 15px 30px;
  background-color: red;
  border-radius: 3px;
  transition: all 350ms;
  color: white;

  :hover {
    cursor: pointer;
    transform: scale(1.005);
    font-weight: 900;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 300px;
`;

const Card = styled.div`
  margin: 10px;
  width: 300px;
  height: 500px;
  border-radius: 10px;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;
