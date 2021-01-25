import Layout from '../components/Layout';

const Home = () => {
  const date = new Date();
  const day = date.getDate() + '-' + date.getMonth() + '-' + date.getFullYear();
  return (
    <Layout>
      <div className="description" />
      <div className='time-updated'>
        <span>Last updated: { new Date().getDate()}-{ new Date().getMonth()+1}-{ new Date().getFullYear() } </span>
      </div>
      <div className='container'>
        <h2>This website is under construction....</h2>
      </div>     
    </Layout>   
  )
};

export default Home;
