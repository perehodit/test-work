import { useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useClickOutside from '../../hooks/useClickOutside';
import Modal from '../../components/modal/Modal';
import { removeFromUsers } from '../../app/actions/users';
import UsersForm from './UsersForm';
import TableNoData from '../../components/tableNoData/tableNoData';

export default function UsersTable() {
  // store
  const users = useSelector(store => store.users).sort((a, b) => {
    return b.id - a.id;
  });

  const dispatch = useDispatch();

  // local state
  const [selected, setSelected] = useState(null);

  //   remove
  const removeModalRef = useRef();
  const [removeModalToggle, setRemoveModalToggle] = useState(false);
  useClickOutside(removeModalRef, () => handleCloseRemoveModal());

  function handleOpenRemoveModal(id) {
    setSelected(id);
    setRemoveModalToggle(true);
  }

  function handleCloseRemoveModal() {
    setSelected(null);
    setRemoveModalToggle(false);
  }

  function handleRemoveUser() {
    dispatch(removeFromUsers(selected));
    handleCloseRemoveModal();
  }

  //   edit
  const editModalRef = useRef();
  const [editModalToggle, setEditModalToggle] = useState(false);
  useClickOutside(editModalRef, () => setEditModalToggle(false));

  function handleOpenEditModal(id) {
    setSelected(id);
    setEditModalToggle(true);
  }

  return (
    <div className="tableWrapper">
      {editModalToggle ? (
        <Modal ref={editModalRef} onClose={() => setEditModalToggle(false)}>
          <UsersForm
            editId={selected}
            onCancel={() => setEditModalToggle(false)}
            onSubmit={() => setEditModalToggle(false)}
          ></UsersForm>
        </Modal>
      ) : (
        ''
      )}
      {removeModalToggle ? (
        <Modal
          onClose={() => handleCloseRemoveModal()}
          ref={removeModalRef}
          title="Remove user"
        >
          <p>Are you sure you want to remove this user?</p>
          <div className="formItemButtons">
            <button onClick={() => handleCloseRemoveModal()}>Cancel</button>
            <button onClick={() => handleRemoveUser()}>Remove</button>
          </div>
        </Modal>
      ) : (
        ''
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>About</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => {
            return (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.surname}</td>
                <td>{user.about}</td>
                <td>{user.gender}</td>
                <td>{user.age}</td>
                <td>
                  <span>
                    <span
                      onClick={() => handleOpenEditModal(user.id)}
                      className="textButton"
                    >
                      Edit
                    </span>
                    <span>&#160;|&#160;</span>
                    <span
                      onClick={() => handleOpenRemoveModal(user.id)}
                      className="textButton"
                    >
                      Remove
                    </span>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {users.length ? '' : <TableNoData />}
    </div>
  );
}
