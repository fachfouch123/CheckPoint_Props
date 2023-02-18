import Profile from './profile/profile';
import profileImage from './profile/photo.jpg';

function App() {
  const handleName = name => alert(`Profile user name is ${name}`);
  const name=prompt("Enter your name"); 
  const bio=prompt("Enter your biographi"); 
  const profession=prompt("Enter your Profession "); 

  return (
    <div className="App">
      <Profile 
        fullName={name || "Please reload and enter your name"}
        bio={bio|| "Please reload and enter your bio"}
        profession={profession|| "Please reload and enter your profession"}
        handleName={handleName}
      >         
      <img src={profileImage} alt="Profile" style={{ maxWidth: '150px', borderRadius: '99%' }} />

      </Profile>
    </div>
  );
}

export default App;
