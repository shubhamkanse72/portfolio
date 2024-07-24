import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

const Contacts = () => {
  const [listContacts] = useState([
    {
      title : "Email",
      value: "shubhamkanse7272@gmail.com"
    },
    {
      title : "Phone Number",
      value: "+917066337272"
    },
  ]);

const scrollTab = useRef();
CustomHook(scrollTab);

  return (
    <section className='contact' ref={scrollTab}>
       <div className="title" >
        Contact
       </div>
       {/* <div className="des" >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam perspiciatis quae veniam amet nesciunt voluptatibus quis consectetur consequatur quisquam harum.
       </div> */}
       <div className="list" >
        {
          listContacts.map((value,key) => (
            <div className="item" key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Contacts