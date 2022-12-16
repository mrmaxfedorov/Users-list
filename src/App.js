import React from "react";
import './index.scss';
import { Success } from "./components/Success";
import { Users } from "./components/users";

function App() {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [searchValue, setSearchValue] =  React.useState('');
  const [invites, setInvites] = React.useState([]);
  const [success, setSuccess] = React.useState(false);

  React.useEffect(() => {
    fetch('https://reqres.in/api/users')
        .then(res => res.json())
        .then(json => {
          setUsers(json.data);
        }).catch(err => {
          console.log(err);
          alert('Error occurred: could not load users data');
    }).finally(() => setLoading(false));
  }, []);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  }

  const onClickAdd = (id) => {
    if (invites.includes(id)) {
      setInvites(prev => prev.filter(_id => id !== id));
    } else {
      setInvites(prev => [...prev, id]);
    }
  }

  const onClickSendInvitation = () => {setSuccess(true)};

  return (
    <div className="App">
      { success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickAdd={onClickAdd}
          onClickSendInvitation={onClickSendInvitation}
        />
      )}
    </div>
  );
}
export default App;
