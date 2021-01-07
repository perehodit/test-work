import Modal from '../../components/modal/Modal';
import UsersForm from './UsersForm';
import UsersTable from './UsersTable';
import useClickOutside from '../../hooks/useClickOutside';
import './Users.scss';
import { useRef, useState } from 'react';

function Users() {
  const userModalRef = useRef();
  const [userModalToggle, setUserModalToggle] = useState(false);
  useClickOutside(userModalRef, () => setUserModalToggle(false));

  return (
    <div className="users">
      <div className="usersHeader">
        <h1>Users</h1>
        <button onClick={() => setUserModalToggle(true)}>Add user</button>
      </div>
      {userModalToggle ? (
        <Modal
          onClose={() => setUserModalToggle(false)}
          title="Add user"
          ref={userModalRef}
        >
          <UsersForm
            onCancel={() => setUserModalToggle(false)}
            onSubmit={() => setUserModalToggle(false)}
          ></UsersForm>
        </Modal>
      ) : (
        ''
      )}
      <UsersTable></UsersTable>
    </div>
  );
}

export default Users;
