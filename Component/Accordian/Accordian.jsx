import React, { useState } from "react";
import "./accordian.css";

const Accordian = () => {
  const [toggle, settoggle] = useState({});

  const AccordianArray = [
    {
      title: "Delivery time line",
      body: `All orders are processed and  takes 30-60 working days depending on the location. 

      All personalized orders takes up to 20-40 working days once the order is confirmed. 
      
      For Pickup all orders can be picked from our retail store. 
      
      Note: Any delays due to Pandemic or courier partner is not in our hands however we try our best to ship under express shipping from our end.
      We try to deliver all within 30-60 working days, Howrver if there is any delay due to unforseen circumstances or any natural calamity we would request you to be calm and patinet, We will try our level best to get it deliverd to your address. `,
    },
    {
      title: "why low pricing?",
      body: `There are millions of fans all around the world that wish to buy merchandise. 
      Nevertheless, all of them are unable to purchase due to financial constraints, and many of the fans are unemployed, who does not earn any thing. 
      So we're here to make fans' dreams come true. We offer everything at the lowest possible price. 
      We collect a small sum of money from our customers. Then we bring it right to your door.`,
    },
    {
      title: "how may items can i buy?",
      body: `you can buy everything but only once as all this items are limited`,
    },
  ];

  return (
    <div class="accordion my-3" id="">
      {AccordianArray.map((data, index) => {
        return (
          <div class="accordion-item rounded-0 border-bottom" id={index}>
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button
                class={`accordion-button ${
                  toggle[index] == index ? "" : "collapsed"
                }`}
                type="button"
                id={index}
                onClick={() => {
                  settoggle({ [index]: index });
                }}
              >
                {data.title}
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              class={`accordion-collapse collapse rounded-0 ${
                toggle[index] == index ? "show" : ""
              }`}
            >
              <div class="accordion-body">{data.body}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordian;
