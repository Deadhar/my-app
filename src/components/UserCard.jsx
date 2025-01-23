const UserCard =(props)=>{
    const {userName, userAge, userCity} = props
     return (
   <ul>
    <li>{userName}</li>
    <li>{userAge}</li>
    <li>{userCity}</li>
   </ul>);
};
export default UserCard