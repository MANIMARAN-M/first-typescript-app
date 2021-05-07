import React from "react";
import ListUsers from "./ListUsers";

interface UserDetails {
  name: string;
  data: any;
}

class User extends React.Component<{}, UserDetails> {
  constructor(props: any) {
    super(props);
    this.state = {
      name: "hey",
      data: [],
    };
  }
  componentDidMount?(): void {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => {
        this.setState({ ...this.state, data: res });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render(): JSX.Element {
    return (
      <div>
        <div className="UsersListTitle">
          <h1>Fetching users data using TypeScript</h1>
        </div>
        <div>
          <ListUsers UserData={this.state.data} />
        </div>
      </div>
    );
  }
}

export default User;
