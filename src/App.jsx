import Nav  from "./components/Nav";
import {
  Introduction,
  Clients,
  Services,
  QuoteSection,
  CompanyAddress,
  Contact,
  Footer
} from './sections/index'

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Introduction/>
      </section>
      <section className='padding'>
        <Clients/>
      </section>
      <section className='padding-x py-10'>
        <Services />
      </section>
      <section className='padding'>
       <QuoteSection/>
      </section>
      <section className='bg-pale-blue padding'>
        <CompanyAddress/>
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    
    </main>
  );
};

export default App;
