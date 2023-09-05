import { MainLayout } from "@/src/layouts/MainLayout/MainLayout";
import { Form } from "./components/Form";
import { Contacts } from "./components/Contacts";
import { SplitScreen } from "@/src/components/UI/SplitScreen/SplitScreen";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacts',
};

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