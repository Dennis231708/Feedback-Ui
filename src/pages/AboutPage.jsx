import {Link} from 'react-router-dom'
import Card from '../components/shared/Card'


function AboutPage() {
  return (
    <Card>
    <div className="about">
        <h1>About This Project</h1>
        <p>This is React app to leave feedback for a product or service</p>
        <p>Version 1.0.0</p>
        <Link to='/'>Back To Home</Link>
    </div>
    </Card>
  )
}

export default AboutPage