import React from "react";

const MainScreen = ({ title, children }) => {
  return (
    <div>
      <div>
        {title && (
          <div className="my-3 ">
            <h1 className="text-3xl md:text-5xl font-thin capitalize">
              {title}
            </h1>
            <hr />
          </div>
        )}
        <div className="my-9 text-xl">{children}</div>
      </div>
    </div>
  );
};

export default MainScreen;
