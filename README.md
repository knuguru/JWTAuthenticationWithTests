"# JWTAuthenticationWithTests" 

This app implements simple login authentication using Rapidapi JWT Bearer Auth. 

Login screen has basic validation to make sure valid username and password are provided

Upon successful login, token and refreshToken are saved into AsyncStorage and user is navigated to home screen

Home screen uses 'MyGreeting' and 'CatFact' custom components. 'MyGreeting' provides an example of how to pass values to component as props. 

'CatFact' component makes a fetch call to get data from 'https://cat-fact.herokuapp.com/facts'. Using a random number generator a random fact is chosen to be displayed on screen.

Home screen also provides the ability to refresh token. Refresh token call would be used when token expires. Upon success, token and refresh token in AsynStorage are replaced with new values

This example also shows how to add automation tests for Expo react native app using 'Jest'

For successful login use the following credentials:
email: 'knuguru@asdf.com',
password: 'Your_password123.'

![1](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/6fa5021e-52d2-4bc1-9940-50f4e5ac1381)
![2](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/ee5e135f-1b66-4681-87a9-47b0391a69f5)
![3](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/28eb8dcd-c209-480d-97bc-9b9e3d7f7d5e)
![4](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/e1beea00-9cef-4334-a476-94a62c13a176)
![5](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/32f43c30-5a45-4fb3-9cc6-b31dc396001c)
![6](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/f2ec67d2-b6ed-4000-b17c-14054622d3ce)
![7](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/f87a1be2-8365-40d4-ba25-46aafb1088b9)
![7a](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/37751fb4-ca88-4906-a727-9ad0ad8bffb5)
![8](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/8f935b21-e431-4ff3-a2ed-eb40a881df7c)

![Test results](https://github.com/knuguru/JWTAuthenticationWithTests/assets/161977397/aad41983-4c1b-4bb8-9e3d-57ccc233e9dc)
