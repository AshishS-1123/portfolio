import React, { memo } from 'react';
import "./index.css";

function ContactBar() {
  const icon_details = [
    { contact: "shevaleashish@gmail.com", icon: "/email.png" },
    { contact: "linkedin.com/in/ashish-shevale", icon: "/linkedin.png" },
    { contact: "github.com/AshishS-1123", icon: "/github.png" },
    { contact: "+91-9022160734", icon: "/phone.png" },
  ]

  return (
    <div className="ContactBar__container">
      {
        icon_details.map(item => {
          return (
            <div className="ContactBar__icon">
              <img src={item.icon} />
            </div>
          )
        })
      }
    </div>
  )
}

ContactBar.propTypes = {};

export default memo(ContactBar);
