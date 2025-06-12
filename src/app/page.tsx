import '@/styles/Iris.css';
export default function Home() {
  return (
    <div className="flower">
     <div className="iris">
  {/* <div classNameName="petal petal1"><div classNameName="inner"></div></div>
  <div classNameName="petal petal2"><div classNameName="inner"></div></div>
  <div classNameName="petal petal3"><div classNameName="inner"></div></div>
  <div classNameName="petal petal4"><div classNameName="inner"></div></div>
  <div classNameName="petal petal5"><div classNameName="inner"></div></div>
  <div classNameName="petal petal6"><div classNameName="inner"></div></div> */}
  <svg width="300" height="500" viewBox="0 0 200 300">
  {/* <!-- Thân cây --> */}
  <rect x="98" y="150" width="4" height="150" fill="green" />

  {/* <!-- Lá --> */}
  <path d="M100 200 Q80 250 90 300 Q100 270 100 200" fill="green" />
  <path d="M100 200 Q120 250 110 300 Q100 270 100 200" fill="green" />

  {/* <!-- Cánh hoa 1 --> */}
  <path className="petal" d="M100 100 
                         C 80 60, 60 60, 80 100 
                         C 60 120, 80 140, 100 120 
                         C 120 140, 140 120, 120 100 
                         C 140 60, 120 60, 100 100 Z" 
        fill="url(#petalGradient)" />

  {/* <!-- Cánh hoa 2 --> */}
  <path className="petal" d="M100 100 
                         C 90 80, 90 60, 100 50 
                         C 110 60, 110 80, 100 100 Z" 
        fill="url(#petalGradient)" />

  {/* <!-- Nhụy --> */}
  <circle cx="100" cy="100" r="5" fill="yellow" />

  {/* <!-- Gradient --> */}
  <defs>
    <linearGradient id="petalGradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#b197fc"/>
      <stop offset="100%" stop-color="#e0b3ff"/>
    </linearGradient>
  </defs>
</svg>

</div>
    </div>
  );
}
