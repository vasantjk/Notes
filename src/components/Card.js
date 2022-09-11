import React from "react";
import "./style.css";
const Card = () => {
  return (
    <div className="CardStyle">
      <h2 style={{ textAlign: "center", margin: "5px 0" }}>Heading</h2>
      <span style={{ fontSize: "15px", fontWeight: 500 }}>Description :</span>
      {/* <pre>
        <code>
          {`(class GFG
        {
            // Program begins with a call to main()
            // Print "Hello, World" to the terminal window
            public static void main(String args[])
            {
                System.out.println("Hello, World");
            }
        }
                  })`}
        </code>
      </pre> */}
    </div>
  );
};

export default Card;
