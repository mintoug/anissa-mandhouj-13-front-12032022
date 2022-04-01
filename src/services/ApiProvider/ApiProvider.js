import axios from 'axios'
import { 
    API_URL_USER_LOGIN,
    API_URL_USER_PROFILE 
} from 'utils/constants/constants';

class ApiProvider {
   
    userLogIn(login, password, remember) {
        return axios
            .post(API_URL_USER_LOGIN, {
                email: login,
                password: password,
            })
            .then(function (response) {
                if (response.data.body.token) {
                    if (remember) {
                        sessionStorage.setItem('jwtToken', response.data.body.token)
                    }
                    return response;
                }
            })
            .catch(function (error) {
                if (error.response) {
                    return error.response.data;
                }
            })
    }

    
    getUserProfile(jwToken) {    
        return axios
            .post(
                API_URL_USER_PROFILE,
                {},
                {
                    headers: {
                        Authorization: `Bearer ` + jwToken,
                    },
                }
            )
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error.response;
            });
    }

    
    setUserProfile(firstName, lastName, jwToken) {    
        return axios
            .put(
                API_URL_USER_PROFILE,
                { firstName, lastName },
                {
                    headers: {
                        Authorization: `Bearer ` + jwToken,
                    }
                }
            )
            .then(function (response) {
                return response;
            })
            .catch(function (error) {
                return error.response;
            });
    }
}

export default ApiProvider;
