import React, { FC } from "react";

const ListUsers: FC<{ UserData: any }> = ({ UserData }): JSX.Element => {
  const items = UserData.map((el: any) => {
    return (
      <div key={el.id}>
        <div className="UsersListFlexChild">
          <p>User: {el.id}</p>
          <p>Name: {el.name}</p>
          <p>Email: {el.email}</p>
          <div>
            Address:
            <div>
              <p>
                {el.address.street}, {el.address.city}, <br /> Zipcode:{" "}
                {el.address.zipcode},
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return <div className="UsersListFlex">{items}</div>;
};

export default ListUsers;
