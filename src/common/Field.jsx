import React from "react";

const Field = ({ children, htmlFor, label, error }) => {
    const id = htmlFor || getChildId(children);
  return (
      <div>
          {label && <div htmlFor={id}>{label}</div>}
          {children}
          {error && <div className="text-red-600">{ error.message}</div>}
    </div>
  );
};

const getChildId = (children) => {
    const child = React.Children.only(children);
    if ('id' in child.props) {
        return child.props.id;
    }
};
export default Field;