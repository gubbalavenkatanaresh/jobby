import Header from '../Header'
import './index.css'

const Home = props => {
  const onClickFind = () => {
    const {history} = props
    history.push('/jobs')
  }
  return (
    <>
      <Header />
      <div className="home-container">
        <h1>Find The Job That Fits Your Life</h1>
        <p>Millions of people are searching for jobs</p>
        <button type="button" className="find-jobs-btn" onClick={onClickFind}>
          Find Jobs
        </button>
      </div>
    </>
  )
}

export default Home
