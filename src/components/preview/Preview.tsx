import './preview.css';

type Data = { objPass:{
  service: string;
  login: string;
  password: string;
  url: string;
}};

function Preview({ objPass }: Data) {
  const { service, login, password, url } = objPass;
  return (
    <section className="card">
      <p className="preview-text">Serviços: {service}</p>
      <p className="preview-text">Login: {login}</p>
      <p className="preview-text">Password: {password}</p>
      <p className="preview-text">URL: {url}</p>
    </section>
  );
}

export default Preview;
