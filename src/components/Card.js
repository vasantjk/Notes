import React from "react";

const Card = () => {
  return (
    <div
      style={{
        boxShadow: "1px 1px 2px grey",
        borderRadius: "5px",
        width: "100%",
        height: "300px",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
        overflow: "hidden",
        padding: "10px",
      }}
    >
      <h2>Heading</h2>
      <pre>
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
      </pre>
    </div>
  );
};

export default Card;
