'use client';

export default function Hello() {
  return (
    <main className="mt-10 m-auto w-[80%] bg-none">
      <h2 className="text-sm text-white">Hi all. I am</h2>
      <h1 className="text-5xl font-bold text-white mt-2 tracking-widest">Damominee</h1>
      <p className="text-xl text-blue-400">&gt; Software Developer</p>

      <div className="mt-6 text-gray-400">my number</div>
      <div>
        <span className="text-blue-400">const</span>{' '}
        <span className="text-green-400">telephoneNum</span>{' '}
        <span className="text-white"> = </span>
        <span className="text-orange-300">{`"0376771927"`}</span>;
      </div>

      <div className="mt-4 text-gray-400">my e-mail</div>
      <div>
        <span className="text-blue-400">const</span>{' '}
        <span className="text-green-400">email</span>{' '}
        <span className="text-white"> = </span>
        <span className="text-orange-300">{`"nguyenthunngoc@gmail.com"`}</span>;
      </div>

      <div className="mt-4 text-gray-400">Github</div>
      <div>
        <span className="text-blue-400">const</span>{' '}
        <span className="text-green-400">githubLink</span>{' '}
        <span className="text-white"> = </span>
        <span className="text-orange-300">{`"https://github.com/thungoc123"`}</span>;
      </div>

      <div className="mt-4 text-gray-400">LinkedIn</div>
      <div>
        <span className="text-blue-400">const</span>{' '}
        <span className="text-green-400">linkedinPage</span>{' '}
        <span className="text-white"> = </span>
        <span className="text-orange-300">{`"Verifying ..."`}</span>;
      </div>
    </main>
  );
}
