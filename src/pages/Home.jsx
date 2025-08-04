
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <motion.section className='p-10 text-center bg-blue-50 min-h-screen' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-4xl font-bold mb-4">Empowering Lives, One Step at a Time</h2>
      <p className="mb-6 text-lg">We are an NGO focused on education, food & shelter for the underprivileged.</p>
      <Link to="/volunteer" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-800">Join Us</Link>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-2xl font-bold text-blue-600">10,000+</h3>
          <p>Children Educated</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-2xl font-bold text-blue-600">500+</h3>
          <p>Active Volunteers</p>
        </div>
        <div className="bg-white shadow p-6 rounded">
          <h3 className="text-2xl font-bold text-blue-600">12</h3>
          <p>States Covered</p>
        </div>
      </div>
      </motion.section>
    </div>
  )
}

export default Home
