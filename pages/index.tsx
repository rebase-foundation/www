import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="p-4">
      <h1 className="mb-1 font-bold">Rebase</h1>
      <p className="mb-8">is an economic research and development company.</p>

      <b className="flex">Products:</b>
      <ul>
        <li>
          <a className="underline" href="https://www.strangemood.org/">
            strangemood.org
          </a>{" "}
          - a decentralized marketplace for software licenses.
        </li>
        <li>
          <a className="underline" href="https://www.openmetagraph.com/">
            openmetagraph.com
          </a>{" "}
          - a typed metadata format for decentralized projects that generates
          it's own GraphQL.
        </li>
        <li>
          <a className="underline" href="https://www.strangemood.org/">
            precrypt.org
          </a>{" "}
          - store encrypted files on IPFS that can be decrypted by folks who
          meet certain rules.
        </li>
      </ul>

      <b className="mt-8 flex">People:</b>
      <ul>
        <li>
          <a className="underline" href="https://twitter.com/evanjconrad">
            Evan Conrad
          </a>
        </li>
        <li>
          <a className="underline" href="https://twitter.com/jacobpedd">
            Jacob Peddicord
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
