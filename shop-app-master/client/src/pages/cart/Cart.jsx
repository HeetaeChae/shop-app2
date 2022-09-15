import React, { useState } from "react";
import Navbar from "../../components/nav/Navbar";
import Titlebar from "../../components/titlebar/Titlebar";
import "./Cart.css";

function Cart() {
  const datas = [
    {
      title: "첫 번째 상품",
      image:
        "https://www.urbanbrush.net/downloads/%EA%B3%84%EB%9E%80%ED%94%84%EB%9D%BC%EC%9D%B4-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-ai-%EB%AC%B4%EB%A3%8C%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-free-download-image-fried-egg/",
      price: 58000,
    },
    {
      title: "두 번째 상품",
      image:
        "https://www.urbanbrush.net/downloads/%EA%B3%84%EB%9E%80%ED%94%84%EB%9D%BC%EC%9D%B4-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-ai-%EB%AC%B4%EB%A3%8C%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-free-download-image-fried-egg/",
      price: 35000,
    },
    {
      title: "세 번째 상품",
      image:
        "https://www.urbanbrush.net/downloads/%EA%B3%84%EB%9E%80%ED%94%84%EB%9D%BC%EC%9D%B4-%EC%9D%BC%EB%9F%AC%EC%8A%A4%ED%8A%B8-ai-%EB%AC%B4%EB%A3%8C%EB%8B%A4%EC%9A%B4%EB%A1%9C%EB%93%9C-free-download-image-fried-egg/",
      price: 27000,
    },
  ];

  const [quantity, setQuantity] = useState(1);

  const handleQuantity = (e) => {
    //배열 중
    setQuantity(e.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="cart">
        <Titlebar text="장바구니" />
        <table className="table">
          <thead>
            <tr>
              <td>체크</td>
              <td>상품명</td>
              <td>사진</td>
              <td>가격</td>
              <td>수량</td>
              <td>총 가격</td>
              <td>삭제</td>
            </tr>
          </thead>
          {datas.map((data) => (
            <tbody>
              <tr>
                <td>
                  <input type="checkbox" className="table__tbody--checkbox" />
                </td>
                <td>{data.title}</td>
                <td>
                  <img src={data.image} alt={data.title} />
                </td>
                <td>{data.price}</td>
                <td>
                  <input
                    type="number"
                    className="table__tbody--number"
                    value={quantity}
                    onChange={() => handleQuantity(data.title)}
                  ></input>
                </td>
                <td>{data.price * quantity}</td>
                <td>
                  <button>삭제</button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
        <div className="cart__bottom">
          <div className="cart__bottom--shipping">
            <table>
              <thead>
                <tr>
                  <td>지역</td>
                  <td>배송비</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>제주 및 산간지역</td>
                  <td>5000 원</td>
                </tr>
                <tr>
                  <td>그 외 지역</td>
                  <td>3000 원</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="car__bottom--total">
            <table>
              <thead>
                <tr>
                  <td>영수증</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>총 가격</td>
                  <td>10000 원</td>
                </tr>
                <tr>
                  <td>지불 금액</td>
                  <td>15000 원</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
