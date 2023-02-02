import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import unsplash from '../../service';

const User = () => {
  let { userName } = useParams();
  const [user, setUser] = useState({});
  useEffect(() => {
    if (userName) {
      unsplash.users.get({ username: userName }).then(result => {
        if (result.errors) {
          // handle error here
          console.log('error occurred: ', result.errors[0]);
        } else {
          // handle success here
          const user = result.response;
          console.log(user);
          setUser(user);
        }
      });
    }

  }, [userName])
  const { name, profile_image, bio, location, tags, social } = user;
  return (
    <div className='border-bottom'>
      <div className='container my-4'>
        <div className='d-flex flex-column flex-md-row align-items-start'>
          <div className='p-3 border rounded-circle d-inline-block'>
            <img src={profile_image?.large} className="rounded-circle" alt={name} />
          </div>
          <div className='ms-4 mt-3'>
            <div>
              <p className='fs-2 text-uppercase mb-2'>{name}</p>
            </div>
            <p className='mt-2 mb-0 w-100'>{bio}</p>
            <p className='mt-3 mb-0 d-flex align-items-center'>
              <i class="fa-solid me-3 fs-4 fa-location-dot"></i>
              {location}
            </p>
            <div className='mt-3'>
              <span className='mb-2 d-inline-block'>Social Media</span>
              <div>
                <a><i class="fa-brands fs-3 fa-instagram me-4"></i></a>
                <a><i class="fa-brands fs-3 fa-square-twitter me-4"></i></a>
                <a><i class="fa-solid fs-3 fa-globe"></i></a>
              </div>
            </div>
            <div className='mt-3'>
              <span>Interests</span>
              <div>
                {tags?.custom && tags?.custom.map((tag) => {
                  return (
                    <span class="badge p-2 text-bg-secondary text-capitalize me-2 my-2">{tag?.title}</span>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;