import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCow } from "@fortawesome/free-solid-svg-icons";


export default function CartEmpty() {




  return (
    <>
       <FontAwesomeIcon icon={faCow} className="h-24 "  /> 
       <div> El carrito está vacío</div> 
    </>
  );
}
