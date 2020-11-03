import { NextPage } from 'next';
import Link from 'next/link';

const MePage: NextPage = () => (
  <>
    <h1>Hey its me</h1>
    <Link href="/about">
      <a>Go back to about page</a>
    </Link>
  </> 
)

export default MePage;