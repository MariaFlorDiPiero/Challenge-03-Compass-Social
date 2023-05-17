
import '../Pages/Register.css';
import Divright from '../Components-Register/Divright';
import Registry from '../Components-Register/Registry';
import List from '../Components-Register/List';
import Account from '../Components-Register/Account';

function Register() {

return (
<>
<div className="central">
  
  <Divright />

  <div className="left">
      
      < Registry/>
      < List/>
      <Account/>
  </div>
</div>

</>
)}

export default Register;

