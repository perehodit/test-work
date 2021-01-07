import Icon from '../icons/Icon';

export default function tableNoData() {
  return (
    <div className="tableNoData">
      <Icon viewBox="0 0 24 24" height="24px" name="empty"></Icon>
      <span>No data</span>
    </div>
  );
}
