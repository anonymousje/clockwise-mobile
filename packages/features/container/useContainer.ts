import { useDispatch } from 'react-redux';
import { setTokens } from '../../store/actions/auth';

export default function useContainer() {
  const dispatch = useDispatch();

  function tokenSetter(accessToken: string, refreshToken: string) {
    dispatch(setTokens(accessToken, refreshToken));
  }

  return { tokenSetter };
}
