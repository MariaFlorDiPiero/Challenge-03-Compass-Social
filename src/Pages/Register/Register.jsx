import '../Register/style.css';
import Divright from './Components-Register/Divright';
import Registry from './Components-Register/Registry';
import List from './Components-Register/List';


function Register() {

  return (
    <>
      <div className="central">

        <Divright />

        <div className="left">

          < Registry />
          < List />

          <aside>
            <p class="pcenter" id="pCenter">Já possui uma conta? <strong>Faça login</strong></p>
          </aside>
        </div>
      </div>

    </>
  )
}

export default Register;

