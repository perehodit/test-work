import './Modal.scss';
import Icon from '../icons/Icon';
import { useEffect, forwardRef } from 'react';

const Modal = forwardRef((props, ref) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    return () => {
      document.body.style.overflowY = 'auto';
    };
  });

  return (
    <div className="modalWrapper">
      <div ref={ref} className="modal">
        <span className="modalHeader">
          <h2>{props.title}</h2>
          <Icon
            height="14px"
            viewBox="0 0 329.26933 329"
            onClick={() => props.onClose()}
            name="close"
          ></Icon>
        </span>
        <div className="modalBody">{props.children}</div>
      </div>
    </div>
  );
});

export default Modal;
