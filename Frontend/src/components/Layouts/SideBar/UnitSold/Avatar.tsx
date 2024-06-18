interface IAvatar {
    avatar : string
} 

const Avatar = ({avatar}: IAvatar) => {
  return (
    <div className="flex">
            <div className="avatar">
                <div className="w-10 mask mask-squircle">
                    <img src={avatar} />
                </div>
            </div>
        </div>
  )
}

export default Avatar