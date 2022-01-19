import { useParams } from "react-router-dom"

const Profile = () => {
    let { username } = useParams("default");

    return (
        <>
            <h1>{username}'s Profile</h1>
        </>
    )
}

export default Profile