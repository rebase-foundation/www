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
          <a className="underline" href="https://www.precrypt.org/">
            precrypt.org
          </a>{" "}
          - store encrypted files on IPFS that can be decrypted by folks who
          meet certain rules.
        </li>
      </ul>

      <b className="mt-8 flex">Current folks:</b>
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

      <b className="mt-8 flex">Past experiments:</b>
      <p className="text-gray-500 text-sm mb-4">
        Rebase has tried several things in the past that didn't work out.
      </p>
      <ul className="list-disc pl-4">
        <li className="mb-2">
          <div>Buildrecall - A 412 CPU Rust build farm</div>
          <div className="text-gray-500 text-sm">
            Thought we could make it not cost $600 a month; nope.
          </div>
        </li>
        <li className="mb-2">
          <div>Streambus - Build your own YouTube</div>
          <div className="text-gray-500 text-sm">
            Thought we could make YouTubers more money; merch and sponsorships
            made more than we thought.
          </div>
        </li>
        <li className="mb-2">
          <div>Refader - React for editing live video streams</div>
          <div className="text-gray-500 text-sm">
            This was really cool, I think we talked out of it too early to be
            honest. Kevin King is a very smart person and you should work with
            him.
          </div>
        </li>
        <li className="mb-2">
          <div>
            Room Service - A plug-and-play CRDT-based multiplayer engine
          </div>
          <div className="text-gray-500 text-sm">
            Most folks don't need CRDTs.
          </div>
        </li>

        <li className="mb-2">
          <div>Quirk - An open source mental health app</div>
          <div className="text-gray-500 text-sm">
            When people feel better, they stop paying for your product. If
            people don't feel better, they stop paying for your product.
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Home;
