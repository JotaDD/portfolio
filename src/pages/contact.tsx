import CopyButton from '@/components/commons/Button/CopyButton';
import Head from 'next/head';
const Contact = () => {
  return (
    <>
      <Head>
        <title>Contatos | JotaDD</title>
      </Head>
      <div className='mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32'>
        <h1 className='text-5xl md:text-7xl font-bold text-center'>Contatos</h1>
        <ul className='table mx-auto space-y-6 md:space-y-8'>
          <li className='md:text-xl'>
            <span className='font-bold'>Email</span>
            <div className=' flex gap-1 md:gap-3 items-center '>
              <a href="mailto:joaoeduardogomes@gmail.com" className='text-ms md:text-lg text-slate-300 underline truncate'>joaoeduardogomes@gmail.com</a>
              <CopyButton textToCopy='joaoeduardogomes@gmail.com' />
            </div>
          </li>
          <li className='md:text-xl'>
            <span className='font-bold'>LinkedIn</span>
            <div className=' flex gap-1 md:gap-3 items-center '>
              <a className='text-ms md:text-lg text-slate-300 underline truncate' href="https://www.linkedin.com/in/jotadd">https://linkedin.com/in/JotaDD</a>
              <CopyButton textToCopy='https://linkedin.com/in/jotadd'/>
            </div>
          </li>
          <li className='md:text-xl'>
            <span className='font-bold'>GitHub</span>
            <div className=' flex gap-1 md:gap-3 items-center '>
              <a className='text-ms md:text-lg text-slate-300 underline truncate' href="https://www.github.com/jotadd">https://github.com/JotaDD</a>
              <CopyButton textToCopy='https://www.github.com/jotadd'/>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Contact;