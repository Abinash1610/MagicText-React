import React from "react";

export default function About(props) {
  return (
    <div className="accordion container" id="accordionExample">
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
            style={{color:props.mode==="dark"?"white":"black" , backgroundColor:props.mode==="dark"?"#144181":"white"}}
          >
            <strong>Why MagicText?</strong>
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{color:props.mode==="dark"?"white":"black" , backgroundColor:props.mode==="dark"?"#144181":"white" , border:"2px solid" , borderColor:props.mode==="dark"?"white":"black"}}>
            MagicText is the best text utility present on the web at the current time. Using MagicText, you can Convert To UpperCase , Convert To Lowercase , Remove Extra Spaces , Clear And Copy Text with ease. MagicText can help edit and convert text with convenience. Try MagicText once and we are sure you will fall in love with it!!
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingTwo">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
            style={{color:props.mode==="dark"?"white":"black" , backgroundColor:props.mode==="dark"?"#144181":"white"}}
          >
            <strong>From where did the idea of MagicText arise?</strong>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{color:props.mode==="dark"?"white":"black" , backgroundColor:props.mode==="dark"?"#144181":"white" , border:"2px solid" , borderColor:props.mode==="dark"?"white":"black"}}>
            When we saw people facing difficulties handling text , we started thinking of a solution. Earlier if someone had to convert the text from a source to completely uppercase or to lowercase or any such functionality , then they had to use any Program or something like that. But no more , we present you a magical tool that can help you out from this situation , and hence the name MagicText. We won't praise for ourselves , the tool speaks for itself. Go ahead , give it a try!!
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
            style={{color:props.mode==="dark"?"white":"black" , backgroundColor:props.mode==="dark"?"#144181":"white"}}
          >
            <strong>Want to Contact Us?</strong>
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body" style={{color:props.mode==="dark"?"white":"black" , backgroundColor:props.mode==="dark"?"#144181":"white" , border:"2px solid" , borderColor:props.mode==="dark"?"white":"black"}}>
           If you have any queries , you can reach out to us here:<br/>
           Mail Us At: abinashbiswal65@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}
