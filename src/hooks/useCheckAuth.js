export default function useCheckAuth() {
  const token = window.localStorage.getItem('token');

  if (token) {
    return true;
  } else {
    return false;
  }
}
