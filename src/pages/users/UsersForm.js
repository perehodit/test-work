import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToUsers, changeInUsers } from '../../app/actions/users';
import useFormValidate from '../../hooks/useFormValidate';

export default function UserForm(props) {
  const editableUser = useSelector(store =>
    store.users.find(user => {
      if (user.id === props.editId) {
        return user;
      }
      return false;
    })
  );

  const [user, setUser] = useState(() => {
    if (typeof props.editId === 'number' && props.editId >= 0) {
      return {
        name: editableUser.name,
        surname: editableUser.surname,
        about: editableUser.about,
        gender: editableUser.gender,
        age: editableUser.age,
      };
    } else {
      return {
        name: '',
        surname: '',
        about: '',
        gender: '',
        age: '',
      };
    }
  });

  const dispatch = useDispatch();

  const [validateError, validate] = useFormValidate(user);

  function handleSubmit(event) {
    event.preventDefault();

    if (validate()) {
      if (typeof props.editId === 'number' && props.editId >= 0) {
        dispatch(changeInUsers(user, props.editId));
      } else {
        dispatch(addToUsers(user));
      }
      props.onSubmit();
    }
  }

  return (
    <form>
      <div className="formItem">
        <input
          value={user.name}
          onChange={event => {
            setUser(user => ({ ...user, name: event.target.value }));
          }}
          type="text"
          placeholder="Name"
        />
      </div>
      <div className="formItem">
        <input
          value={user.surname}
          onChange={event => {
            setUser(user => ({ ...user, surname: event.target.value }));
          }}
          type="text"
          placeholder="Surname"
        />
      </div>
      <div className="formItem">
        <input
          value={user.about}
          onChange={event => {
            setUser(user => ({ ...user, about: event.target.value }));
          }}
          type="text"
          placeholder="About"
        />
      </div>
      <div className="formItem">
        <select
          className={!user.gender ? 'selectedDefault' : ''}
          value={user.gender}
          onChange={event => {
            setUser(user => ({ ...user, gender: event.target.value }));
          }}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="formItem">
        <input
          value={user.age}
          onChange={event => {
            setUser(user => ({ ...user, age: Number(event.target.value) }));
          }}
          type="number"
          placeholder="Age"
        />
      </div>
      <div className="fromInfo">
        {validateError ? (
          <div className="fromError">Please input all fields!</div>
        ) : (
          ''
        )}
      </div>
      <div className="formItem formItemButtons">
        <button onClick={() => props.onCancel()}>Cancel</button>
        <button onClick={event => handleSubmit(event)}>Save</button>
      </div>
    </form>
  );
}
