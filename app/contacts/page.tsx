import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Form } from "./components/Form";
import { Contacts } from "./components/Contacts";
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";

const ContactsPage = () => {
  return (
    <MainLayout>
      <SplitScreen>
        <div>
          <Contacts/>
        </div>
        <>
          <Form/>
        </>
      </SplitScreen>
    </MainLayout>
  )
}

export default ContactsPage;