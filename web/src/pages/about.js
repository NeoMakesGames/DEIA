import Navbar from "@/components/navbar"
export default function About(){
    return(
        <main>
            <Navbar/>
            <div className="hero min-h-screen h-screen bg-gradient-to-r from-blue-100 via-white-500 to-base-500  background-animate flex justify-center">
                    {/*PRIMER SCREEN */}
            <div>
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">DEIA</h1>
                        <p className="py-6">Sobre nuestro proyecto</p>
                    </div>
                </div>
            </div>
                    {/* SEGUNDO SCREEN*/}
            <div >
                <div className="hero-content text-start">
                    <h1 className="animate-pulse animate-infinite text-2xl font-bold">Quienes somos</h1>
                </div>
            </div>
            </div>
        </main>
    )
}