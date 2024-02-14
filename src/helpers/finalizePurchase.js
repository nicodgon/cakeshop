import Swal from "sweetalert2";

export const finalizePurchase = () => {
  Swal.fire({
    title: "Compra finalizada con exito",
    text: `¡Muchas gracias por confiar en nosotros!`,
    color: "#4f9000",
    icon: "success",
    allowOutsideClick: false,
    showConfirmButton: false,
  });
  setTimeout(() => {
    window.location.reload();
  }, 5000);
};