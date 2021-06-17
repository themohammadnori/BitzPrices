import Navbar from './Navbar';
import Head from 'next/head';
import { networkInterfaces } from 'os';

const Layout = (props) => (
    <div>
        <Head>
      
       <title>Bitzprices</title>
        <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
           {props.children}
        </div>
        


    </div>

);


export default Layout;