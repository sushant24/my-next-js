import { NextPage } from 'next';
import Link from 'next/link';

const IndexPage: NextPage = () => (
  <>
    <h1>Hello World</h1>
    <Link href="/about">
      <a>About</a>
    </Link>
  </> 
)

export default IndexPage;