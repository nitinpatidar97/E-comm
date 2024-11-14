import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';


const Profile = () => {
    const { user } = useAuth0();
    if (user != undefined) {
        const { name, email, given_name, picture } = user;

        const MyProfile = () => {
            return (
                <Wrapper className='container mt-5 p-5 text-center border'>
                    <h5>{given_name.toLocaleUpperCase()}</h5>
                    <figcaption className='mb-2 ms-2'>
                        <img src={picture} alt={name} />
                    </figcaption>
                    <div className='my-auto'>
                        <h2>{name}</h2>
                        <p>{email}</p>
                    </div>
                </Wrapper>
            )
        }

        return <MyProfile />
    } else return null


}

const Wrapper = styled.div`

padding : 3rem 0;
background: #f2f2f2;
width: 31%;
border-radius: 5%;

img {
    width: 8rem;
    height: 8rem;
    border : .2rem solid rgb(98 84 243);
    border-radius: 50%;
  }
  h2 {
    font-size: 1.5rem;
  }

  @media (max-width: 575px) {
width: 80%;

  
      .myImg{
        width:25%
      }
  }

`

export default Profile;