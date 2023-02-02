const UserInfo = ({ userImg, name, for_hire }) => {
  return (
    <div className="d-flex align-items-center">
      {userImg ? <img className="rounded-circle border border-primary-subtle" src={userImg} alt={name} /> : <i class="fa-solid fa-user-large"></i>}
      <div className="ms-3">
        <p className="mb-1 fs-5 text-black">{name}</p>
        {for_hire && <small className="text-primary">Open to Hire <i class="ms-1 fa-solid fa-circle-check"></i></small>}
      </div>
    </div>
  )
}

export default UserInfo;