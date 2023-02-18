import PropTypes from 'prop-types';

const Profile = ({ fullName, bio, profession, children, handleName }) => {
    return (
    <div style={{ 
        display: 'flex',  
        flexDirection: 'column', 
        alignItems: 'center' 
    }}>
        {children}
        <h2 style={{ backgroundColor:"grey",margin:'10px'}}>{fullName}</h2>
        <p style={{ backgroundColor:"grey",margin:'10px'}}>{bio}</p>
        <p style={{ backgroundColor:"grey",margin:'10px'}}>{profession}</p>
        <button style={{ backgroundColor:"white",margin:'10px'}}
        onClick={() => handleName(fullName)}>Show Name</button>
    </div>
    );
};

Profile.defaultProps = {
    fullName: 'No Name',
    bio: 'No bio available',
    profession: 'Unknown'
};

Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    handleName: PropTypes.func.isRequired
};

export default Profile