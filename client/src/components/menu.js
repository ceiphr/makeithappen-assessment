import React from "react";

const Menu = (data) => {
  console.log(data);
  return (
    <tbody>
      {data.length > 0 ? (
        data.map((drink, index) => {
          return (
            <tr key={index}>
              <td>{drink.strDrink}</td>
            </tr>
          );
        })
      ) : (
        <tr>
          <td colSpan="5">Loading...</td>
        </tr>
      )}
    </tbody>
  );
};

export default Menu;
