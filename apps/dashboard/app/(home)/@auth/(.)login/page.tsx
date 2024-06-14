import { Loginform } from "@/components/auth/Loginform"
import { Modal } from "@/components/modal/dialog"

export default function Page() {
  return (
  <Modal showmodal={true}>
      <Loginform />
  </Modal>
  );
}
