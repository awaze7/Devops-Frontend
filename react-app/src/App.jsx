import './App.css';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

  // the AWS regions with their codes
  const awsRegions = [
    { name: 'US East (N. Virginia)', code: 'us-east-1' }, { name: 'US East (Ohio)', code: 'us-east-2' },
    { name: 'US West (N. California)', code: 'us-west-1' }, { name: 'US West (Oregon)', code: 'us-west-2' },
    { name: 'Asia Pacific (Mumbai)', code: 'ap-south-1' }, { name: 'Asia Pacific (Osaka)', code: 'ap-northeast-3' },
    { name: 'Asia Pacific (Seoul)', code: 'ap-northeast-2' }, { name: 'Asia Pacific (Singapore)', code: 'ap-southeast-1' },
    { name: 'Asia Pacific (Sydney)', code: 'ap-southeast-2' }, { name: 'Asia Pacific (Tokyo)', code: 'ap-northeast-1' },
    { name: 'Canada (Central)', code: 'ca-central-1' }, { name: 'Europe (Frankfurt)', code: 'eu-central-1' },
    { name: 'Europe (Ireland)', code: 'eu-west-1' }, { name: 'Europe (London)', code: 'eu-west-2' },
    { name: 'Europe (Paris)', code: 'eu-west-3' }, { name: 'Europe (Stockholm)', code: 'eu-north-1' },
    { name: 'South America (São Paulo)', code: 'sa-east-1' }, { name: 'Africa (Cape Town)', code: 'af-south-1' },
    { name: 'Asia Pacific (Hong Kong)', code: 'ap-east-1' }, { name: 'Asia Pacific (Hyderabad)', code: 'ap-south-2' },
    { name: 'Asia Pacific (Jakarta)', code: 'ap-southeast-3' }, { name: 'Asia Pacific (Melbourne)', code: 'ap-southeast-4' },
    { name: 'Canada (Calgary)', code: 'ca-west-1' }, { name: 'Europe (Milan)', code: 'eu-south-1' },
    { name: 'Europe (Spain)', code: 'eu-south-2' }, { name: 'Europe (Zurich)', code: 'eu-central-2' },
    { name: 'Middle East (Bahrain)', code: 'me-south-1' }, { name: 'Middle East (UAE)', code: 'me-central-1' },
    { name: 'Israel (Tel Aviv)', code: 'il-central-1' }
  ];
function App() {
  const [awsAccessKey, setAwsAccessKey] = useState('');
  const [awsSecretKey, setAwsSecretKey] = useState('');
  const [region, setRegion] = useState('');
  const [appName, setAppName] = useState('');
  const [env, setEnv] = useState('');
  const [technology, setTechnology] = useState('');
  const [reactVersion, setReactVersion] = useState('');
  const [nodeVersion, setNodeVersion] = useState('');
  const [runCommand, setRunCommand] = useState('');
  const [buildCommand, setBuildCommand] = useState('');
  const [githubRepo, setGithubRepo] = useState('');
  const [portNumber, setPortNumber] = useState('');
  const [dockerHubID, setDockerHubID] = useState('');
  const [dockerHubPassword, setDockerHubPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = {
      awsAccessKey,
      awsSecretKey,
      region,
      appName,
      env,
      reactVersion,
      nodeVersion,
      runCommand,
      buildCommand,
      githubRepo,
      portNumber,
      dockerHubID,
      dockerHubPassword,
    };

    console.log('Form Data:', formData);

    try {
      // const response = await axios.post('/deploy', formData);
      // console.log(response.data);
      toast("Successfully deployed application")
    } catch (error) {
      toast("Oops! Something went wrong")
      // console.error('Error deploying application', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white p-8 my-8 rounded-lg shadow-lg w-full max-w-xl">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900">Deploy App on AWS</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            value={awsAccessKey}
            onChange={e => setAwsAccessKey(e.target.value)}
            placeholder="AWS Access Key"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            value={awsSecretKey}
            onChange={e => setAwsSecretKey(e.target.value)}
            placeholder="AWS Secret Key"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
           <select
            value={region}
            onChange={e => setRegion(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {!region && <option value="" disabled>Select AWS Region</option>}
            {awsRegions.map(({ name, code }) => (
              <option key={code} value={code}>{name}</option>
            ))}
          </select>
          <input
            type="text"
            value={appName}
            onChange={e => setAppName(e.target.value)}
            placeholder="Application Name"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <select
            value={env}
            onChange={e => setEnv(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {!env && <option value="" disabled>Select Deployment Environment</option>}
            <option value="ec2">EC2</option>
            <option value="elasticbeanstalk">Elastic Beanstalk</option>
          </select>
          <input
            type="text"
            value={dockerHubID}
            onChange={e => setDockerHubID(e.target.value)}
            placeholder="Docker Hub ID"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="password"
            value={dockerHubPassword}
            onChange={e => setDockerHubPassword(e.target.value)}
            placeholder="Docker Hub Password"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <select
            value={technology}
            onChange={e => setTechnology(e.target.value)}
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            {!technology && <option value="" disabled>Select Technology</option>}
            <option value="react">React</option>
            <option value="node">Node</option>
          </select>

          {technology === 'react' && (
            <>
              <input
                type="text"
                value={reactVersion}
                onChange={e => setReactVersion(e.target.value)}
                placeholder="React Version"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <input
                type="text"
                value={portNumber}
                onChange={e => setPortNumber(e.target.value)}
                placeholder="Port Number"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </>
          )}

          {/* {technology === 'node' && (
            <>
              <input
                type="text"
                value={nodeVersion}
                onChange={e => setNodeVersion(e.target.value)}
                placeholder="Node Version"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </>
          )} */}
          <input
            type="text"
            value={nodeVersion}
            onChange={e => setNodeVersion(e.target.value)}
            placeholder="Node Version"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            value={runCommand}
            onChange={e => setRunCommand(e.target.value)}
            placeholder="Run Command"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            value={buildCommand}
            onChange={e => setBuildCommand(e.target.value)}
            placeholder="Build Command"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <input
            type="text"
            value={githubRepo}
            onChange={e => setGithubRepo(e.target.value)}
            placeholder="GitHub Repository"
            className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Deploy
          </button>
        </form>
        <ToastContainer />
      </div>
    </div>
  )
}

export default App
