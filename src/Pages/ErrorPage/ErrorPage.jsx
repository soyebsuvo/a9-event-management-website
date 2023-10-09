import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className='flex justify-center h-screen items-center'>
      <div className="space-y-3">
        <h1 className="text-4xl text-center">Page Not Found</h1>
        <h2 className="text-3xl text-center">404</h2>
        <div className="flex justify-center">
        <Link to="/"><button className="btn btn-sm bg-[#FCB41E] text-white">Go Home</button></Link>
        </div>
      </div>
    </div>
  )
}
