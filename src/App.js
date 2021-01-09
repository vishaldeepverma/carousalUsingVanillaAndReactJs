import React, { useState } from "react";
import "./styles.css";
import Data from "./data";

export default function App() {
  // initialise products
  const [products, setProducts] = useState(Data);

  const [filteredProducts, setFilteredProducts] = useState(Data);

  // set index
  const [index, setIndex] = useState(0);

  // selected category
  const [category, setCategory] = useState(0);

  // update category and filter data
  const updateCategory = (id) => {
    setIndex(0);
    setCategory(id);
    const data =
      id === 0
        ? Data
        : products.filter((product) => product.categoryCode === id);
    // console.log(data);
    setFilteredProducts(data);
  };

  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "50px",
          justifyContent: "center",
          fontSize: "25px"
        }}
      >
        <div
          style={{
            marginRight: "20px",
            width: "100px",

            padding: "10px",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: category === 0 ? "underline" : ""
          }}
          onClick={() => updateCategory(0)}
        >
          All
        </div>

        <div
          style={{
            marginRight: "20px",
            width: "100px",
            padding: "10px",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: category === 1 ? "underline" : ""
          }}
          onClick={() => updateCategory(1)}
        >
          Shoes
        </div>
        <div
          style={{
            marginRight: "20px",
            width: "100px",
            padding: "10px",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: category === 2 ? "underline" : ""
          }}
          onClick={() => updateCategory(2)}
        >
          Electronics
        </div>
        <div
          style={{
            marginRight: "20px",
            width: "100px",
            padding: "10px",
            alignItems: "center",
            cursor: "pointer",
            textDecoration: category === 3 ? "underline" : ""
          }}
          onClick={() => updateCategory(3)}
        >
          Clothing
        </div>
      </div>
      <div
        className="App"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <p
          onClick={() => (index ? setIndex(index - 1) : "")}
          style={{
            backgroundColor: index ? "black" : "grey",
            cursor: "pointer",
            borderRadius: "10px",
            color: "white",
            margin: "5px",
            padding: "10px",
            display: "inline-block"
          }}
        >
          {"<"}
        </p>

        {/* show all three products */}

        <div
          style={{
            height: "380px",
            maxHeight: "380px",
            backgroundColor: "white",
            // border: "1px solid",
            margin: "5px",
            width: "300px",
            maxWidth: "300px",
            boxShadow: "3px 3px 5px 6px #ccc"
          }}
        >
          <div
            style={{
              backgroundImage: `url(${
                filteredProducts[index] ? filteredProducts[index].image : ""
              })`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              marginTop: "20px",
              height: "215px",
              maxHeight: "215px",
              width: "200px",
              backgroundRepeat: "no-repeat",
              display: "inline-block"
            }}
          ></div>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "15px",
              marginLeft: "10px",
              marginRight: "10px"
            }}
          >
            <div style={{ marginTop: "5%" }}>
              Name: {filteredProducts[index].itemName}
            </div>
            <div style={{ marginTop: "5px" }}>
              Price: <span>₹{filteredProducts[index].itemPrice}.00</span>
              <span style={{ textDecoration: "line-through", color: "grey" }}>
                {" ₹"}
                {filteredProducts[index].itemMrp}.00
              </span>
            </div>
            <div style={{ marginTop: "5px" }}>
              Category: {filteredProducts[index].category}
            </div>
          </div>
        </div>

        {filteredProducts[index + 1] ? (
          <div
            style={{
              height: "420px",
              maxHeight: "420px",
              backgroundColor: "white",
              // border: "1px solid",
              margin: "5px",
              width: "360px",
              maxWidth: "360px",
              boxShadow: "3px 3px 5px 6px #ccc"
            }}
          >
            <div
              style={{
                backgroundImage: `url(${
                  filteredProducts[index + 1]
                    ? filteredProducts[index + 1].image
                    : ""
                })`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                marginTop: "20px",
                backgroundRepeat: "no-repeat",
                height: "270px",
                maxWidth: "250px",
                minWidth: "250px",
                display: "inline-block"
              }}
            ></div>

            <div
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px"
              }}
            >
              <div style={{ marginTop: "5%" }}>
                Name:{filteredProducts[index + 1].itemName}
              </div>
              <div style={{ marginTop: "5px" }}>
                Price: <span>₹{filteredProducts[index + 1].itemPrice}.00</span>
                <span style={{ textDecoration: "line-through", color: "grey" }}>
                  {" ₹"}
                  {filteredProducts[index].itemMrp}.00
                </span>
              </div>
              <div style={{ marginTop: "5px" }}>
                Category:{filteredProducts[index + 1].category}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        {filteredProducts[index + 2] ? (
          <div
            style={{
              height: "380px",
              maxHeight: "380px",
              backgroundColor: "white",
              // border: "1px solid",
              margin: "5px",
              width: "300px",
              maxWidth: "300px",
              boxShadow: "3px 3px 5px 6px #ccc"
            }}
          >
            <div
              style={{
                backgroundImage: `url(${
                  filteredProducts[index + 2]
                    ? filteredProducts[index + 2].image
                    : ""
                })`,
                backgroundPosition: "center",
                backgroundSize: "contain",
                marginTop: "20px",

                backgroundRepeat: "no-repeat",
                height: "215px",
                maxHeight: "215px",
                width: "200px",
                display: "inline-block"
              }}
            ></div>

            <div
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                marginLeft: "10px",
                marginRight: "10px"
              }}
            >
              <div style={{ marginTop: "5%" }}>
                Name:{filteredProducts[index + 2].itemName}
              </div>
              <div style={{ marginTop: "5px" }}>
                Price: <span>₹{filteredProducts[index + 2].itemPrice}.00</span>
                <span style={{ textDecoration: "line-through", color: "grey" }}>
                  {" ₹"}
                  {filteredProducts[index].itemMrp}.00
                </span>
              </div>
              <div style={{ marginTop: "5px" }}>
                Category:{filteredProducts[index + 2].category}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* --end */}

        <p
          onClick={() =>
            index === filteredProducts.length - 3 ? "" : setIndex(index + 1)
          }
          style={{
            backgroundColor:
              index !== filteredProducts.length - 3 ? "black" : "grey",
            cursor: index !== filteredProducts.length - 3 ? "pointer" : "",
            borderRadius: "10px",
            color: "white",
            margin: "5px",
            padding: "10px",
            display: "inline-block"
          }}
        >
          {">"}
        </p>
      </div>
    </React.Fragment>
  );
}
