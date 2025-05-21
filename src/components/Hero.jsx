export default function Hero(){



    return(
        <div className="text-white flex flex-col justify-center items-center h-[80vh]">
            <div className="h-[130px] w-[130px] rounded-t-xl rounded-tr-2xl rounded-r-[-30px] - bg-yellow-600 animate-spin delay-500 transition-colors duration-500"></div>
            <h1 className="text-8xl font-extrabold relative inline-block">
  <span className="relative">
    C
    <span className="absolute -top-3 -right-6 h-[0.2em] w-[0.2em] bg-yellow-400 rounded-full 
                    animate-ping opacity-75 transition-all duration-1000" />
  </span>
  réations animées
</h1>            <span className="text-center text-xl m-3">Portfolio de conception interactive</span>
            <button className="bg-gradient-to-tr from-pink-500 via-red-400 to-orange-400 
                  px-7 py-2.5 rounded-4xl 
                  text-white font-semibold 
                  shadow-lg shadow-pink-500/30 
                  hover:shadow-xl hover:shadow-orange-400/40 
                  hover:scale-[1.02] 
                  transition-all duration-300 
                  active:scale-95 
                  focus:outline-none focus:ring-2 focus:ring-pink-200 animate-bounce m-5 cursor-pointer">
  Découvrir
</button>      </div>
    )
}