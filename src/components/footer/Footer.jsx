const Footer = () => {
    return (
      <footer className="page-footer  #2196f3 black">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="https://github.com/Botirjon0708/React-Shop"
                 target="_blank"
                 rel="noreferrer">
              Repo
            </a>
          </div>
        </div>
      </footer>
    );
}

export {Footer}