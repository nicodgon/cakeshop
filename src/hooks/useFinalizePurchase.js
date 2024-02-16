import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useFinalizePurchase = () => {
  let navigate = useNavigate();

  function handleClick() {
    Swal.fire({
      title: "Compra finalizada con exito",
      text: `¡Muchas gracias por confiar en nosotros!`,
      color: "#4f9000",
      icon: "success",
      allowOutsideClick: false,
      showConfirmButton: false,
      timer: 4000,
    });

    setTimeout(() => {
      navigate('/');
    }, 5000);
  }
  return {handleClick}
};