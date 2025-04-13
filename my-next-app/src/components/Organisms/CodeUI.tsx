'use client';


export default function CodeEditorUI() {
  return (
    <div className="flex h-[500px] bg-gray-900 rounded-lg shadow-xl border border-gray-800">
      <div className="flex-grow max-w-2xl h-full bg-[#1e2227]">
        {/* Editor top bar with dots */}  
        <div className="h-8 bg-[#1e2227] flex items-center px-3 border-b border-gray-800">
          <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
          <div className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></div>
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
        </div>
        
        {/* Code content */}
        <div className="font-mono text-sm" style={{ backgroundColor: '#1e2227' }}>
          <div className="flex">
            <div className="leading-1 text-[10px] text-gray-500  w-6 mr-2 text-right select-none">1</div>
            <div className='text-[10px] leading-1'>
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> $table</span>
              <span className="text-white"> = </span>
              <span className="text-orange-300">document</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">querySelector</span>
              <span className="text-white">(</span>
              <span className="text-green-300">"#table"</span>
              <span className="text-white">);</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-1 text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">2</div>
            <div></div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">3</div>
            <div className='leading-none text-[10px]'>
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> state</span>
              <span className="text-white"> = </span>
              <span className="text-white">{"{"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">4</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-blue-300">data</span>
              <span className="text-white">: []</span>
              <span className="text-white">,</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">5</div>
            <div className='leading-none text-[10px]'>
              <span className="text-white">{"}"}</span>
              <span className="text-white">;</span>
            </div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">6</div>
            <div></div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">7</div>
            <div className='leading-none text-[10px]'>
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> fetchData</span>
              <span className="text-white"> = </span>
              <span className="text-purple-400">async</span>
              <span className="text-white"> () </span>
              <span className="text-purple-400">&gt;</span>
              <span className="text-white"> {"{"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">8</div>
            <div className='leading-none text-[10px]'>
              <span className="text-pink-400">try</span>
              <span className="text-white"> {"{"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">9</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> result</span>
              <span className="text-white"> = </span>
              <span className="text-purple-400">await</span>
              <span className="text-yellow-400"> fetch</span>
              <span className="text-white">(</span>
              <span className="text-green-300">"https://jsonplaceholder.typicode.com/comments"</span>
              <span className="text-white">);</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">10</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-blue-300">state</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">data</span>
              <span className="text-white"> = </span>
              <span className="text-purple-400">await</span>
              <span className="text-blue-300"> result</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">json</span>
              <span className="text-white">();</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">11</div>
            <div className="leading-none text-[10px]">
              <span className="text-white">{"}"}</span>
              <span className="text-pink-400"> catch </span>
              <span className="text-white">(</span>
              <span className="text-blue-300">error</span>
              <span className="text-white">) {"{"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">12</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-orange-300">console</span>
              <span className="text-white">.</span>
              <span className="text-red-400">error</span>
              <span className="text-white">(</span>
              <span className="text-green-300">"fetch doesn work"</span>
              <span className="text-white">);</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">13</div>
            <div className="leading-none text-[10px]">
              <span className="text-white">{"}"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">14</div>
            <div className="leading-none text-[10px]">
              <span className="text-white">{"};"}</span>
            </div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">15</div>
            <div></div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">16</div>
            <div className='leading-none text-[10px]'>
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> generateTemplateHTML</span>
              <span className="text-white"> = </span>
              <span className="text-white">(</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">) </span>
              <span className="text-purple-400">&gt;</span>
              <span className="text-white"> {"{"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">17</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-pink-400">return {"`"}</span>
            </div>
          </div>
          
          {/* <div className="flex">
            <div className="text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">18</div>
            <div className="pl-8 text-[10px]">
              <span className="text-green-300">{"`"}</span>
            </div>
          </div> */}
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">19</div>
            <div className="leading-none pl-8 text-[10px]">
              <span className="text-green-300">{"<tr>"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">20</div>
            <div className="leading-none pl-12 text-[10px]">
              <span className="text-green-300">{"<td>${"}</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">postId</span>
              <span className="text-green-300">{"}</td>"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">21</div>
            <div className="leading-none pl-12 text-[10px]">
              <span className="text-green-300">{"<td>${"}</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">id</span>
              <span className="text-green-300">{"}</td>"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">22</div>
            <div className="leading-none pl-12 text-[10px]">
              <span className="text-green-300">{"<td>${"}</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">name</span>
              <span className="text-green-300">{"}</td>"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">23</div>
            <div className="leading-none pl-12 text-[10px]">
              <span className="text-green-300">{"<td>${"}</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">email</span>
              <span className="text-green-300">{"}</td>"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-[10px] text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">24</div>
            <div className="leading-none pl-12 text-[10px]">
              <span className="text-green-300">{"<td>${"}</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">body</span>
              <span className="text-green-300">{"}</td>"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">25</div>
            <div className="leading-none pl-8 text-[10px]">
              <span className="text-green-300">{"</tr>"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">26</div>
            <div className="leading-none pl-8 text-[10px]">
              <span className="text-green-300">{"`"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">27</div>
            <div className="leading-none text-[10px]">
              <span className="text-white">{"};"}</span>
            </div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">28</div>
            <div></div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">29</div>
            <div className='leading-none text-[10px]'>
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> renderHTML</span>
              <span className="text-white"> = </span>
              <span className="text-white">() </span>
              <span className="text-purple-400">&gt;</span>
              <span className="text-white"> {"{"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">30</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> HTML</span>
              <span className="text-white"> = </span>
              <span className="text-blue-300">state</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">map</span>
              <span className="text-white">((</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">) </span>
              <span className="text-purple-400">&gt;</span>
              <span className="text-white"> </span>
              <span className="text-blue-300">generateTemplateHTML</span>
              <span className="text-white">(</span>
              <span className="text-blue-300">data</span>
              <span className="text-white">)).</span>
              <span className="text-blue-300">join</span>
              <span className="text-white">(</span>
              <span className="text-green-300">""</span>
              <span className="text-white">);</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">31</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-blue-300">$table</span>
              <span className="text-white">.</span>
              <span className="text-blue-300">innerHTML</span>
              <span className="text-white"> = </span>
              <span className="text-blue-300">HTML</span>
              <span className="text-white">;</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">32</div>
            <div className="leading-none text-[10px]">
              <span className="text-white">{"};"}</span>
            </div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">33</div>
            <div></div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">34</div>
            <div className='leading-none text-[10px]'>
              <span className="text-pink-400">const</span>
              <span className="text-blue-300"> init</span>
              <span className="text-white"> = </span>
              <span className="text-purple-400">async</span>
              <span className="text-white"> () </span>
              <span className="text-purple-400">&gt;</span>
              <span className="text-white"> {"{"}</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">35</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-purple-400">await</span>
              <span className="text-white"> </span>
              <span className="text-blue-300">fetchData</span>
              <span className="text-white">();</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">36</div>
            <div className="leading-none pl-4 text-[10px]">
              <span className="text-blue-300">renderHTML</span>
              <span className="text-white">();</span>
            </div>
          </div>
          
          <div className="flex">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">37</div>
            <div className="leading-none text-[10px]">
              <span className="text-white">{"};"}</span>
            </div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">38</div>
            <div></div>
          </div>
          
          <div className="flex ">
            <div className="leading-none text-gray-500 w-6 mr-2 text-right select-none text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px] text-[10px]">39</div>
            <div className='leading-none text-[10px]'>
              <span className="text-yellow-400">init</span>
              <span className="text-white">();</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}