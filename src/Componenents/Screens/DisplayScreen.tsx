import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { cartData, storeData, storeMyData } from "../Global/Global";
import pix from "./Linked.jpg";
import { useRecoilValue, useRecoilState } from "recoil";
import { preProcessFile } from "typescript";

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
// const checkData = cart.find((el) => el.id === product.id);

// if (check) {
//   const data = {
//     product.qty += 1
//   };
//   setCart(data);
// } else {
//   setCart([...cart, product]);
// }
const DisplayScreen = () => {
  const viewData = useRecoilValue(storeMyData);

  const [cart, setCart] = useRecoilState(cartData);

  const addToCart = (product: NewData) => {
    // const check = cart.findIndex((el) => el.id === product.id);
    // // const check1 = cart.findIndex((el) => el.id === product.id);
    // if (check >= 0) {
    //   const newData = Object.assign({ QTY: (cart[check].QTY! += 1) });
    //   // const newData = (cart[check].qty! += 1);
    //   return setCart(newData);
    // } else {
    //   return setCart([...cart, product]);
    // }

    // setCart((el) => {
    //   const check = el.find((item) => item.id === product.id);
    //   if (check) {
    //     return el.map((item) =>
    //       item.id === product.id ? { ...item, QTY: item.QTY! + 1 } : item
    //     );
    //   }
    //   return [...el, { ...product, QTY: 1 }];
    // });

    // setCart((el) => {
    //   const check = el.find((el) => el.id === product.id);

    //   if (check) {
    //     return el.map((item) =>
    //       item.id === product.id ? { ...item, QTY: (item.QTY! += 1) } : item
    //     );
    //   }
    //   return [...el, { ...product, QTY: 1 }];
    // });

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

  console.log("Cart: ", cart);
  return (
    <div>
      <Container>
        <Wrapper>
          {viewData?.map((props) => (
            <Card key={props.id}>
              <Image src={props.image} />
              <br />
              <div>{props.title}</div>
              <br />
              <Price>₦{props.price}</Price>
              {/* <Price>{props.QTY}</Price> */}
              <Space />
              <Button
                onClick={() => {
                  addToCart(props);
                  console.log(props);
                }}
              >
                Add to Cart
              </Button>
            </Card>
          ))}
        </Wrapper>
      </Container>
    </div>
  );
};

export default DisplayScreen;

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
