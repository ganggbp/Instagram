import {CognitoUser} from '@aws-amplify/auth';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import {Auth, Hub} from 'aws-amplify';

type UserType = CognitoUser | null | undefined;

type AuthContextType = {
  user: UserType;
  setUser: Dispatch<SetStateAction<UserType>>;
};

const AuthContext = createContext<AuthContextType>({
  user: undefined,
  setUser: () => {},
});

const AuthContextProvider = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState<CognitoUser | null | undefined>();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const authUser = await Auth.currentAuthenticatedUser({
          bypassCache: true,
        });
        setUser(authUser);
      } catch (e) {
        setUser(null);
      }
    };

    checkUser();
  }, []);

  useEffect(() => {
    const listener: HubCallback = data => {
      const {event} = data.payload;
      if (event === 'signOut') {
        setUser(null);
      }
    };

    const hubListenerAuth = Hub.listen('auth', listener);

    return () => hubListenerAuth();
  }, []);

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext);
