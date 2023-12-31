import Head from 'next/head';
import Main from '../components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import { useRouter } from 'next/router';
import Contact from '../components/Contact';
import Experiences from '../components/Experiences';

export default function Home(): JSX.Element {

    return (
        <div>
            <Head>
                <title>Pradeep Kumar Medam - Portfolio</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Main />
            <About />
            <Skills/>
            <Contact/>
        </div>
    );
}
